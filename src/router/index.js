// import { from } from "core-js/fn/array";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Store from "../store";



Vue.use(VueRouter);
const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
    props:true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About 
    // instead of using the import route, we use the lazy loaded, because it's will only loaded necessary things and also make our app become faster
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  // we comment this because we doing adding :key="$route.path" in the App.vue. so, instead of insert the route manually, we can do it dynamically
  // {
  //   path:"/brazil",
  //   name:"Brazil",
  //   component: () =>
  //   import(/* webpackChunkName: "Brazil" */ "../views/Brazil.vue")
  // },
  // {
  //   path:"/panama",
  //   name:"Panama",
  //   component: () =>
  //   import(/* webpackChunkName: "Panama" */ "../views/Panama.vue")
  // },
  // {
  //   path:"/jamaica",
  //   name:"Jamaica",
  //   component: () =>
  //   import(/* webpackChunkName: "Jamaica" */ "../views/Jamaica.vue")
  // },
  // {
  //   path:"/hawaii",
  //   name:"Hawaii",
  //   component: () =>
  //   import(/* webpackChunkName: "Hawaii" */ "../views/Hawaii.vue")
  // },
  {
    path:"/destinations/:slug",
    name:"DestinationDetails",  
    props: true,
    component: ()=>
    import(/* webpackChunkName: "DestinationDetail" */ "../views/DestinationDetail.vue"),
    children: [
      {
        path: ":experienceSlug",
        name:"experienceDetails",
        props: true,
        component: ()=>
        import(/* webpackChunkName: "ExperienceDetail" */ "../views/ExperienceDetails.vue")
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = Store.destinations.find(
      destination => destination.slug === to.params.slug
      )
      
      if (exists) {
      next()
      } else {
      next({ name: "notFound" })
      }
    }
  },
  {
    path:"404",
    alias:"*",
    name: "Notfound",
    component: ()=>
    import(/* webpackChunkName: "NotFound" */ "../components/NotFound.vue")
  }
];

const router = new VueRouter({
  mode:"history",
  routes:routes
});


export default router;
