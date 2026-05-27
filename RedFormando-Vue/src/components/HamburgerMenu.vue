<template>
  <button
    class="hamburger js-hamburger-menu"
    :class="{ open: isOpen }"
    aria-label="Abrir menú"
    :aria-expanded="isOpen.toString()"
    aria-controls="menu-hamburguesa"
    @click="toggleMenu"
  >
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
    <span class="hamburger-bar"></span>
  </button>
  <div
    class="menu-hamburguesa"
    id="menu-hamburguesa"
    :class="{ open: isOpen }"
    :aria-hidden="(!isOpen).toString()"
  >
    <router-link to="/#nosotros" class="nav-link">NOSOTROS</router-link>
    <router-link to="/familia" class="nav-link">FAMILIA</router-link>
    <router-link to="/blog" class="nav-link">BLOG</router-link>
    <router-link to="/recursos-libros" class="nav-link">RECURSOS</router-link>
    <router-link to="/recursos" class="nav-link">ENTRENAMIENTO</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

function toggleMenu(e) {
  isOpen.value = !isOpen.value
}

function closeMenu(e) {
  if (
    isOpen.value &&
    !e.target.closest('.menu-hamburguesa') &&
    !e.target.closest('.js-hamburger-menu')
  ) {
    isOpen.value = false
  }
}

function handleEscape(e) {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeMenu)
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
/* Puedes agregar estilos específicos si lo deseas */
</style>
