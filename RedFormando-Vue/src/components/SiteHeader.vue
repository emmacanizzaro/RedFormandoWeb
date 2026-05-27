<template>
  <header class="site-header">
    <router-link class="brand-link" to="/" aria-label="Ir al inicio">
      <img
        src="/assets/images/Redformando.png"
        alt="Logo Redformando"
        loading="lazy"
        width="48"
        height="48"
      />
    </router-link>
    <nav class="top-nav" aria-label="Navegación principal">
      <router-link to="/" class="nav-link" active-class="active">INICIO</router-link>
      <HamburgerMenu />
    </nav>
  </header>
</template>

<script setup>
import HamburgerMenu from './HamburgerMenu.vue'
</script>
