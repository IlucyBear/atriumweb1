<template>
  <div class="about-page">
    <div class="page-header">
      <h1>Quiénes Somos</h1>
      <p>Conoce nuestra misión, visión y el equipo que impulsa Atrium</p>
    </div>

    <div class="container">
      <div class="mission-section">
        <div class="mission-text">
          <h2>Nuestra Misión</h2>
          <p>
            Atrium European Forum es una asociación sin ánimo de lucro comprometida con la promoción
            de la federalización e integración de la Unión Europea. Creemos en un proyecto europeo
            más democrático, transparente y cercano a la ciudadanía.
          </p>
          <p>
            Trabajamos para fomentar el debate público sobre el futuro de Europa, promover la
            participación ciudadana en las instituciones comunitarias y defender los valores
            fundamentales de la Unión: democracia, Estado de derecho, solidaridad y respeto a los
            derechos humanos.
          </p>
          <h3>Nuestra Visión</h3>
          <p>
            Aspiramos a una Europa federal donde las decisiones se tomen de manera más eficiente y
            democrática, donde los ciudadanos tengan voz directa en las instituciones, y donde la
            solidaridad entre estados miembros sea el pilar de nuestra convivencia común.
          </p>
          <p>
            Creemos que solo a través de una mayor integración política y social podremos afrontar
            los desafíos del siglo XXI: cambio climático, migraciones, desigualdad, digitalización
            y geopolítica global.
          </p>
        </div>
        <div class="mission-image">
          <img src="/logo.jpg" alt="Atrium Logo" class="large-logo" />
        </div>
      </div>

      <div class="team-section">
        <h2>Nuestra Junta Directiva</h2>
        <div class="team-grid">
          <div class="team-card" v-for="(member, index) in teamMembers" :key="index">
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
            </div>
            <h3>{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
            <p class="team-quote">{{ member.quote }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'María González',
    role: 'Presidenta',
    quote: '"Europa es nuestra casa común, y debemos cuidarla juntos"',
    image: 'https://via.placeholder.com/150/2850C7/FFFFFF?text=MG'
  },
  {
    name: 'Jean Dupont',
    role: 'Vicepresidente',
    quote: '"El federalismo es el camino hacia una Europa más fuerte"',
    image: 'https://via.placeholder.com/150/1E3F8F/FFFFFF?text=JD'
  },
  {
    name: 'Anna Müller',
    role: 'Secretaria General',
    quote: '"La democracia europea necesita más participación ciudadana"',
    image: 'https://via.placeholder.com/150/2850C7/FFFFFF?text=AM'
  },
  {
    name: 'Paolo Rossi',
    role: 'Tesorero',
    quote: '"Invertir en Europa es invertir en nuestro futuro"',
    image: 'https://via.placeholder.com/150/1E3F8F/FFFFFF?text=PR'
  },
  {
    name: 'Sofia Andersson',
    role: 'Vocal',
    quote: '"La solidaridad europea es nuestra mayor fortaleza"',
    image: 'https://via.placeholder.com/150/2850C7/FFFFFF?text=SA'
  }
]
</script>

<style scoped>
.about-page {
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
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.mission-section {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;
}

.mission-text h2 {
  font-size: 2rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.mission-text h3 {
  font-size: 1.5rem;
  color: #2850C7;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.mission-text p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.0625rem;
}

.mission-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.large-logo {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1));
}

.team-section {
  padding: 3rem 0;
}

.team-section h2 {
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
}

.team-card {
  text-align: center;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
}

.team-image {
  width: 150px;
  height: 150px;
  margin: 0 auto 1.25rem;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease;
}

.team-card:hover .team-image {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-card h3 {
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.team-role {
  color: #666;
  font-size: 0.9375rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.team-quote {
  color: #2850C7;
  font-style: italic;
  font-size: 0.9375rem;
  line-height: 1.5;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1.5rem;
  }

  .container {
    padding: 3rem 1.5rem;
  }

  .mission-section {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
