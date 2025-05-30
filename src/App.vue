<template>
  <div class="min-h-screen bg-gray-50">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Events />
      <News />
      <Team />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'
import Team from './components/Team.vue'
import News from './components/NewsSection.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Events,
    Team,
    News,
    Contact,
    Footer
  }
}
</script>