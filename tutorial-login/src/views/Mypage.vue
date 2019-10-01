<template>
	<div>
		<h1>
			{{userInfo.name}} 님을 환영 합니다.
		</h1>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		...mapState(['userInfo'])
	}
}
</script>
