<template>
  <div class="page-bg"></div>
  <SiteHeader />

  <main id="main-content" class="content content-home" tabindex="-1">
    <router-view />
    <DonacionesModal v-model="showDonaciones" />
  </main>

  <SiteFooter @open-donaciones="showDonaciones = true" />
</template>

<script setup>
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import HomePage from './components/HomePage.vue'
import HamburgerMenu from './components/HamburgerMenu.vue'
import DonacionesModal from './components/DonacionesModal.vue'

const showDonaciones = ref(false)
</script>
