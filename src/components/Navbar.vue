<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center" @click="scrollToTop">
            <img class="h-24 w-auto" :src="LogoHimatifBGWHT" alt="Logo HIMATIF">
            <span class="ml-2 text-xl font-bold text-red-600">HIMATIF</span>
          </router-link>
        </div>
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
          <a href="#about" @click.prevent="scrollToSection('about')" class="text-gray-900 hover:text-red-600 px-3 py-2 text-md font-medium">Tentang</a>
          <a href="#events" @click.prevent="scrollToSection('events')" class="text-gray-900 hover:text-red-600 px-3 py-2 text-md font-medium">Kegiatan</a>
          <a href="#news" @click.prevent="scrollToSection('news')" class="text-gray-900 hover:text-red-600 px-3 py-2 text-md font-medium">Berita</a>
          <a href="#team" @click.prevent="scrollToSection('team')" class="text-gray-900 hover:text-red-600 px-3 py-2 text-md font-medium">Pengurus</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="text-gray-900 hover:text-red-600 px-3 py-2 text-md font-medium">Kontak</a>
        </div>
        <div class="-mr-2 flex items-center md:hidden">
          <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <a href="#about" @click.prevent="scrollToSection('about')" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50">Tentang</a>
        <a href="#events" @click.prevent="scrollToSection('events')" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50">Kegiatan</a>
        <a href="#news" @click.prevent="scrollToSection('news')" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50">Berita</a>
        <a href="#team" @click.prevent="scrollToSection('team')" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50">Pengurus</a>
        <a href="#contact" @click.prevent="scrollToSection('contact')" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600 hover:bg-gray-50">Kontak</a>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoHimatifBGWHT from '@/assets/Images/logo-himatif-bgwhite.svg'

export default {
  name: 'Navbar',
  data() {
    return {
      LogoHimatifBGWHT,
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    scrollToSection(sectionId) {
      // Close mobile menu if open
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      }
      
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        
        // Update URL without reloading
        history.pushState(null, null, `#${sectionId}`)
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      history.pushState(null, null, ' ')
    }
  }
}
</script>