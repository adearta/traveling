<template>
  <div id="app">
    <div id="nav">
      <TheNavigation/>
    </div>
    <!-- :key="$route.path"  is used to make the router reload the page so it's become dynamic -->
    <transition name="popUp">
          <router-view :key="$route.params.slug"/>
    <!-- <router-view :key="$route.path" /> -->
    </transition>

  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation"
export default {
  name: 'app',
components:{
  TheNavigation
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  align-items: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.popUp-enter-active{
animation: fadeIn 0.5s ease-in;
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
.popUp-leave-active {
  animation: popUp 0.3s ease-in;
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
