<template>
  <section
    id="inscripcion-evento"
    class="section inscripcion-detail-section"
    role="dialog"
    aria-modal="true"
    aria-labelledby="inscripcion-title"
    v-show="isOpen"
    :aria-hidden="(!isOpen).toString()"
  >
    <div class="section-inner two-col" style="position: relative">
      <button
        id="cerrar-inscripcion-x"
        class="modal-close"
        type="button"
        aria-label="Cerrar inscripción"
        tabindex="0"
        @click="close"
      >
        &times;
      </button>
      <div class="img-placeholder">
        <img
          id="evento-inscripcion-img"
          src="/assets/images/Encuentro RedFormando.png"
          alt="Imagen evento inscripción"
          class="evento-inscripcion-img"
        />
      </div>
      <form
        id="form-inscripcion-evento"
        class="contact-form form-inscripcion-evento"
        @submit.prevent
      >
        <h2 id="inscripcion-title" class="inscripcion-title">Inscripción al Evento</h2>
        <label for="nombre-inscripcion">Nombre y Apellido</label>
        <input id="nombre-inscripcion" name="nombre" type="text" required />
        <label for="email-inscripcion">Correo electrónico</label>
        <input id="email-inscripcion" name="email" type="email" required />
        <div class="inscripcion-moneda-row">
          <label class="inscripcion-moneda-label">Moneda:</label>
          <label
            ><input type="radio" name="moneda" value="ars" v-model="moneda" checked /> Pesos</label
          >
          <label><input type="radio" name="moneda" value="usd" v-model="moneda" /> Dólares</label>
        </div>
        <button
          id="btn-pagar-inscripcion"
          type="button"
          class="btn-strong"
          style="width: 100%; margin-top: 10px"
          @click="pagar"
        >
          Pagar
        </button>
        <button
          id="cerrar-inscripcion-evento"
          type="button"
          class="btn-strong"
          style="width: 100%; margin-top: 10px; background: #ccc; color: #222"
          @click="close"
        >
          Cancelar
        </button>
      </form>
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
const moneda = ref('ars')

function close() {
  isOpen.value = false
  emit('update:modelValue', false)
}

function pagar() {
  if (moneda.value === 'ars') {
    window.open('https://www.mercadopago.com.ar/', '_blank')
  } else {
    window.open('https://www.paypal.com/paypalme/redformando', '_blank')
  }
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
