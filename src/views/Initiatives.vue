<template>
  <div class="initiatives-page">
    <div class="page-header">
      <h1>Nuestras Iniciativas</h1>
      <p>Proyectos y propuestas para construir una Europa más federal, democrática y unida</p>
    </div>

    <div class="container">
      <div class="initiatives-grid">
        <div class="initiative-card" v-for="i in 6" :key="i">
          <div class="initiative-image">
            <img :src="`https://via.placeholder.com/400x250/2850C7/FFFFFF?text=Iniciativa+${i}`" :alt="`Iniciativa ${i}`" />
          </div>
          <div class="initiative-content">
            <h2>Iniciativa {{ i }}</h2>
            <p>
              Descripción detallada de la iniciativa que promueve los valores federalistas europeos
              y busca fortalecer las instituciones comunitarias para el bien común.
            </p>
            <button class="learn-more-button">Conocer más</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.initiatives-page {
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

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
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
  padding: 2rem;
}

.initiative-content h2 {
  font-size: 1.75rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-weight: 700;
}

.initiative-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.learn-more-button {
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

.learn-more-button:hover {
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

  .initiatives-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
