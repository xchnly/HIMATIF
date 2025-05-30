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
            <button class="text-indigo-600 font-medium hover:text-indigo-800 flex items-center">
              Selengkapnya
              <svg class="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md inline-flex items-center">
          Lihat Semua Kegiatan
          <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      events: [
        {
          title: 'TechTalk Series: AI Revolution',
          description: 'Diskusi tentang perkembangan terkini dalam bidang Artificial Intelligence dan aplikasinya di industri.',
          date: '15 Juni 2023',
          category: 'Seminar',
          image: 'https://via.placeholder.com/400x300'
        },
        {
          title: 'Hackathon HIMATIF 2023',
          description: 'Kompetisi coding 24 jam untuk mengembangkan solusi teknologi inovatif bagi masalah sosial.',
          date: '28-29 Juli 2023',
          category: 'Kompetisi',
          image: 'https://via.placeholder.com/400x300'
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