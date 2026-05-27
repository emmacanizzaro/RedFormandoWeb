<template>
  <section id="inicio" class="section hero">
    <div class="section-inner">
      <h1>REDFORMANDO</h1>
      <p>
        Somos una Red, estamos en permanente Formación y creemos en una profunda Reforma en el
        Cuerpo de Cristo.
      </p>
      <div class="bienal-highlight">
        <h3>Cielo Nuevo y Tierra Nueva | Palabra Apostólica Bienal 2026-2027</h3>
        <p>
          Cielo Nuevo y Tierra Nueva implica que el cielo ha invadido la tierra y que la entrada de
          Cristo a la historia introduce un nuevo orden de existencia.
        </p>
        <a
          id="bienal-link"
          class="btn-strong btn-bienal-open"
          href="#"
          @click.prevent="showBienal = true"
          >VER MÁS</a
        >
      </div>
      <BienalModal v-model="showBienal" />
    </div>
  </section>
  <div class="events-board-wrap" role="region" aria-label="Próximos eventos">
    <div class="events-board">
      <EventosBoard @inscribir="showInscripcion = true" />
    </div>
    <InscripcionModal v-model="showInscripcion" />
  </div>
  <section id="nosotros" class="section">
    <div class="section-inner two-col">
      <article>
        <h2>NOSOTROS</h2>
        <p>
          En un tiempo donde las estructuras cambian y el mundo busca respuestas... una familia
          ministerial decidió formar, enviar y edificar con un propósito eterno.
        </p>
        <p>
          Así nació REDFORMANDO: una red de iglesias y obreros unidos por la visión de Cristo, el
          Reino de Dios y la transformación de las naciones.
        </p>
        <p>
          Guiados por el llamado y la fidelidad de sus fundadores, Ana y Alberto Calviño, este
          movimiento ha impactado vidas, levantado líderes y extendido su influencia más allá de las
          fronteras.
        </p>
        <p>
          Desde sus inicios en Argentina, REDFORMANDO ha sembrado con valentía en tierra fértil,
          estableciendo congregaciones en ciudades estratégicas de Argentina.
        </p>
        <p>
          Pero la visión no se detuvo ahí. España, México y Venezuela también han recibido el fruto
          de este llamado apostólico: familias restauradas, comunidades transformadas, y una nueva
          generación activada para el Reino.
        </p>
        <p>
          No se trata solo de plantar iglesias, sino de formar una familia espiritual que camina en
          comunión, honra y propósito.
        </p>
        <p>
          REDFORMANDO no es solo un nombre: es una identidad. Es un diseño. Es una casa para los que
          han sido llamados a colaborar en la Reforma que Él está produciendo en su Iglesia.
        </p>
      </article>
      <aside class="profile-media">
        <div class="img-placeholder">
          <img
            id="nosotros-image"
            src="/assets/images/Alberto & Ana.jpg"
            alt="Ana y Alberto Calviño - Fundadores Redformando"
            loading="lazy"
            width="320"
            height="320"
          />
        </div>
        <div class="social-block">
          <h3>Redes sociales</h3>
          <div class="social-person">
            <span>Alberto Calviño</span>
            <div class="social-icons-inline" aria-label="Redes de Alberto Calviño">
              <a
                id="alberto-facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Alberto Calviño"
              >
                <img
                  src="/assets/images/icon-facebook.svg"
                  alt="Facebook"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
              <a
                id="alberto-instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Alberto Calviño"
              >
                <img
                  src="/assets/images/icon-instagram.svg"
                  alt="Instagram"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
            </div>
          </div>
          <div class="social-person">
            <span>Ana Calviño</span>
            <div class="social-icons-inline" aria-label="Redes de Ana Calviño">
              <a
                id="ana-facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Ana Calviño"
              >
                <img
                  src="/assets/images/icon-facebook.svg"
                  alt="Facebook"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
              <a
                id="ana-instagram"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Ana Calviño"
              >
                <img
                  src="/assets/images/icon-instagram.svg"
                  alt="Instagram"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
  <section id="contacto" class="section">
    <div class="section-inner two-col contacto-grid">
      <article>
        <h2>Contacto</h2>
        <p>
          Comunícate con nosotros a través de las diferentes vías de comunicación, o completa el
          formulario y nos pondremos en contacto contigo.
        </p>
        <p><strong>contacto@redformando.com</strong></p>
        <p><strong>REDFORMANDO | Familia Ministerial</strong></p>
      </article>
      <form class="contact-form" action="#" method="post" @submit.prevent="handleSubmit">
        <div v-if="formFeedback" class="form-feedback" role="status" aria-live="polite">
          {{ formFeedback }}
        </div>
        <label for="nombre">Nombre y Apellido</label>
        <input id="nombre" name="nombre" type="text" v-model="form.nombre" required />
        <label for="email">Email</label>
        <input id="email" name="email" type="email" v-model="form.email" required />
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows="6" v-model="form.mensaje" required></textarea>
        <button class="btn-strong" type="submit">ENVIAR</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import InscripcionModal from './InscripcionModal.vue'
import EventosBoard from './EventosBoard.vue'
import BienalModal from './BienalModal.vue'

const showInscripcion = ref(false)
const showBienal = ref(false)

// Accesibilidad: feedback de validación
const form = ref({ nombre: '', email: '', mensaje: '' })
const formFeedback = ref('')
function handleSubmit() {
  if (!form.value.nombre || !form.value.email || !form.value.mensaje) {
    formFeedback.value = 'Por favor completa todos los campos.'
    return
  }
  // Aquí iría la lógica real de envío
  formFeedback.value = '¡Mensaje enviado correctamente!'
  setTimeout(() => {
    formFeedback.value = ''
  }, 4000)
  form.value = { nombre: '', email: '', mensaje: '' }
}
</script>

<style scoped>
.form-feedback {
  margin-bottom: 1em;
  color: #b91c1c;
  font-weight: bold;
}
</style>
