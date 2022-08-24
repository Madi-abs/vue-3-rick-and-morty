<template>
  <div class="app">
    <Header />
      <div class="container">
        <router-view />
      </div>
  <Footer />
  </div>
</template>


<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header, Footer
  },
  data() {
      return {
      }      
   },
}
</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

.app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(1, 0, 23);
  color: #fff
}

.container {
  max-width: 1200px;
  padding: 0 20px;
}

.wrapper-content {
  min-height: 70vh;
  margin-top: 30px;
}
</style>
