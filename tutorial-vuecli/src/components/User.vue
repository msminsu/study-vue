<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{name}}</p>
    <p>{{getDateAndTime(createdAt)}}</p>
    <p>{{helloToMixin}}</p>
   <v-btn @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
        :nameOfChild ="nameOfChild"
        :name ="name"
        :address ="address"
        :phone ="phone"
        :hasDog ="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
        :nameOfChild ="nameOfChild"
        :name ="name"
        :address ="address"
        :phone ="phone"
        :hasDog ="hasDog"
        @child ="parents" ##child 신호를 받으면 실행
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import {dateFormat} from '../mixins/dateFormat'

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      nameOfChild:"이름",
      name: '켈리',
      address: 'Seoul',
      phone: '124-1234',
      hasDog: true,
      createdAt: null,
    }
  },
  computed:{
    helloToMixin(){
      return this.mixinData +' 불러왔습니다.'
    }
  },
  created() {
    console.log('유저 컴포넌트')
    this.createdAt = new Date();
  },
  methods: {
    changeName() {
      this.name = 'Test';
    },
    parents(user){
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
      console.log('부모가 받았어!!!')
    },
    /*  믹스인으로 분리
    getDateAndTime(date){
      if(date !== null){
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate =  `${date.getFullYear()} /${date.getMonth() + 1}/${date.getDate()}`

        return `${fullDate} ${hour}:${minutes}`;

      }else{
        return null
      }
    } */
  },
  mixins:[dateFormat]
}
</script>