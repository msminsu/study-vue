import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data 역활 저장소 디아블로 상자 라고... 
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  // computed 같은 기능
  getters:{
    allUsersCount: function(state) {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count;
    },
    percentOfSeoul : (state, getters) => {  // state 두번째 인자로 getters를 받아서 state 를 꼭 써줌
      return Math.round(getters.countOfSeoul/ getters.allUsersCount *100)
    }
  },
  mutations: {

  },
  actions: {

  }
})
