<template>
  <div class="join-page">
    <div class="page-header">
      <h1>Únete a Atrium</h1>
      <p>Forma parte del movimiento por una Europa más federal y democrática</p>
    </div>

    <div class="container">
      <div class="join-content">
        <div class="join-intro">
          <h2>¿Por qué unirse a Atrium?</h2>
          <ul>
            <li>Participa en debates y eventos sobre el futuro de Europa</li>
            <li>Conecta con personas comprometidas con el federalismo europeo</li>
            <li>Contribuye a iniciativas por una UE más democrática</li>
            <li>Accede a contenidos exclusivos y formaciones sobre política europea</li>
            <li>Haz oír tu voz en las instituciones comunitarias</li>
          </ul>
        </div>

        <form class="join-form" @submit.prevent="handleSubmit">
          <h3>Formulario de Afiliación</h3>

          <div class="form-group">
            <label for="nombre">Nombre *</label>
            <input
              type="text"
              id="nombre"
              v-model="formData.nombre"
              required
              placeholder="Tu nombre"
            />
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos *</label>
            <input
              type="text"
              id="apellidos"
              v-model="formData.apellidos"
              required
              placeholder="Tus apellidos"
            />
          </div>

          <div class="form-group">
            <label for="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              required
              placeholder="tu@email.com"
            />
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
          </div>

          <div class="form-group">
            <label for="fechaNacimiento">Fecha de nacimiento *</label>
            <input
              type="date"
              id="fechaNacimiento"
              v-model="formData.fechaNacimiento"
              required
            />
          </div>

          <div class="form-group checkbox-group">
            <div class="checkbox-wrapper">
              <input
                type="checkbox"
                id="privacidad"
                v-model="formData.privacidad"
                required
              />
              <label for="privacidad">
                He leído y acepto la <a href="#" @click.prevent="showPrivacy">política de privacidad</a> *
              </label>
            </div>
          </div>

          <div class="payment-section">
            <h4>Cuota de afiliación anual: 25€</h4>
            <p class="payment-info">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Pago 100% seguro
            </p>
            <button type="submit" class="submit-button">Completar pago y unirse</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const formData = ref({
  nombre: '',
  apellidos: '',
  email: '',
  fechaNacimiento: '',
  privacidad: false
})

const emailError = computed(() => {
  if (formData.value.email && !formData.value.email.includes('@')) {
    return 'Por favor, introduce un email válido'
  }
  return ''
})

const handleSubmit = () => {
  if (!formData.value.privacidad) {
    alert('Debes aceptar la política de privacidad')
    return
  }
  alert('¡Gracias por unirte a Atrium! En breve serás redirigido a la pasarela de pago.')
}

const showPrivacy = () => {
  alert('Política de privacidad de Atrium European Forum')
}
</script>

<style scoped>
.join-page {
  padding-top: 82px;
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #2850C7 0%, #1E3F8F 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.page-header p {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.join-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.join-intro h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.join-intro ul {
  list-style: none;
  padding: 0;
}

.join-intro li {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
  padding-left: 1.75rem;
  position: relative;
  font-size: 1.0625rem;
}

.join-intro li::before {
  content: '✓';
  color: #2850C7;
  font-weight: 700;
  position: absolute;
  left: 0;
  font-size: 1.25rem;
}

.join-form {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.join-form h3 {
  font-size: 1.75rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-weight: 700;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="date"] {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #2850C7;
}

.error-message {
  display: block;
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.checkbox-group {
  margin: 2rem 0;
}

.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.checkbox-wrapper input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  cursor: pointer;
  accent-color: #2850C7;
}

.checkbox-wrapper label {
  color: #666;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.5;
  cursor: pointer;
}

.checkbox-wrapper a {
  color: #2850C7;
  text-decoration: underline;
}

.payment-section {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e0e0e0;
}

.payment-section h4 {
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 700;
}

.payment-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9375rem;
  margin-bottom: 1.5rem;
}

.payment-info svg {
  color: #2850C7;
}

.submit-button {
  width: 100%;
  background: #2850C7;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover {
  background: #1E3F8F;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(40, 80, 199, 0.3);
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1.5rem;
  }

  .container {
    padding: 3rem 1.5rem;
  }

  .join-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .join-form {
    padding: 2rem 1.5rem;
  }
}
</style>
