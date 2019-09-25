<template>
<v-layout row wrap pt-5 text-xs-center
style="max-width: 500px; margin: 0 auto;"
>
	<v-flex xs12>
		<h1>ChildrenPage</h1>
		<p>유저를 검색해 주세요</p>
	</v-flex>
	<v-flex xs12>
		<v-text-field 
		label="유저번호를 임력하세요"
		v-model="userId"
		>
		</v-text-field>
		<v-btn @click="$router.push({path: `${userId}`})"> path - 검색</v-btn>
		<v-btn @click="$router.push({name: `page-detail`, params:{
			id:userId
		}})">name - 검색</v-btn>
	</v-flex>
	<v-flex xs12>
		<router-view></router-view>
	</v-flex>
</v-layout>
</template>

<script>
export default {
	data() {
		return {
			userId: null,
		}
	}
}
</script>