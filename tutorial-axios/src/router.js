import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store"

Vue.use(Router);

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인 된 유저
    alert('이미 로그인 되었습니다.')
    next('/');
  } else {
    next();
  }
}

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인이 안된
    alert(" 로그인이 필요합니다.")
    next('/');
  } else {
    next();
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser,
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Login.vue")
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Mypage.vue")
    }

  ]
});