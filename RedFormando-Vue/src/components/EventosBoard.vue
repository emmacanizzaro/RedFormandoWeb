<template>
  <div class="events-board-head">
    <p class="events-kicker">Cartelera</p>
    <h2>Próximos Eventos</h2>
    <p>Encuentros, entrenamientos y reuniones especiales.</p>
  </div>
  <div class="events-grid">
    <div v-for="evento in eventos" :key="evento.id" class="event-card">
      <p class="event-note">{{ evento.note }}</p>
      <div class="event-media">
        <img :src="evento.image" :alt="evento.alt" loading="lazy" width="400" height="250" />
      </div>
      <a href="#" class="event-link" @click.prevent="$emit('inscribir')">
        {{ evento.ctaLabel }}
      </a>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['inscribir'])
const eventos = [
  {
    id: 1,
    note: 'Próximo evento',
    image: '/assets/images/Encuentro RedFormando.png',
    alt: 'Banner del evento',
    ctaLabel: 'Inscribirse',
  },
  // Puedes agregar más eventos aquí
]
</script>

<style scoped></style>
