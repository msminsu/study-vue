import Vue from "vue"
import Vuex from "vuex"
import router from "./router";
import axios from 'axios'

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
    login({ commit }, loginObj) {
   /*    let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) selectedUser = user
      })
      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError")
      else {
        commit("loginSuccess", selectedUser)
        router.push({ name: 'mypage' })
      } */

      axios
      .post('https://reqres.in/api/login', loginObj)
      .then((res)=> {
        //성공시 토큰이 돌아옴
        // 토큰을 헤더에 포함시켜서 유저정보를 요청 
        // config ,header 설정
        let token =  res.data.token
          // 토근을 로컬 스토리지에 저장\
          localStorage.setItem('access_token', token);// 로컬 스코리지에 토큰 저장
          this.dispatch('getMemberInfo')

      })
      .catch(() => {
        alert('이메일과 비밀번호를 확인하세요')
        // console.log(err);
      });

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

    logout({commit}) {
      commit('logout')
      router.push({ name: 'home'})
    },

    getMemberInfo({ commit }){

      let token = localStorage.getItem('access_toke');
      // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
      let config = {
        headers: {
          'access-token': token
        }
      }
      axios
      .get('https://reqres.in/api/users/2', config)
      .then((response)=> {
        // console.log(response);
        let userInfo = {
          id : response.data.data.id,
          first_name : response.data.data.first_name,
          last_name : response.data.data.last_name,
          avatar : response.data.data.avatar,
        }
        commit('loginSuccess', userInfo )
      })
      .catch((error) => {
        alert('이메일과 비밀번호를 확인하세요')
        // console.log(error);
      });

    }
    //
  }
})
