<template>
  <section
    v-show="isOpen"
    id="bienal-detalle"
    class="section bienal-detail-section"
    role="dialog"
    aria-modal="true"
    aria-labelledby="bienal-detail-title"
    :aria-hidden="(!isOpen).toString()"
  >
    <div class="section-inner">
      <button
        id="bienal-close"
        class="bienal-close"
        type="button"
        aria-label="Cerrar detalle bienal"
        @click="close"
      >
        Cerrar
      </button>
      <h2>
        <span id="bienal-detail-title"></span>
        Cielo Nuevo y Tierra Nueva | Palabra Apostólica Bienal 2026-2027
      </h2>
      <img
        id="bienal-detail-image"
        class="bienal-cover"
        src="https://picsum.photos/1600/520?random=66"
        alt="Imagen Cielo Nuevo y Tierra Nueva"
        loading="lazy"
        width="800"
        height="260"
      />
      <p>
        Cielo Nuevo y Tierra Nueva implica que el cielo ha invadido la tierra y que la entrada de
        Cristo a la historia introduce un nuevo orden de existencia.
      </p>
      <p>
        En este mensaje, el Apóstol Alberto Calviño presenta la visión espiritual que orientará a la
        iglesia durante el bienio 2026-2027. A partir de la revelación de Jesucristo, se expone que
        el evangelio no anuncia un escape del mundo, sino la irrupción del cielo en la tierra por
        medio de la obra redentora de Cristo.
      </p>
      <p>
        "Cielo Nuevo y Tierra Nueva" describe la nueva dimensión de vida inaugurada por la muerte y
        resurrección de Jesús, donde comienza una nueva creación y una nueva humanidad en Él. Esta
        palabra nos invita a la iglesia a comprender su identidad en Cristo y a vivir desde esa
        realidad presente, participando activamente en la manifestación del Reino de Dios.
      </p>
      <a id="bienal-video-link" class="bienal-video-card" href="#" target="_blank" rel="noreferrer">
        <img
          src="https://picsum.photos/1400/420?random=67"
          alt="Video Bienal"
          loading="lazy"
          width="700"
          height="210"
        />
        <span>Ver mensaje completo en YouTube</span>
      </a>
      <p class="video-caption">
        Desde el auditorio de Edén Iglesia en Terrassa, Barcelona, el Apóstol Alberto Calviño
        presenta la Palabra que orientará a la iglesia durante el bienio 2026-2027.
      </p>
      <p>
        La revelación de Jesucristo. Apocalipsis muestra a Cristo revelado, no solo eventos
        futuros.<br />
        Una nueva creación ya iniciada. En Cristo lo nuevo ya comenzó.<br />
        El cielo invadiendo la tierra. El evangelio no anuncia escape, anuncia transformación.<br />
        Una iglesia que vive desde lo celestial. El pueblo de Dios expresa hoy la realidad del
        Reino.<br /><br />
        Todo esto está en el corazón del mensaje: la nueva creación no es solo una esperanza futura,
        sino una realidad presente inaugurada por Cristo y manifestada en su pueblo.
      </p>
      <div class="download-boxes">
        <div class="download-item">
          <h3>PDF gratuito para descargar</h3>
          <a id="bienal-pdf-link" class="btn-strong" href="#" target="_blank" rel="noreferrer"
            >DESCARGAR</a
          >
        </div>
        <div class="download-item">
          <h3>Accede al material disponible</h3>
          <a id="bienal-material-link" class="btn-strong" href="#" target="_blank" rel="noreferrer"
            >COMPRAR</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: Boolean,
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

function close() {
  isOpen.value = false
  emit('update:modelValue', false)
}

function handleEscape(e) {
  if (e.key === 'Escape' && isOpen.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped></style>
