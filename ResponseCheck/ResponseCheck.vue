<template>
	<div>
		<div id="screen" v-bind:class="state" @click="onClickScreen">{{message}}</div>
		<div>
			<div>평균속도: {{average}}</div>
			<button @click = "onReset">리셋</button>
		</div>
	</div>
</template>
<script>

let startTime = 0;
let endTime = 0;
let timeOut = null;
 
export default {
	
	data(){
		return {
			result: [],
			state: 'waiting',
			message: '클릭해서 시작하세요'
		}
	},
	computed: {
		average(){
			return this.result.reduce((a,c) => a+c,0)/this.result.length || 0;
		}
	},
	methods:{
		onReset() {
			this.result = [];
		},
		onClickScreen(){
			if( this.state === 'waiting'){
				this.state = 'ready';
				this.message = '초록색이 되면 클릭하세요';
				setTimeout(()=>{
					this.state = 'now';
					this.message = '지금 클릭';
					startTime = new Date();
				}, Math.floor(Math.random()* 1000) +2000);
			}else if(this.state === 'ready'){
				this.state = 'waiting'
				this.message = '초록생이 된 후에 클릭!!!!';
			}else if(this.state === 'now') {
				endTime = new Date();
				this.state = 'waiting'
				this.message = '클릭해서 시작하세요';
				this.result.push(endTime - startTime);
			}
		}
	}
}
</script>
//  scoped 이 컴포넌트에서만 유효하게 설정
<style scoped>  
#screen{
	width: 300px;
	height: 200px;
	text-align: center;
	user-select: none;
}
#screen.waiting{
	background-color: aqua;
}
#screen.ready{
	background-color: red;
	color: #fff;
}
#screen.now{
	background-color: greenyellow;
}
</style>

