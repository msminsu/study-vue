new Vue({
	el: "#app",
	data: {
		myChoice: null,
		count: 3
	},
	watch: {
		count: function(newVal){
			if(newVal === 0 ){
				
			}
		}
	},
	methods: {
		startGame () {
			if(this.myChoice === null){
				alert(' 가위 바이 보 중 하느를 선택해 주세요')
			}else{
				let countDown = setInterval(()=>{

					this.count--;
					if(this.count === 0) {
						clearInterval(countDown);
					}
				}, 1000)
			}
		}
	}

})