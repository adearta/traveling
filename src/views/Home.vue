<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
    <div v-for="destination in destinations"
    :key="destination.name">
    <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}"> 
      <h2 >{{destination.name}}</h2>
    </router-link>
    <figure>
      <router-link :to="{name: 'DestinationDetails', params:{slug:destination.slug}}">
        <img :src="require(`../assets/${destination.image}`)"
         :alt="destination.name"/>
      </router-link>
    </figure>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Store from "@/store.js"

export default {
  name: "Home",
  components: {},
  data(){
    return{
      destinations: Store.destinations
    }
  }
};
</script>

<style scoped>
.home{
  max-width: 1400px;
  margin: 0 auto;
}
img:hover{
max-width: 220px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
img{
  border-radius: 5%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  max-width: 200px;
}
.destinations{
  display: flex;
  justify-content: space-between;
  
}
a{
  color: lightseagreen;
  text-decoration: none;
}
a:hover, a:visited{
text-decoration: underline;
}
/* .header{
  color: black;
  border-bottom-style: none;
} */
</style>

