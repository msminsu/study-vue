<template>
	<div><h1>
	디테일 페이지
	
	</h1>
	<div>유저 번호 : {{
	userId
	}}</div>
	<v-btn @click ="edit" small>수정</v-btn>
	</div>
</template>
<script>
export default {
	computed:{
		userId(){
			return this.$route.params.id
		}
	},
	methods: {
		edit() {
			//  this.$router.push({name:'page-edit'})
			 this.$router.push({path:`${this.userId}/edit`})// router 시작점이 children 속성위치에서 시작
		}
	}
}
</script>