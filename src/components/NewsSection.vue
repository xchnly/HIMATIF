<template>
  <section id="news" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Kabar<span class="text-red-600 dark:text-red-400"> Terkini</span> 
        </h2>
        <div class="w-20 h-1 bg-red-600 dark:bg-red-400 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Prestasi mahasiswa dan proyek terkini dari Program Studi Teknik Informatika
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button 
            @click="activeTab = 'all'; showAll = false"
            :class="{'bg-red-600 text-white': activeTab === 'all', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'all'}"
            class="px-6 py-3 text-sm font-medium rounded-l-lg border border-gray-200 dark:border-gray-700 transition-all"
          >
            Semua
          </button>
          <button 
            @click="activeTab = 'achievements'; showAll = false"
            :class="{'bg-red-600 text-white': activeTab === 'achievements', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'achievements'}"
            class="px-6 py-3 text-sm font-medium border-t border-b border-gray-200 dark:border-gray-700 transition-all"
          >
            Prestasi
          </button>
          <button 
            @click="activeTab = 'projects'; showAll = false"
            :class="{'bg-red-600 text-white': activeTab === 'projects', 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white': activeTab !== 'projects'}"
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
          v-for="(item, index) in displayedNews" 
          :key="index"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          <!-- Image -->
          <div class="relative h-100 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            >
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" 
                 :class="item.type === 'achievement' ? 'bg-yellow-500 text-white' : 'bg-red-600 text-white'">
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
                  {{ item.type === 'achievement' ? item.author.name : 'Teknik Informatika UVERS' }}
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
      <div class="text-center mt-12" v-if="!showAll && filteredNews.length > 6">
        <button 
          @click="showAll = true"
          class="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Lihat Lebih Banyak
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import PROJECT0 from '@/assets/Images/PROJECT_0.jpg'
import PROJECT1 from '@/assets/Images/PROJECT_1.png'
import PROJECT2 from '@/assets/Images/PROJECT_2.png'
import PROJECT3 from '@/assets/Images/PROJECT_3.png'
import PROJECT4 from '@/assets/Images/PROJECT_4.png'
import PROJECT5 from '@/assets/Images/PROJECT_5.png'
import PROJECT6 from '@/assets/Images/PROJECT_6.jpg'
import PROJECT7 from '@/assets/Images/PROJECT_7.jpg'
import PROJECT8 from '@/assets/Images/PROJECT_8.jpg'
import PROJECT9 from '@/assets/Images/PROJECT_9.png'
import PROJECT10 from '@/assets/Images/PROJECT_10.jpg'
import PROJECT11 from '@/assets/Images/PROJECT_11.jpg'
import PROJECT12 from '@/assets/Images/PROJECT_12.PNG'
import PROJECT13 from '@/assets/Images/PROJECT_13.jpg'
import PROJECT14 from '@/assets/Images/PROJECT_14.png'
import PROJECT15 from '@/assets/Images/PROJECT_15.jpg'

export default {
  data() {
    return {
      activeTab: 'all',
      showAll: false,
      newsItems: [
        {
          type: 'project',
          title: 'Rookie Rover',
          description: 'Autonomus Rover Using ROS2, Computer Vision, adn LIDAR',
          date: 'Semester Genap 2025',
          image: PROJECT0,
        },
        {
          type: 'project',
          title: 'SNAFH-R1',
          description: 'Glambot yang mampu mengikuti pergerakan manusia.',
          date: 'Semester Genap 2025',
          image: PROJECT1,
        },
        {
          type: 'project',
          title: 'ArachnoSAR',
          description: 'Robot Laba-laba untuk keperluan SAR',
          date: 'Semester Genap 2025',
          image: PROJECT2,
        },
        {
          type: 'project',
          title: 'CAGO | Carry & Go',
          description: 'Robot penyortir otomatis berdasarkan warna paket.',
          date: 'Semester Genap 2025',
          image: PROJECT3,
        },
        {
          type: 'project',
          title: 'Garbix',
          description: 'Line Follower Dustbin Robot',
          date: 'Semester Genap 2025',
          image: PROJECT4,
        },
        {
          type: 'project',
          title: 'RemSV',
          description: 'Robot Surveillance',
          date: 'Semester Genap 2025',
          image: PROJECT5,
        },
        {
          type: 'project',
          title: 'Werava',
          description: 'Robot Penghindar Rintangan',
          date: 'Semester Genap 2025',
          image: PROJECT6,
        },
        {
          type: 'project',
          title: 'S.T.A.G.',
          description: 'Robot Penjepit Benda atau Objek',
          date: 'Semester Genap 2025',
          image: PROJECT7,
        },
        {
          type: 'project',
          title: 'SER | Survei Explorer Rover',
          description: 'Robot Eksplorasi',
          date: 'Semester Genap 2025',
          image: PROJECT8,
        },
        {
          type: 'project',
          title: 'Smart Home',
          description: 'Smart Home dengan IoT dan Otomasi',
          date: 'Semester Ganjil 2025',
          image: PROJECT9,
        },
        {
          type: 'project',
          title: 'Petani | Penyiram Tanaman Mini',
          description: 'Robot Penyiram Tanaman dengan Otomasi dan IoT',
          date: 'Semester Ganjil 2025',
          image: PROJECT10,
        },
        {
          type: 'project',
          title: 'Absensi Fingerprint dan RFID',
          description: 'Sistem Absensi dengan Fingerprint dan RFID',
          date: 'Semester Ganjil 2025',
          image: PROJECT11,
        },
        {
          type: 'project',
          title: 'ARVO | Firefighting',
          description: 'Robot Firefighting',
          date: 'Semester Ganjil 2025',
          image: PROJECT12,
        },
        {
          type: 'project',
          title: 'Drone Mini',
          description: 'Drone Mini',
          date: 'Semester Ganjil 2025',
          image: PROJECT13,
        },
        {
          type: 'project',
          title: 'PLC Lampu Lalu Lintas',
          description: 'Sistem PLC Lampu Lalu Lintas Dengan Sistem Counter',
          date: 'Semester Ganjil 2025',
          image: PROJECT14,
        },
        {
          type: 'project',
          title: 'PLC Sistem Pemisah Logam dan Non-Logam',
          description: 'Sistem Yang Mampu Memisahkan Logam dan Non-Logam',
          date: 'Semester Ganjil 2025',
          image: PROJECT15,
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
    },
    displayedNews() {
      return this.showAll ? this.filteredNews : this.filteredNews.slice(0, 6)
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