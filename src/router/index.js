import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../components/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LOGIN",
    component: HomeView,
  },
  {
    path: "/about",
    name: "ABOUT",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/views/AboutView.vue"
      ),
  },
];

VueRouter.prototype.$token = localStorage.getItem('token') || ''

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const publicRoutes = ["LOGIN"];

router.beforeEach((to, from, next) => {
  const isPublicRoute = publicRoutes.includes(to.name);

  if (router.$token.length) {
    if (isPublicRoute) return next({ name: 'ABOUT' })
    else next()
  } else {
    if (!isPublicRoute) return next({ name: 'LOGIN' })
  }

  return next()
});

export default router;
