<template>
  <footer class="footer">
    <div class="footer-border"></div>
    <div class="footer-container">
      <div class="footer-section">
        <img src="/logo.jpg" alt="Atrium Logo" class="footer-logo" />
        <p class="footer-description">
          Promoviendo la federalización e integración de la Unión Europea para un futuro común.
        </p>
      </div>

      <div class="footer-section">
        <h3>Enlaces</h3>
        <div class="footer-links">
          <router-link to="/">Inicio</router-link>
          <router-link to="/initiatives">Iniciativas</router-link>
          <router-link to="/events">Eventos</router-link>
          <router-link to="/about">Quiénes Somos</router-link>
          <router-link to="/join">Únete</router-link>
          <router-link to="/contact">Contacto</router-link>
        </div>
      </div>

      <div class="footer-section">
        <h3>Legal</h3>
        <div class="footer-links">
          <a href="#">Política de privacidad</a>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Síguenos</h3>
        <div class="social-links">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Atrium. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2850C7;
  color: white;
  margin-top: 4rem;
}

.footer-border {
  height: 4px;
  background: linear-gradient(90deg, #2850C7 0%, #1E3F8F 100%);
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.footer-logo {
  height: 60px;
  width: auto;
  margin-bottom: 1rem;
  filter: brightness(0) invert(1);
}

.footer-description {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: white;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-3px);
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
