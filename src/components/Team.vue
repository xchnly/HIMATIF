<template>
  <section id="team" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Pengurus <span class="text-indigo-600">HIMATIF</span>
        </h2>
        <div class="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          Tim pengurus HIMATIF UNIVERSAL periode 2023/2024 yang siap melayani dan memajukan himpunan.
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(member, index) in team" :key="index" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <div class="relative">
            <img :src="member.photo" :alt="member.name" class="w-full h-64 object-cover">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20"></div>
            <div class="absolute bottom-4 left-4">
              <h3 class="text-white font-bold text-xl">{{ member.name }}</h3>
              <p class="text-indigo-200">{{ member.position }}</p>
            </div>
          </div>
          <div class="p-6">
            <div class="flex justify-center space-x-4">
              <a :href="member.social.twitter" target="_blank" class="text-gray-400 hover:text-indigo-600">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a :href="member.social.linkedin" target="_blank" class="text-gray-400 hover:text-indigo-600">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a :href="member.social.instagram" target="_blank" class="text-gray-400 hover:text-indigo-600">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <button class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md inline-flex items-center">
          Kenal Pengurus Lainnya
          <svg class="h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      team: [
        {
          name: 'John Doe',
          position: 'Ketua HIMATIF',
          photo: 'https://via.placeholder.com/400x400',
          social: {
            twitter: '#',
            linkedin: '#',
            instagram: '#'
          }
        },
        {
          name: 'Jane Smith',
          position: 'Wakil Ketua',
          photo: 'https://via.placeholder.com/400x400',
          social: {
            twitter: '#',
            linkedin: '#',
            instagram: '#'
          }
        },
        {
          name: 'Robert Johnson',
          position: 'Sekretaris',
          photo: 'https://via.placeholder.com/400x400',
          social: {
            twitter: '#',
            linkedin: '#',
            instagram: '#'
          }
        }
      ]
    }
  }
}
</script>