<template>
   <div class="card">
      <div v-if="imgUrl" class="card-img__wrapper">
         <img class="card-img" :src="imgUrl" :alt="name">
      </div>
      <span class="card-title">{{ name }}</span>
      <span class="card-text">{{ status }}</span>
      <span class="card-text">{{ species }}</span>
      <span class="card-text">{{ gender }}</span>

      <div class="card-body">

         <button @click="$router.push(`character/${id}`)" class="btn">
            See more
         </button>
      </div>
   </div>
</template>


<script>
export default {
   name: 'Card',
   props: {
      id: {
         type: Number,
         requored: true
      },
      name: {
         type: String,
         requored: true
      },
      status: {
         type: String,
         requored: true
      },
      species: {
         type: String,
         requored: true
      },
      gender: {
         type: String,
         requored: true
      },
      // location: {
      //    type: Object,
      //    requored: true
      // },
      // episode: {
      //    type: Array,
      //    requored: true
      // },
      imgUrl: {
         type: String,
      },
      link: {
         type: String,
      }
   },
   methods: {
      charDetails() {
         this.$router.push({ name: 'CharDetailsPage', params: { id: this.char.id } })
      }
   }
}
</script>


<style scoped>
.card {
   width: 300px;
   display: inline-block;
   margin: auto;
   border-radius: 50px;
   position: relative;
   text-align: center;
   box-shadow: -1px 15px 30px -12px rgba(50, 50, 50, 0.2);
   background-color: #22A2BD;
   color: black;
}

.card-img__wrapper {
   position: relative;
   height: 300px;
   border-top-left-radius: 50px;
   border-top-right-radius: 50px;
}

.card-img {
   width: 100%;
   border-top-left-radius: 50px;
   border-top-right-radius: 50px;
}

.card-title {
   display: block;
   margin-top: 30px;
   margin-bottom: 20px;
   font-size: 26px;
   font-weight: 900;
   color: #fff;
}

.card-text {
   display: block;
   margin-top: 10px;
   margin-bottom: 10px;
   font-size: 16px;
   font-weight: 500;
}

.btn {
   margin-bottom: 40px;
   margin-top: 30px;
   cursor: pointer;
   padding: 10px 50px;
   background-color: #fff;
   border: 1px solid #fff;
   border-radius: 50px;
   color: #000;
   font-weight: 600;
   transition: all ease .2s;
}

.btn:hover {
   scale: 1.05;
}
</style>