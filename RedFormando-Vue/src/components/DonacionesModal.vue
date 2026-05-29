<template>
  <section
    v-show="isOpen"
    id="donaciones"
    class="section donation-section"
    role="dialog"
    aria-modal="true"
    aria-labelledby="donation-title"
    :aria-hidden="(!isOpen).toString()"
  >
    <div class="section-inner donation-panel">
      <button
        id="donation-close"
        class="donation-close"
        type="button"
        aria-label="Cerrar donaciones"
        @click="close"
      >
        Cerrar
      </button>
      <div class="donation-grid">
        <article>
          <h2 id="donation-title">Donaciones</h2>
          <p>
            Podés colaborar con nosotros expresando tu generosidad por cualquiera de los siguientes
            medios:
          </p>
          <h3>DESDE ARGENTINA:</h3>
          <p>
            Transferencia Bancaria: FUNDACION EL BUEN PASTOR - ALIAS: FUNDACION.BUENPASTOR - CBU:
            0720484920000000005986 (Por favor aclarar en el detalle "REDFORMANDO")
          </p>
          <p>
            MercadoPago: Escanea este codigo QR con tu celular o tablet: (Por favor aclarar en el
            detalle "REDFORMANDO")
          </p>
          <h3>DESDE EL EXTERIOR:</h3>
          <p>
            Paypal:
            <a href="https://paypal.me/redformando" target="_blank" rel="noreferrer"
              >paypal.me/redformando</a
            >
          </p>
          <p>
            <strong>MUCHAS GRACIAS POR TU APORTE AL AVANCE DEL EVANGELIO.</strong>
          </p>
        </article>
        <aside class="donation-qr-box" aria-label="Código QR para donaciones">
          <span>QR</span>
        </aside>
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
