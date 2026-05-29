<template>
  <footer class="footer">
    <div class="footer-topline"></div>
    <div class="footer-grid">
      <div class="footer-col">
        <img
          src="/assets/images/RDF.png"
          alt="Logo Redformando"
          class="footer-logo"
          loading="lazy"
          width="48"
          height="48"
        />
        <div class="footer-social-pills">
          <a
            href="https://facebook.com/redformando"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            ><img
              src="/assets/images/icon-facebook.svg"
              alt="Facebook"
              loading="lazy"
              width="32"
              height="32"
          /></a>
          <a
            href="https://instagram.com/redformando"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            ><img
              src="/assets/images/icon-instagram.svg"
              alt="Instagram"
              loading="lazy"
              width="32"
              height="32"
          /></a>
          <a
            href="https://www.youtube.com/RedFormando"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            ><img
              src="/assets/images/icon-youtube.svg"
              alt="YouTube"
              loading="lazy"
              width="32"
              height="32"
          /></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Donar a REDFORMANDO</h4>
        <router-link
          class="btn-strong btn-donaciones"
          to="/#donaciones"
          @click.prevent="$emit('open-donaciones')"
          >Donaciones</router-link
        >
        <p>REDFORMANDO | Familia Ministerial</p>
      </div>
      <div class="footer-col">
        <h4>Áreas Ministeriales</h4>
        <ul>
          <li>
            <a href="https://www.youtube.com/@Campafuego" target="_blank" rel="noopener noreferrer"
              >Campafuego</a
            >
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCtaPyXwR3HV0_lRj6ZlyxIA"
              target="_blank"
              rel="noopener noreferrer"
              >Eden</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
const emit = defineEmits(['open-donaciones'])
</script>
