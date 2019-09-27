export const dateFormat = {
	data() {
		return {
			mixinData: '믹스인 데이타'
		}
	},
	created(){
		console.log('믹스인')
	},
	methods: {
		getDateAndTime(date){
			if(date !== null){
				let hour = date.getHours();
				let minutes = date.getMinutes();
				let fullDate =  `${date.getFullYear()} /${date.getMonth() + 1}/${date.getDate()}`
		
				return `${fullDate} ${hour}:${minutes}`;
		
			  }else{
				return null
			  }
		}
	},
}