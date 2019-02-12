import Vue from "vue";
import Router from "vue-router";
import BookSearch from "./components/BookSearch.vue";
import myShelf from "./components/myShelf.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "",
      name: "myShelf",
      component: myShelf
    },
    {
      path: "/search",
      name: "search",
      component: BookSearch
    }
  ],
  mode: "history"
});
