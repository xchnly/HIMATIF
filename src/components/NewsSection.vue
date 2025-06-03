<template>
  <section id="news" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          <span class="text-indigo-600 dark:text-indigo-400">Kabar</span> Terkini
        </h2>
        <div class="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prestasi mahasiswa dan proyek terkini dari Program Studi Teknik Informatika
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button 
            @click="activeTab = 'all'"
            :class="{'bg-indigo-600 text-white': activeTab === 'all', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'all'}"
            class="px-6 py-3 text-sm font-medium rounded-l-lg border border-gray-200 dark:border-gray-700 transition-all"
          >
            Semua
          </button>
          <button 
            @click="activeTab = 'achievements'"
            :class="{'bg-indigo-600 text-white': activeTab === 'achievements', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'achievements'}"
            class="px-6 py-3 text-sm font-medium border-t border-b border-gray-200 dark:border-gray-700 transition-all"
          >
            Prestasi
          </button>
          <button 
            @click="activeTab = 'projects'"
            :class="{'bg-indigo-600 text-white': activeTab === 'projects', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'projects'}"
            class="px-6 py-3 text-sm font-medium rounded-r-lg border border-gray-200 dark:border-gray-700 transition-all"
          >
            Proyek TIF
          </button>
        </div>
      </div>

      <!-- News Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- News Item -->
        <div 
          v-for="(item, index) in filteredNews" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" 
                 :class="item.type === 'achievement' ? 'bg-yellow-500 text-white' : 'bg-indigo-600 text-white'">
              {{ item.type === 'achievement' ? 'Prestasi' : 'Proyek' }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ item.date }}
            </div>

            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
              {{ item.title }}
            </h3>

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ item.description }}
            </p>

            <div class="flex items-center">
              <img 
                v-if="item.type === 'achievement'"
                :src="item.author.avatar" 
                class="w-8 h-8 rounded-full mr-3"
                :alt="item.author.name"
              >
              <div>
                <p class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ item.type === 'achievement' ? item.author.name : 'Tim TIF' }}
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  {{ item.type === 'achievement' ? 'Mahasiswa TIF' : 'Proyek Teknik Informatika' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View More Button -->
      <div class="text-center mt-12">
        <button class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Lihat Lebih Banyak
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'all',
      newsItems: [
        {
          type: 'project',
          title: 'Juara 1 Hackathon Nasional 2023',
          description: 'Mahasiswa TIF berhasil meraih juara 1 dalam kompetisi Hackathon Nasional dengan proyek aplikasi AI untuk kesehatan mental.',
          date: '15 Oktober 2023',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          author: {
            name: 'Ahmad Fauzi',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          }
        },
        {
          type: 'project',
          title: 'Sistem Monitoring IoT untuk Pertanian',
          description: 'Tim TIF mengembangkan sistem monitoring berbasis IoT untuk membantu petani memantau kondisi tanaman secara real-time.',
          date: '5 November 2023',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          author: {
            name: 'Tim TIF',
            avatar: 'https://via.placeholder.com/150/6366F1/FFFFFF?text=TIF'
          }
        },
      ]
    }
  },
  computed: {
    filteredNews() {
      if (this.activeTab === 'all') {
        return this.newsItems
      } else if (this.activeTab === 'achievements') {
        return this.newsItems.filter(item => item.type === 'achievement')
      } else {
        return this.newsItems.filter(item => item.type === 'project')
      }
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>