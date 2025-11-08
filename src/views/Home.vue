<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Construyendo una Europa Federal</h1>
        <p class="hero-subtitle">
          Un espacio de debate, reflexión y acción para la integración y federalización europea
        </p>
        <router-link to="/join" class="cta-button">Únete a Atrium</router-link>
      </div>
    </section>

    <section class="preview-section">
      <div class="container">
        <div class="section-header">
          <h2>Iniciativas Destacadas</h2>
          <router-link to="/initiatives" class="view-all-link">Ver todas las iniciativas →</router-link>
        </div>
        <div class="initiatives-grid">
          <div class="initiative-card" v-for="i in 3" :key="i">
            <div class="initiative-image">
              <img :src="`https://via.placeholder.com/400x250/2850C7/FFFFFF?text=Iniciativa+${i}`" :alt="`Iniciativa ${i}`" />
            </div>
            <div class="initiative-content">
              <h3>Iniciativa {{ i }}</h3>
              <p>Descripción breve de la iniciativa que promueve la federalización y los valores europeos para un futuro compartido.</p>
              <router-link to="/initiatives" class="card-button">Conocer más</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="preview-section events-preview">
      <div class="container">
        <div class="section-header">
          <h2>Próximos Eventos</h2>
          <router-link to="/events" class="view-all-link">Ver todos los eventos →</router-link>
        </div>
        <div class="events-horizontal">
          <div class="event-card-horizontal" v-for="i in 3" :key="i">
            <div class="event-image-horizontal">
              <img :src="`https://via.placeholder.com/300x200/2850C7/FFFFFF?text=Evento+${i}`" :alt="`Evento ${i}`" />
              <div class="event-date-badge">{{ i + 14 }} NOV</div>
            </div>
            <div class="event-content-horizontal">
              <h3>Evento {{ i }}</h3>
              <p>Descripción del evento sobre federalismo europeo y debate político continental.</p>
              <router-link to="/events" class="card-button">Ver detalles</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-top: 82px;
}

.hero {
  background: linear-gradient(135deg, #2850C7 0%, #1E3F8F 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.pexels.com/photos/208723/pexels-photo-208723.jpeg?auto=compress&cs=tinysrgb&w=1920');
  background-size: cover;
  background-position: center;
  opacity: 0.15;
  z-index: 0;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #2850C7;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.preview-section {
  padding: 4rem 2rem;
}

.events-preview {
  background: #f8f9fa;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: #1a1a1a;
  font-weight: 700;
}

.view-all-link {
  color: #2850C7;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.view-all-link:hover {
  color: #1E3F8F;
  text-decoration: underline;
}

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.initiative-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.initiative-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.initiative-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.initiative-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.initiative-card:hover .initiative-image img {
  transform: scale(1.05);
}

.initiative-content {
  padding: 1.5rem;
}

.initiative-content h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.initiative-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.card-button {
  display: inline-block;
  background: #2850C7;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.card-button:hover {
  background: #1E3F8F;
}

.events-horizontal {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.event-card-horizontal {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.event-card-horizontal:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.event-image-horizontal {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.event-image-horizontal img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.event-card-horizontal:hover .event-image-horizontal img {
  transform: scale(1.05);
}

.event-date-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #2850C7;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.875rem;
}

.event-content-horizontal {
  padding: 1.5rem;
}

.event-content-horizontal h3 {
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.event-content-horizontal p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1.5rem;
  }

  .preview-section {
    padding: 3rem 1.5rem;
  }

  .initiatives-grid,
  .events-horizontal {
    grid-template-columns: 1fr;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
