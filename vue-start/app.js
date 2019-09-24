new Vue({
	el: "#app",
	data: {
		comChoice: null,
		myChoice: null,
		count: 3,
		winner : null,
		lifeOfMe: 3,
		lifeOfCom: 3,
		isSelectable: true,
		logs: []
	},
	watch: {
		count: function(newVal){
			if(newVal === 0 ){
				let number = Math.random()
				if(number < 0.33){
					this.comChoice = 'scissor';
				} else if ( number < 0.66){
					this.comChoice = 'rock';
				} else {
					this.comChoice = 'paper'
				}

				 if(this.myChoice === this.comChoice) this.winner = 'no one'
				else if( this.myChoice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
				else if( this.myChoice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
				else if( this.myChoice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
				else if( this.myChoice === 'scissor' && this.comChoice === 'rock') this.winner = 'com'
				else if( this.myChoice === 'paper' && this.comChoice === 'scissor') this.winner = 'com'
				else if( this.myChoice === 'rock' && this.comChoice === 'paper') this.winner = 'com'
				else this.winner ='error'

				// 몫을 차감
				if( this.winner === 'me' ){
					this.lifeOfCom--
				}
				else if( this.winner ==='com'){
					this.lifeOfMe--
				}

				this.count = 3;
				this.isSelectable = true;

				let log ={message:` You: ${this.myChoice}, Computer: ${this.comChoice}`,
				winner: this.winner
			}
				this.logs.unshift(log);

			}
		},
		lifeOfMe: function(){

		},
		lifeOfCom: function(){

		}
	},
	methods: {
		startGame () {
			this.isSelectable = false;
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