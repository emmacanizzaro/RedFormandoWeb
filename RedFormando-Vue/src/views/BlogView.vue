<template>
  <section class="section">
    <div class="section-inner">
      <h2>BLOG</h2>
      <div class="blog-grid">
        <a
          id="blog-pdf-1"
          class="blog-card square"
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noreferrer"
          ><span>Mujer Virtuosa / Iglesia Gloriosa</span></a
        >
        <a
          id="blog-pdf-2"
          class="blog-card vertical"
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noreferrer"
          ><span>Eclesiastés Parte 1</span></a
        >
        <a
          id="blog-pdf-3"
          class="blog-card square"
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noreferrer"
          ><span>Eclesiastés Parte 2</span></a
        >
        <a
          id="blog-pdf-4"
          class="blog-card vertical"
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
          rel="noreferrer"
          ><span>Eclesiastés Parte 3</span></a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMeta } from '../plugins/meta.js'

useMeta({
  title: 'REDFORMANDO | Blog',
  meta: [
    {
      name: 'description',
      content:
        'Blog de Redformando con materiales y contenidos para formación espiritual y crecimiento ministerial.',
    },
    { property: 'og:title', content: 'REDFORMANDO | Blog' },
    {
      property: 'og:description',
      content: 'Artículos y recursos de edificación para la familia ministerial.',
    },
    { property: 'og:image', content: 'https://www.redformando.com/assets/images/Redformando.png' },
    { name: 'twitter:title', content: 'REDFORMANDO | Blog' },
    {
      name: 'twitter:description',
      content: 'Materiales de blog para fortalecer fe, doctrina y ministerio.',
    },
    { name: 'twitter:image', content: 'https://www.redformando.com/assets/images/Redformando.png' },
  ],
})
</script>

<style scoped>
.blog-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.blog-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem 1rem;
  min-width: 180px;
  max-width: 220px;
  min-height: 120px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  font-size: 1.1rem;
  transition: box-shadow 0.2s;
}
.blog-card.square {
  aspect-ratio: 1/1;
}
.blog-card.vertical {
  aspect-ratio: 2/3;
}
.blog-card:hover {
  box-shadow: 0 4px 16px rgba(23, 39, 89, 0.15);
  background: #f5f8ff;
}
</style>
