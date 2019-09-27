<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{nameOfChild}}</p>
    <p>{{sayHello}}</p>
    <v-btn @click = "switchName">이름 변경</v-btn>

    <v-list dense>
      <v-list-item>
        <v-list-item-content>이름 : </v-list-item-content>
        <v-list-item-content class="align-end">
          {{name}}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>주소 : </v-list-item-content>
        <v-list-item-content class="align-end">
          {{address}}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>전화번호 : </v-list-item-content>
        <v-list-item-content class="align-end">
          {{phone}}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>반려견 유무 : </v-list-item-content>
        <v-list-item-content class="align-end">
          {{hasDogKr}}
        </v-list-item-content>
      </v-list-item>
       <v-list-item>
        <v-list-item-content>수정일자 : </v-list-item-content>
        <v-list-item-content class="align-end">
         {{getDateAndTime(editeDate)}}
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </div>
</template>

<script>
import {eventBus} from '../main'
import {dateFormat} from '../mixins/dateFormat'
export default {
  
 /*  props:{
    name,
    address,
    phone,
    hasDog,
    nameOfChild: {
      type: String,
      default: 'LEGO',  // 기본값 설정 , 부모에서 props 값이 없을때
      // required: true //필수값 설정시
    }
  }, */
   props:[
     "nameOfChild",
    "name",
    "address",
    "phone",
    "hasDog",
   ],
  data() {
    return {
      age : '뷰 제이 에스',
      editeDate: null
    }
  },
  computed: {
    sayHello () {
      return this.nameOfChild + '안녕하세요!'
    },
    hasDogKr() {
      return this.hasDog === true ? '있음' : '없음'
    }
  },
  methods: {
    switchName () {
      this.nameOfChild = '컴퓨터'
    }
  },
  created() {
    console.log('유저 디테일 컴포넌트 ')
    eventBus.$on('userWasEdited', date=>{
      this.editeDate = date
    })
  },
  mixins:[dateFormat]

}
</script>