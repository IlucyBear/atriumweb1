<template>
  <div class="events-page">
    <div class="page-header">
      <h1>Eventos</h1>
      <p>Únete a nuestros encuentros, debates y actividades por una Europa federal</p>
    </div>

    <div class="container">
      <div class="events-grid">
        <div class="event-card" v-for="(event, index) in events" :key="index">
          <div class="event-image">
            <img :src="event.image" :alt="event.title" />
            <div class="event-date-badge">{{ event.date }}</div>
          </div>
          <div class="event-content">
            <h2>{{ event.title }}</h2>
            <p>{{ event.description }}</p>
            <button class="event-button">Ver detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const events = [
  {
    title: 'Debate sobre Federalismo Europeo',
    description: 'Mesa redonda con expertos sobre el futuro de la integración europea y los retos del federalismo continental.',
    date: '15 NOV',
    image: 'https://via.placeholder.com/400x300/2850C7/FFFFFF?text=Debate+Federalismo'
  },
  {
    title: 'Conferencia: Europa en 2050',
    description: 'Visión prospectiva sobre el proyecto europeo y las transformaciones necesarias para una Europa más unida.',
    date: '22 NOV',
    image: 'https://via.placeholder.com/400x300/1E3F8F/FFFFFF?text=Europa+2050'
  },
  {
    title: 'Taller de Participación Ciudadana',
    description: 'Sesión práctica sobre mecanismos de participación en las instituciones europeas y democracia transnacional.',
    date: '05 DIC',
    image: 'https://via.placeholder.com/400x300/2850C7/FFFFFF?text=Participacion'
  },
  {
    title: 'Encuentro de Jóvenes Federalistas',
    description: 'Espacio de intercambio y networking para activistas jóvenes comprometidos con el proyecto federal europeo.',
    date: '12 DIC',
    image: 'https://via.placeholder.com/400x300/1E3F8F/FFFFFF?text=Jovenes+Federalistas'
  },
  {
    title: 'Seminario sobre Reformas Institucionales',
    description: 'Análisis de las propuestas de reforma de los tratados europeos y su impacto en la gobernanza común.',
    date: '18 DIC',
    image: 'https://via.placeholder.com/400x300/2850C7/FFFFFF?text=Reformas+UE'
  },
  {
    title: 'Cena-Debate Anual de Atrium',
    description: 'Encuentro anual de socios y simpatizantes para celebrar los logros del año y planificar el futuro.',
    date: '28 DIC',
    image: 'https://via.placeholder.com/400x300/1E3F8F/FFFFFF?text=Cena+Anual'
  }
]
</script>

<style scoped>
.events-page {
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

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.event-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.event-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.05);
}

.event-date-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #2850C7;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.event-content {
  padding: 2rem;
}

.event-content h2 {
  font-size: 1.75rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 700;
}

.event-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.event-button {
  background: #2850C7;
  color: white;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.event-button:hover {
  background: #1E3F8F;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .page-header {
    padding: 3rem 1.5rem;
  }

  .container {
    padding: 3rem 1.5rem;
  }

  .events-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
