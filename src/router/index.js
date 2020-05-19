import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Preat from "../views/Preat";
import Market from "../views/Market";
import Goods from "../views/Market/Goods";
import Inset from "../views/Inset";
import Comunity from "../views/Comunity";
import Cartoonclass from "../views/Cartoonclass";
import Cartoondetail from "../views/Cartoonclass/Cartoondetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/preat",
    component: Preat,
  },
  {
    path: "/market",
    component: Market,
    children: [
      {
        path: "goods",
        component: Goods
      },
    ]
  },
  {
    path: "/inset",
    component: Inset,
  },
  {
    path: "/comunity",
    component: Comunity,
  },
  {
    path: "/cartoonclass",
    component: Cartoonclass,
    children:[
      {
        path:"cartoondetail",
        component:Cartoondetail
      }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;
