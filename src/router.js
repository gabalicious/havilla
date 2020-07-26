import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";

import Home from "./views/Home.vue";
import Components from "./views/Components.vue";
import AboutUs from "./views/AboutUs.vue";
import ContactUs from "./views/ContactUs.vue";
import Order from "./views/Order.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter,
      },
    },
    {
      path: "/aboutus",
      name: "About Us",
      components: {
        header: AppHeader,
        default: AboutUs,
        footer: AppFooter,
      },
    },
    {
      path: "/contactus",
      name: "Contact Us",
      components: {
        header: AppHeader,
        default: ContactUs,
        footer: AppFooter,
      },
    },
    {
      path: "/Order",
      name: "Order",
      components: {
        header: AppHeader,
        default: Order,
        footer: AppFooter,
      },
    },
    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
