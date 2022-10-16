<template>
   <div class="wrapper-content">
      <input v-model="searchQuery" class="input" placeholder="Search..." />

      <div class="card__wrapper">
         <Card v-for="char in searchedChars" :key="char.id" :id="char.id" :name="char.name" :status="char.status"
            :species="char.species" :gender="char.gender" :imgUrl="char.image" :link="char.url" />
      </div>

      <div class="pagination">
         <div class="pagination__arrow" @click="fetchChars(pagination.currentPage - 1)">&#129092;</div>
         <div class="pagination__arrow" @click="fetchChars(pagination.currentPage + 1)">&#129094;</div>
      </div>
   </div>
</template>


<script>
import Card from '@/components/Card';
import axios from 'axios';

export default {
   components: { Card},
   data() {
      return {
         chars: [],
         searchQuery: '',
         pagination: {
            currentPage: 1,
            nextPage: null,
            prevPage: null
         },
      }
   },
   methods: {
      async fetchChars(pageNumber) {
         try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`);
            this.chars = response.data.results;
            this.pag = response.data.info
            this.pagination = {
               currentPage: pageNumber ? pageNumber : 1,
               nextPage: this.pag.nextPage,
               prevPage: this.pag.prevPage
            }
         } catch (err) {
            console.log('Произошла ошибка!')
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

.pagination {
   text-align: center;
   display: flex;
   justify-content: center;
   gap: 30px;
}
.pagination__arrow {
   font-size: 48px;
   cursor: pointer;
   transition: all ease .2s;
}

.pagination__arrow:hover {
   scale: 1.05;
}
</style>


