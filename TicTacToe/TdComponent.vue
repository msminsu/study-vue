<template>
	<td @click="onClickTd">{{cellData}}</td>
</template>
<script>
export default {
	props: {
		cellData: String,
		rowIndex: Number,
		cellIndex: Number,
	},
	methods:{
		onClickTd(){
			this.$root.$data
		}
	}

}
</script>
<style>

</style>

