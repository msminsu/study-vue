<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs6>
				<List 
				@statusControl = "statusControl"
				:todoList="todoList"></List>
			</v-flex>
			<v-flex xs6>
				<ListAdd @listAdd ="listAdd"></ListAdd>
			</v-flex>
		</v-layout>
		
	</v-container>
</template>

<script>
import List from './List'
import ListAdd from './ListAdd'
export default {
	components: {
		List,
		ListAdd
	},
	data(){
		return {
			todoList: []
		}
	},
	methods: {
		listAdd(memo) {
			this.todoList.push({memo: memo, status: 'created'})
		},
		statusControl(index, status){
			console.log(index, status)
			this.todoList[index].status = status;
		}
	}
}
</script>