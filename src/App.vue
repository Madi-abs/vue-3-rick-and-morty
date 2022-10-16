<template>
  <div class="app">
    <div class="navbar-logo">
      <img class="logo-img" src="./assets/logo.png" alt="logo" @click="$router.push('/')" />
    </div>

    <div class="container">
      <router-view />
    </div>

  </div>
</template>


<script>
export default {
  components: {

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

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(1, 0, 23);
  color: #fff
}

.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px 50px;
}

.wrapper-content {
  min-height: 70vh;
  margin-top: 30px;
}

.navbar-logo {
  width: 480px;
  margin: 0 auto;
}

@media (max-width: 520px) {
  .navbar-logo {
    width: 260px;
  }
}

.logo-img {
  width: 100%;
  cursor: pointer;
  ;
}
</style>
