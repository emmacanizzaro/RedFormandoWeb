import { computed, ref } from 'vue'

const cart = ref([])

export function useCart() {
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
  const cartCount = computed(() => cart.value.reduce((acc, item) => acc + item.qty, 0))
  const cartTotal = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.qty, 0))
  return { cart, addToCart, removeFromCart, clearCart, cartCount, cartTotal }
}
