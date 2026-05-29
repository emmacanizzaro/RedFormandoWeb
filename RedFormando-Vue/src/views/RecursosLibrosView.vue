<template>
  <section class="section">
    <div class="section-inner">
      <div class="shop-head">
        <h2>LIBROS Y MANUALES</h2>
        <button
          class="btn-strong"
          type="button"
          aria-label="Ver carrito de compras"
          @click="openCart"
        >
          Ver carrito (<span>{{ cartCount }}</span
          >)
        </button>
      </div>
      <div class="carousel-actions" aria-label="Controles de carrusel de libros">
        <button class="carousel-btn" type="button" aria-label="Anterior" @click="prevBook">
          Anterior
        </button>
        <span class="carousel-status">{{ currentIndex + 1 }} / {{ books.length }}</span>
        <button class="carousel-btn" type="button" aria-label="Siguiente" @click="nextBook">
          Siguiente
        </button>
      </div>
      <div class="product-carousel">
        <article v-for="book in visibleBooks" :key="book.title" class="product-card">
          <img
            :src="book.img"
            :alt="'Portada: ' + book.title"
            loading="lazy"
            width="180"
            height="260"
          />
          <h3>{{ book.title }}</h3>
          <p>$ {{ book.price }}</p>
          <button class="btn-strong add-cart" @click="addToCart(book)">Comprar</button>
        </article>
      </div>
    </div>
    <CartPanel
      :show="showCart"
      @close="showCart = false"
      @clear="clearCart"
      @checkout="checkout"
      @remove="removeFromCart"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import CartPanel from '../components/CartPanel.vue'

const books = ref([
  {
    title: 'Admin. y Planif. de la palabra',
    price: 10000,
    img: '/assets/images/Libros/Admin, planif de la palabra.jpg',
  },
  { title: 'Bendecidos en Él', price: 12000, img: '/assets/images/Libros/Bendecidos en Él.jpg' },
  {
    title: 'Builth in the truth',
    price: 13000,
    img: '/assets/images/Libros/Builth in the truth.jpg',
  },
  {
    title: 'EDR Sacerdocio y Finanzas',
    price: 15000,
    img: '/assets/images/Libros/ER Finanzas.jpg',
  },
  {
    title: 'Edificados en la Verdad',
    price: 11000,
    img: '/assets/images/Libros/Edificados en la verdad.jpg',
  },
  {
    title: 'El desierto no es tu destino',
    price: 20000,
    img: '/assets/images/Libros/El desierto no es tu destino.jpg',
  },
  {
    title: 'El evangelio eterno',
    price: 17000,
    img: '/assets/images/Libros/El evangelio eterno.jpg',
  },
  {
    title: 'Entrenamiento para equipos de alabanza',
    price: 16000,
    img: '/assets/images/Libros/Entrenamiento para equipos de alabanza.jpg',
  },
  {
    title: 'Fieles, exactos y certeros',
    price: 9000,
    img: '/assets/images/Libros/Fieles, exactos y certeros.jpg',
  },
  {
    title: 'Justificados por Gracia',
    price: 14000,
    img: '/assets/images/Libros/Justificados por Gracia.jpg',
  },
  {
    title: 'La oración en el espíritu',
    price: 10500,
    img: '/assets/images/Libros/La oración en el espíritu.jpg',
  },
  {
    title: 'Manual para Predicadores',
    price: 12500,
    img: '/assets/images/Libros/Manual para Predicadores.jpg',
  },
  {
    title: 'Ministerios del Espíritu',
    price: 13500,
    img: '/assets/images/Libros/Ministerios del Espíritu.jpg',
  },
  { title: 'Padre Nuestro', price: 19000, img: '/assets/images/Libros/Padre Nuestro.jpg' },
  {
    title: 'Posicionados en la Santísima Fe',
    price: 22000,
    img: '/assets/images/Libros/Posicionados en la santisima FE.jpg',
  },
  {
    title: 'Sitiados por la religiosidad',
    price: 18000,
    img: '/assets/images/Libros/Sitiados por la religiosidad.jpg',
  },
  {
    title: 'Tiempo y Eternidad',
    price: 21000,
    img: '/assets/images/Libros/Tiempo y Eternidad.jpg',
  },
])

const currentIndex = ref(0)
const visibleBooks = computed(() => books.value.slice(currentIndex.value, currentIndex.value + 3))

function prevBook() {
  if (currentIndex.value > 0) currentIndex.value--
}
function nextBook() {
  if (currentIndex.value < books.value.length - 3) currentIndex.value++
}

const cart = ref([])
const showCart = ref(false)
const cartCount = computed(() => cart.value.reduce((acc, item) => acc + item.qty, 0))

function addToCart(book) {
  const found = cart.value.find((item) => item.title === book.title)
  if (found) found.qty++
  else cart.value.push({ ...book, qty: 1 })
}
function removeFromCart(book) {
  const idx = cart.value.findIndex((item) => item.title === book.title)
  if (idx !== -1) cart.value.splice(idx, 1)
}
function clearCart() {
  cart.value = []
}
function openCart() {
  showCart.value = true
}
function checkout() {
  // Aquí se puede integrar lógica de checkout real
  alert('¡Gracias por tu compra!')
  clearCart()
  showCart.value = false
}
</script>
useMeta({ title: 'REDFORMANDO | Recursos Libros', meta: [ { name: 'description', content: 'Recursos
de libros y manuales digitales de Redformando para formación y crecimiento ministerial.' }, {
property: 'og:title', content: 'REDFORMANDO | Recursos Libros' }, { property: 'og:description',
content: 'Catálogo de libros y manuales digitales con checkout por moneda.' }, { property:
'og:image', content: 'https://www.redformando.com/assets/images/Redformando.png' }, { name:
'twitter:title', content: 'REDFORMANDO | Recursos Libros' }, { name: 'twitter:description', content:
'Libros y manuales digitales para equipar y formar líderes.' }, { name: 'twitter:image', content:
'https://www.redformando.com/assets/images/Redformando.png' }, ] });

<style scoped>
.shop-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-carousel {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1rem;
}
.product-card {
  min-width: 220px;
  max-width: 220px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
}
.carousel-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
