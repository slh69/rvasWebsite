<template>
  <div class="pb-10 h-screen">
    <NavBar />
    <Hero  />
    <Faq />
    <History />
    <Contact />
    <Footer />
  </div>  

</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import History from './components/History.vue'
import Faq from './components/Faq.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

</script>
