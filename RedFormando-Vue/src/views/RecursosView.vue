<template>
  <section class="section">
    <div class="section-inner">
      <h2>ENTRENAMIENTO</h2>
      <div class="courses-grid">
        <a id="course-webinar-link" class="course-card" href="#" target="_blank" rel="noreferrer">
          <img
            id="course-webinar-image"
            src="https://picsum.photos/800/500?random=41"
            alt="Webinar"
            loading="lazy"
            width="400"
            height="250"
          />
          <div>
            <h3>WEBINAR</h3>
            <p>Formación intensiva para activar líderes en su llamado y propósito.</p>
          </div>
        </a>
        <a id="course-edmi-link" class="course-card" href="#" target="_blank" rel="noreferrer">
          <img
            id="course-edmi-image"
            src="https://picsum.photos/800/500?random=42"
            alt="EDMI"
            loading="lazy"
            width="400"
            height="250"
          />
          <div>
            <h3>EDMI (Escuela de Ministerio Internacional)</h3>
            <p>Capacitar, formar y activar ministros competentes al diseño divino.</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from '../plugins/meta.js'

useMeta({
  title: 'REDFORMANDO | Entrenamiento',
  meta: [
    {
      name: 'description',
      content:
        'Entrenamientos de Redformando: webinar y Escuela de Ministerio Internacional para formar y activar líderes.',
    },
    { property: 'og:title', content: 'REDFORMANDO | Entrenamiento' },
    {
      property: 'og:description',
      content: 'Programas de entrenamiento ministerial para equipar y activar líderes.',
    },
    { property: 'og:image', content: 'https://www.redformando.com/assets/images/Redformando.png' },
    { name: 'twitter:title', content: 'REDFORMANDO | Entrenamiento' },
    {
      name: 'twitter:description',
      content: 'Webinar y EDMI para capacitación y formación ministerial.',
    },
    { name: 'twitter:image', content: 'https://www.redformando.com/assets/images/Redformando.png' },
  ],
})
</script>

<style scoped>
.courses-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.course-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  min-width: 280px;
  max-width: 340px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;
}
.course-card:hover {
  box-shadow: 0 4px 16px rgba(23, 39, 89, 0.15);
}
.course-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
