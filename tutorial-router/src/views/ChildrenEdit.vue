<template>
	<div>
		<h1>
	Page Edit
	</h1>
	<p>{{userId}}</p>
	
	</div>
</template>
<script>
export default {
	computed: {
		userId() {
			return this.$route.params.id
		}
	}
	
}
</script>