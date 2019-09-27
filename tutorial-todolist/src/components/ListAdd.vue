<template>
	<div>
		<v-textarea
          outlined
          v-model ="memo"
          label=" 투두리스트를 입력하세요.."
          value=""
        ></v-textarea>
		<v-btn @click ="listAdd">리스트 투가</v-btn>
	</div>
</template>
<script>
export default {
	data(){
		return {
			memo : null
		}
	},
	methods: {
		listAdd() {
			if(this.memo === null){
				alert(' 메모를 입력하세요')
			}else{
			this.$emit('listAdd', this.memo)
			}
		}
	}
}
</script>