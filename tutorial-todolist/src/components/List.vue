<template>
	<div>
		<v-card 
			v-for="(list, index) in todoList"
			:key = "index"
			:class="{'done': list.status ==='done'}"
		>
		<p>{{list.memo}}</p>
		<v-btn 
		v-if ="list.status ==='created'"
		@click = "$emit('statusControl', index, 'done')"
		fab small color="green">완료</v-btn>
		<v-btn 
		v-else
		@click = "$emit('statusControl', index, 'created')"
		fab small color="blue">부활</v-btn>
		<v-btn
		@click = "$emit('statusControl', index, 'done')"
		fab small color="red">제거</v-btn>
		</v-card>
	</div>
</template>

<script>
export default {
	props:[
		'todoList'
	],
	data(){
		return {
			
		}
	}
}
</script>
<style scoped>
	.done{
		background: #000;
	}
	.done p{
		text-decoration: line-through;
	}
</style>