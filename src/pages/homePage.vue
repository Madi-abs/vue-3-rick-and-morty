<template>
   <div class="wrapper-content">
      <input v-model="searchQuery" class="input" placeholder="Search..." />

      <div class="card__wrapper">
         <Card v-for="char in searchedChars" :key="char.id" :id="char.id" :name="char.name" :status="char.status"
            :species="char.species" :gender="char.gender" :imgUrl="char.image" :link="char.url" />
      </div>

   </div>
</template>


<script>
import Card from '@/components/Card';
import axios from 'axios';

export default {
   components: { Card },
   data() {
      return {
         chars: [],
         searchQuery: '',
      }
   },
   methods: {
      async fetchChars() {
         try {
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            this.chars = response.data.results;
         } catch (err) {
            console.log('Произошла ошибка в async fetchChars!')
         }
      },
   },
   computed: {
      searchedChars() {
         if (this.searchQuery) {
            return this.chars.filter(char => {
               return char.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            })
         } else {
            return this.chars;
         }
      },
   },
   mounted() {
      this.fetchChars();
   }
}
</script>


<style scoped>
.card__wrapper {
   display: flex;
   flex-wrap: wrap;
   gap: 50px;
   margin-top: 50px;
   margin-bottom: 50px;
}

.input {
   width: 100%;
   border: 1px solid #ccc;
   border-radius: 50px;
   padding: 10px 15px;
   outline: none;
   font-size: 18px;
}
</style>


