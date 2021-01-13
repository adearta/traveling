<template>
    <section>
        <h1>Experiences</h1>
        <h2>{{experience.name}}</h2>
        <div class="experience-details">
            <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
            <p>{{ experience.description}}</p>
        </div>
    </section>
</template>

<script>
import Store from "@/store.js";
export default {
    props:{
        slug:{
            type: String,
            required: true
        },
        experienceSlug:{
            type: String,
            required: true
        }
    },
    computed:{
        destination(){
            return Store.destinations.find(
                destination => destination.slug === this.slug
            )
        },
        experience(){
            return this.destination.experiences.find(
                experience => experience.slug == this.experienceSlug
            )
        }
    }
}
</script>

<style scoped>

img {
  /* transition-delay: 0.5s; */
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
  transition: 0.3s;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

}
img:hover{
max-width: 650px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}
.experience-details {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>