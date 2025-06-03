<template>
  <section class="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 animate-gradient-x"></div>
    
    <!-- Particle animation background (desktop only) -->
    <div class="absolute inset-0 opacity-30 hidden sm:block">
      <div class="particles-js h-full w-full"></div>
    </div>
    
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-10 bg-grid-white/[0.05]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 relative z-10">
      <div class="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <div class="animate-fade-in-up">
          <!-- Animated heading with gradient text -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-text-shimmer">
              HIMATIF UNIVERSITAS UNIVERSAL
            </span>
          </h1>
          
          <!-- Glowing text -->
          <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-indigo-100 max-w-lg glow-text">
            Himpunan Mahasiswa Teknik Informatika Universitas Universal - Wadah kreativitas, inovasi, dan pengembangan diri bagi mahasiswa TIF.
          </p>
          
          <!-- Animated buttons with hover effects -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button class="relative overflow-hidden bg-white text-indigo-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group">
              <span class="relative z-10">Jelajahi Kegiatan</span>
              <span class="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </button>
            <button class="relative overflow-hidden border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:-translate-y-1 group">
              <span class="relative z-10">Daftar Anggota</span>
              <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
        
        <!-- Floating 3D illustration with tags (hidden on mobile) -->
        <div class="relative hidden md:block mt-8 md:mt-0">
          <div class="relative w-full h-64 sm:h-80 md:h-96">
            <!-- 3D floating illustration -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-indigo-400 rounded-2xl shadow-2xl rotate-6 animate-float"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-purple-500 rounded-2xl shadow-2xl -rotate-6 animate-float-delay"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-white rounded-2xl shadow-2xl flex items-center justify-center animate-float">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-20 sm:h-24 md:h-32 w-20 sm:w-24 md:w-32 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
          
          <!-- Floating tags -->
          <div class="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-yellow-400 text-indigo-900 px-3 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg font-bold animate-bounce text-xs sm:text-sm">
            #TechInnovation
          </div>
          <div class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white text-indigo-600 px-3 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg font-bold animate-bounce-delay text-xs sm:text-sm">
            #HackTheFuture
          </div>
          <div class="absolute top-1/4 -right-6 sm:-right-10 bg-pink-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl shadow-lg font-bold animate-pulse text-xs sm:text-sm">
            #CodeWithPassion
          </div>
        </div>
      </div>
    </div>
    
    <!-- Animated wave divider -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden h-12 sm:h-16">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-white opacity-10 w-full h-full">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  </section>
</template>

<script>


export default {
  name: 'Hero',
  mounted() {
    // Load particles.js only on desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 640 && !window.particlesJS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        particlesJS('particles-js', {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" }
            }
          }
        });
      };
      document.head.appendChild(script);
    }
  }
}
</script>

<style scoped>
/* Animation keyframes */
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes text-shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Animation classes */
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 12s ease infinite;
}

.animate-text-shimmer {
  background-size: 200% auto;
  animation: text-shimmer 8s ease infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 6s ease-in-out infinite 1s;
}

.animate-bounce {
  animation: float 4s ease-in-out infinite;
}

.animate-bounce-delay {
  animation: float 4s ease-in-out infinite 0.5s;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out forwards;
}

/* Glow effect */
.glow-text {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
}

/* Grid background */
.bg-grid-white\/\[0\.05\] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white' stroke-opacity='0.05'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

/* Particle container */
.particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .animate-float, .animate-float-delay, .animate-bounce, .animate-bounce-delay {
    animation: none;
  }
  
  .glow-text {
    text-shadow: none;
  }
}
</style>