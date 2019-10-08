<template>
  <div>
    
    <h1>All Users {{allUsersCount}}</h1> <!-- mapGetters 사용시  $store.getters. 로 안불러도 됨 -->
    <h3>Seoul Users {{seouls}}({{$store.getters.percentOfSeoul}}%)</h3>
    <v-list two-line>
      <!-- $store.status.allUsers 를 mapState로 사용 -->

      <!-- 여기 있던 데이터를 store.js state로 옮기고 > $store.state.allUsers 로 접근가능
      mapState import 하면 기존 처럼 allUsers로 접근 가능 -->

      <v-list-tile 
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        
      }
    },
    computed:{
      // ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])  속성명 변경 방법
      ...mapGetters({
        allUsersCount: 'allUsersCount', 
        seouls: 'countOfSeoul', 
        percent: 'percentOfSeoul'
        }),
        ...mapState(["allUsers"])
    },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
