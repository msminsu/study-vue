<template>
	<div>
		<table>
		<thead>
			<tr>
				<th>글쓴이</th>
				<th>제목</th>
				<th>내용</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
			<tr v-for="(value, index) in data" :key="index" @click="detail(index)">
				<td>{{value.writer}}</td>
				<td>{{value.title}}</td>
				<td>{{value.content}}</td>
			</tr>
		</table>
		<button @click="write">글쓰기</button>
	</div>
</template>
<script>
import data from '@/data/index'
export default {
	name: 'Read',
	data() {
		return {
			data
		}
	},
	methods: {
		write() {
			this.$router.push({
				path: 'create'
			})
		},
		detail(index) {
			this.$router.push({
				// path: `detail/${index}`
				name: 'Detail',
				params: {
					contentId: index
				}
			})
		},
	}
	
}
</script>
<style scoped>
th,td{
	border:1px solid gray;
}
</style>