<template>
<div>
  <h1>{{ title }}</h1>  
  <p>{{count}}</p>
  <button @click="count++">추가</button>
  <HomeComponent></HomeComponent>
  <AppStatus></AppStatus>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <User></User>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>


<script>
import HomeComponent from './Home'
import User from './components/User'

export default {
  components: {
    HomeComponent,
    User
  },
  data() {
    return { 
      title: '안녕하세요.',
      count: 1,
    }
  }
}
</script>
