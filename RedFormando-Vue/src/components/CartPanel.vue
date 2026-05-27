<template>
  <aside
    v-if="show"
    class="cart-panel"
    aria-label="Carrito de compras"
    tabindex="-1"
    ref="cartPanel"
  >
    <div class="cart-header">
      <h3>Carrito</h3>
      <button type="button" @click="$emit('close')">Cerrar</button>
    </div>
    <ul>
      <li v-for="item in cart" :key="item.title">
        {{ item.title }} x{{ item.qty }} - ${{ item.price * item.qty }}
        <button @click="$emit('remove', item)">Eliminar</button>
      </li>
    </ul>
    <p class="cart-total">Total: $ {{ total }}</p>
    <button class="cart-clear-btn" @click="$emit('clear')">Vaciar carrito</button>
    <form class="checkout-form" @submit.prevent="submit" aria-label="Formulario de checkout">
      <div v-if="feedback" class="checkout-feedback" role="status" aria-live="polite">
        {{ feedback }}
      </div>
      <h4>Datos para finalizar la compra</h4>
      <p class="checkout-note">Los libros se entregan en formato digital.</p>
      <label>
        Nombre y apellido
        <input v-model="form.name" type="text" required />
      </label>
      <label>
        WhatsApp
        <input v-model="form.phone" type="tel" required />
      </label>
      <label>
        Email de entrega
        <input v-model="form.email" type="email" required />
      </label>
      <fieldset class="checkout-currency-group">
        <legend>Moneda de pago</legend>
        <label class="checkout-currency-option">
          <input type="radio" value="ars" v-model="form.currency" /> Pesos argentinos ($)
        </label>
        <label class="checkout-currency-option">
          <input type="radio" value="usd" v-model="form.currency" /> Dólares estadounidenses (u$d)
        </label>
      </fieldset>
      <label>
        Comentarios (opcional)
        <textarea v-model="form.notes" rows="3"></textarea>
      </label>
      <div class="checkout-actions">
        <button class="btn-strong" type="submit">Finalizar compra</button>
      </div>
    </form>
  </aside>
</template>

<script setup>
import { computed, reactive, watch, ref, nextTick } from 'vue'
import { useCart } from '../store/cart.js'
const props = defineProps({
  show: Boolean,
})
const emits = defineEmits(['close', 'clear', 'checkout', 'remove'])
const { cart, cartTotal } = useCart()
const form = reactive({
  name: '',
  phone: '',
  email: '',
  currency: 'ars',
  notes: '',
})
const total = cartTotal
const cartPanel = ref(null)
const feedback = ref('')
function submit() {
  emits('checkout', { ...form })
  feedback.value = '¡Gracias por tu compra!'
  setTimeout(() => (feedback.value = ''), 3000)
  form.name = ''
  form.phone = ''
  form.email = ''
  form.currency = 'ars'
  form.notes = ''
}
watch(
  () => props.show,
  async (val) => {
    if (val) {
      await nextTick()
      cartPanel.value?.focus()
    } else {
      form.name = ''
      form.phone = ''
      form.email = ''
      form.currency = 'ars'
      form.notes = ''
    }
  }
)
</script>

<style scoped>
.cart-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  max-width: 100vw;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  padding: 2rem 1rem 1rem 1rem;
  overflow-y: auto;
  outline: none;
}
.checkout-feedback {
  background: #e0ffe0;
  color: #1a7f37;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 500;
}
.cart-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.cart-total {
  font-weight: bold;
  margin: 1rem 0;
}
.cart-clear-btn {
  background: #e74c3c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
}
.checkout-form label,
.checkout-form fieldset {
  display: block;
  margin-bottom: 1rem;
}
.checkout-actions {
  margin-top: 1rem;
}
</style>
