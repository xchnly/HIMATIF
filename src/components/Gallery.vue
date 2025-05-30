<template>
  <section id="gallery" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Galeri <span class="text-indigo-600">Kegiatan</span>
        </h2>
        <div class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Dokumentasi momen-momen berharga dari berbagai kegiatan HIMATIF UNIVERSAL.
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(image, index) in gallery" :key="index" class="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
          <img :src="image.url" :alt="image.caption" class="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
            <button class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition duration-300 bg-white bg-opacity-90 rounded-full p-2 text-indigo-600">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 shadow-md inline-flex items-center">
          Lihat Galeri Lengkap
          <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      gallery: [
        { url: 'https://via.placeholder.com/400x300', caption: 'TechTalk Series' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Hackathon 2023' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Pelatihan Web Dev' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Kunjungan Industri' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Seminar Nasional' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Workshop UI/UX' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Kegiatan Sosial' },
        { url: 'https://via.placeholder.com/400x300', caption: 'Rapat Kerja' }
      ]
    }
  }
}
</script>