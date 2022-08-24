<template>
   <footer class="footer">
      <div class="container">
         <div class="navbar-content">
            <div class="navbar-logo">
               <img class="logo-img" src="../assets/logo.png" alt="" />
            </div>

            <ul class="navbar-list">
               <li v-for="link in links"  :key="link.alias" class="navbar-item" >
                  <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
               </li>
            </ul>

           
         </div>
      </div>
   </footer>
</template>


<script>
import { links } from '@/_config';

export default {
   data() {
      return {
         links: links
      }
   }
}
</script>

<style scoped>
.footer {
   padding-bottom: 50px;
}
.navbar-content {
   display: flex;
   flex-direction: column;
   align-items: center;   
}

.navbar-logo {
   width: 450px;
   padding-bottom: 20px;
}

.logo-img {
   width: 100%;
}

.navbar-list {
   display: flex;
   align-items: center;
   column-gap: 40px;
}

.navbar-link {
  display: block;
  transition: all 0.2s ease;
}

.navbar-link:hover {
   color: #22A2BD;
}
</style>