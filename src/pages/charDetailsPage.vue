<template>
   <div class="wrapper-person">
      <div v-if="char" class="char">
         <div class="img-wrapper">
            <img :src="char.image" :alt="char.name" class="char__img" />
         </div>

         <div class="char__info">
            <h1 class="char__title">{{ char.name }}</h1>
            <p class="char__text">{{ char.status }}</p>
            <p class="char__text">{{ char.species }}</p>
            <p class="char__text">{{ char.gender }}</p>

            <div class="home__btn">
               <router-link to="/" class="btn home__btn">back to home</router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Card from '@/components/Card';
import axios from 'axios';

export default {
   name: "CharDetails",
   components: { Card },
   data() {
      return {
         char: null,
      }
   },
   methods: {
      async fetchCharId(id) {
         try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}/`);
            this.char = response.data;
         } catch (err) {
            console.log('Произошла ошибка в fetchCharId!')
         }
      }
   },
   created() {
      this.id = this.$route.params.id;
   },
   mounted() {
      this.fetchCharId(this.id);
   }
}
</script>

<style scoped>
.wrapper-person {
   margin: 0 auto;
   margin-top: 100px;
}
.char {
   display: flex;
   align-items: center;
}
@media (max-width: 798px) {
   .char {
      display: block;
      text-align: center;
   }
}
.char__img {
   border-radius: 8px;
   width: 500px;
}
@media (max-width: 520px) {
   .char__img {
      width: 260px;
   }
}
.char__info {
   margin-left: 100px;
}

@media (max-width: 798px) {
   .char__info {
      margin-left: 0;
      margin-top: 20px;
   }
}
.char__title {
   font-size: 48px;
   margin-bottom: 50px;
}

@media (max-width: 798px) {
   .char__title {
      font-size: 32px;
      margin-bottom: 20px;
   }
}
.char__text {
   font-size: 32px;
}

@media (max-width: 798px) {
   .char__text {
      font-size: 24px;
   }
}
.home__btn {
   margin-top: 100px;
   cursor: pointer;
   padding: 10px 50px;
   background-color: #fff;
   border: 1px solid #fff;
   border-radius: 50px;
   color: #000;
   font-weight: 600;
   transition: all ease .2s;
   text-align: center;
}
.home__btn:hover {
   scale: 1.05;
}

@media (max-width: 798px) {
   .home__btn {
      margin-top: 20px;
   }
}
</style>