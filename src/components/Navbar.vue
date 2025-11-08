<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo-link">
        <img src="/logo.jpg" alt="Atrium Logo" class="logo" />
      </router-link>

      <button class="hamburger" @click="toggleMenu" :class="{ active: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ active: isMenuOpen }">
        <router-link to="/" @click="closeMenu">Inicio</router-link>
        <router-link to="/initiatives" @click="closeMenu">Iniciativas</router-link>
        <router-link to="/events" @click="closeMenu">Eventos</router-link>
        <router-link to="/about" @click="closeMenu">Quiénes Somos</router-link>
        <router-link to="/join" @click="closeMenu">Únete</router-link>
        <router-link to="/contact" @click="closeMenu">Contacto</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.hamburger {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #2850C7;
  margin: 3px 0;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(8px, 8px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #2850C7;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2850C7;
  transition: width 0.3s ease;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #1a3d99;
}

@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
    box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.25rem;
  }
}
</style>
