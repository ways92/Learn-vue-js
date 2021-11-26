<template>
  <div>
    <Navbar/>
  </div>
  <div class="container mt-3">
    <router-view></router-view>
  </div>
  <div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer
    
  }
}
</script>

<style>
</style>
