<template>
  <section id="events" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Kegiatan <span class="text-indigo-600">HIMATIF</span>
        </h2>
        <div class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Berbagai program kerja dan kegiatan yang kami selenggarakan untuk pengembangan anggota.
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(event, index) in events" :key="index" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img :src="event.image" :alt="event.title" class="w-full h-48 object-cover">
            <div class="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {{ event.category }}
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-2">
              <svg class="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {{ event.date }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ event.title }}</h3>
            <p class="text-gray-600 mb-4">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Kegiatan1 from '@/assets/Images/KEGIATAN1.jpg'
import Kegiatan2 from '@/assets/Images/KEGIATAN2.jpg'

export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          title: 'Modeling The Creativity',
          description: '3D Modeling Workshop',
          date: '19 April 2025',
          category: 'Workshop',
          image: Kegiatan1
        },
        {
          title: 'UVERS Charity',
          description: 'Kompetisi coding 24 jam untuk mengembangkan solusi teknologi inovatif bagi masalah sosial.',
          date: '28-29 Juli 2023',
          category: 'Bakti Sosial',
          image: Kegiatan2
        },
        {
          title: 'Pelatihan Web Development',
          description: 'Workshop intensif untuk mempelajari pengembangan website modern dengan teknologi terbaru.',
          date: '10 Agustus 2023',
          category: 'Workshop',
          image: 'https://via.placeholder.com/400x300'
        }
      ]
    }
  }
}
</script>