import Vue from "vue"
import Vuex from "vuex"
import router from "./router";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "hero", email: "hero@naver.com", password: "12345" },
      { id: 2, name: "hero2", email: "hero2@naver.com", password: "12345" }
    ],
    isLogin: false,
    isLoginError: false,
  },
  // stater값을 변경하는 로직
  mutations: {
    // 로그인 성공
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //로그인 실패
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    },

    logout(state){
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  // 비즈니스 로직?
  actions: {
    // 로그인 시도   mutation commit으로 적용
    login({ state, commit }, loginObj) {
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user
      })
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError")
      else {
        commit("loginSuccess", selectedUser)
        router.push({ name: 'mypage' })
      }

      /* if(selectedUser === null) commit('loginError')
		else{
			if(selectedUser.password !== loginObj.password ){
				// alert('이메일과 비밀번호가 일치하지 않습니다.')
				commit('loginError')
			}else{
				// alert('로그인 되었습니다.');
				commit('loginSuccess')
			}
		} */
    },

    logOut({commit}) {
      commit('logout')
      router.push({ name: 'home'})
    }
    //
  }
})
