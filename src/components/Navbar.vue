<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex-shrink-0 flex items-center">
            <img class="h-24 w-auto" :src="LogoHimatifBGWHT" alt="Logo HIMATIF">
            <span class="ml-2 text-xl font-bold text-indigo-600">HIMATIF</span>
          </router-link>
        </div>
        <div class="hidden md:ml-6 md:flex md:items-center md:space-x-8">
          <router-link to="#about" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-md font-medium">Tentang</router-link>
          <router-link to="#events" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-md font-medium">Kegiatan</router-link>
          <router-link to="#gallery" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-md font-medium">Galeri</router-link>
          <router-link to="#team" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-md font-medium">Pengurus</router-link>
          <router-link to="#contact" class="text-gray-900 hover:text-indigo-600 px-3 py-2 text-md font-medium">Kontak</router-link>
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
        <router-link to="#about" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Tentang</router-link>
        <router-link to="#events" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Kegiatan</router-link>
        <router-link to="#gallery" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Galeri</router-link>
        <router-link to="#team" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Pengurus</router-link>
        <router-link to="#contact" class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Kontak</router-link>
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
    }
  }
}
</script>