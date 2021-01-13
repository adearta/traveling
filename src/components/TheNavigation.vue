<template>
    <nav id="nav" class="nav">
        <!-- <p class="logo">The Vue School Travel App</p> -->
        <!-- we comment this because we want to make router link dynamically instead of insert it one by one -->
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/brazil" >Brazil</router-link>
        <router-link to="/panama" >Panama</router-link>
        <router-link to="/hawaii" >Hawaii</router-link>
        <router-link to="/jamaica" >Jamaica</router-link> -->
        <ul class="nav-links">
            <li class="links">
                <router-link class="text" to="/">
                    Home 
                </router-link>
            </li>
            <!-- this make print the each list destination name -->
            <li v-for="destination in destinations"
            :key="destination.name"
            class="links">
            <!-- this link each destination name to each destination page by using name not path( example."/") -->
            <router-link class="text" :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
               {{destination.name}}
            </router-link>

            </li>
        </ul>
    </nav>
</template>
<script>
import Store from "@/store.js";
export default {
    data(){
        return{
            // destinationsId: this.$route.params.id,
            destinations: Store.destinations
        }
    }
}
</script>
<style scoped>
.nav{
    text-align: center;
    align-content: center;
}
nav{
    transition:0.2s;
    text-align: center;

}
#nav{
display: flex;
text-align: center;
align-content: center;

}
#nav a{
    color: #2c3e50;;
    text-decoration: none;
    font-weight: bold;
}
#nav a.vue-school-acive-class{
    color: #ab26ab;
}
.nav-links{
    display: flex;
    text-align: center;
}
.links{
    padding: 20%;
    list-style: none;
    text-align: center;

}
.links:hover{
    text-decoration: underline;
}
.logo{
    
    font-size: 20px;
    color: purple;
    font-weight: bold;
}
nav:hover{
    font-size: 18px;
    transition: 0.3s;
}

</style>