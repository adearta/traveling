<template>
<div>
   <GoBack/>
   <section class="destination">
      <h1>{{destination.name}}</h1>
      <div class="destination-details">
         <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
         <p>{{destination.description}}</p>
      </div>
         <hr>
   </section>

<section class="experiences">
   
    <h2>
       Top experiences in {{destination.name}}
    </h2>
    <div class="cards">
       <div v-for="experience in destination.experiences" :key="experience.slug" class="card">
          <router-link :to="{name: 'experienceDetails', params:{ experienceSlug: experience.slug }}">
         <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
         <span class="card__text">
            {{experience.name}}
         </span>
         </router-link>
       </div>
    </div>
    <transition name="detailTransition">
    <router-view :key="$route.path"/>
    </transition>
</section>
</div>
</template>

<script>
import Store from "@/store.js";
import GoBack from "@/components/GoBack.vue"
export default {
   components:{
      GoBack
   },
   data(){
      return{
         //this tigly coupled to the routes, because it needs to know where it gets its data from
         // slug: this.$route.params.slug
      }
   },
   // instead tigly coupled to the routes we use this to gives us better flexibility if bussiness requirements change
   //and we need to resturctured our application. The DestinationDetail component doesn't need to know where it gets its data from 
   props:{
      slug:{
         type: String,
         required: true
      }
   },

   computed:{
      destination(){
         return Store.destinations.find(
            destination => destination.slug === this.slug
         )
      }
   }
}
</script>
<style scoped>
.destination{
   background-color: #f1f6f9;
}
.destination-details img{
   max-width: 600px;
   height: auto;
   width: 100%;
   max-height: 400px;
}
.destination-details{
   display: flex;
   justify-content: space-between;
}
p{
   margin: 0 40px;
   font-size: 20px;
   text-align: left;
}
.card{
flex: 25%;
padding: 0 20px;   
position: relative;
overflow: hidden;
}
.card:hover{
   max-height: 300px;
}
.card img:hover{
max-height: 220px;
transition: 0.4s;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
overflow:hidden;
}
.card img{
   border-radius: 5%;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.4s;
   max-height: 200px;
}
.cards {
   display: flex;
/* display: inline;*/

}
.card__text{
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: white;
   font-size: 25px;
   font-weight: bold;
   text-decoration: none;
}
.detailTransition-enter-active{
animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
    transform: scale(0);
  }
  /* 50%{
    opacity: 0.5;
    transform: scale(0.5);
  } */
  100%{
    opacity: 1;
    transform: scale(1);
  }
}
.detailTransition-leave-active {
  animation: popUp 0.5s ease-in;
}
@keyframes popUp{
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(0);
  }
}
</style>