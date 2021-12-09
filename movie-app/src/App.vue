<template>
  <div >
    <Navbar/>
    <div id="app container">
      
 <router-view></router-view>
   
    </div>
    <Footer/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import Home from './components/pages/Home.vue'

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
