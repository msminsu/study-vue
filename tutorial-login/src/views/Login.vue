<template>
	<v-container fill-height style="max-width:450px">
		<v-layout align-center row wrap>
			<v-flex xs12>
				<v-card>
					<v-toolbar flat>
						<v-toolbar-title>로그인</v-toolbar-title>
					</v-toolbar>
					<div class="pa-3">
						<v-text-field
						v-model="email"
						label="이메일을 입력하세요"
						>
						</v-text-field>
						<v-text-field
						v-model="password"
						type="password"
						label="패스워드를 입력하세요"
						></v-text-field>
						<v-btn color="primary" depressed block large
						@click ="login"
						>로그인</v-btn>
					</div>
					
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	
data(){
	return {
		email: null,
		password: null,
		allUsers : [
			{id: 1, name :'hero',email:'hero@naver.com', password: '12345' },
			{id: 2, name :'hero2',email:'hero2@naver.com', password: '12345' },
		]
	}
},
methods: {
	login() {
		let selectedUser = null;
		this.allUsers.forEache( user => {
			if(user.email === this.email) selectedUser =user
		})
		
		if(selectedUser === null){alert('이메일이 없습니다. ')}
		else{
			if(user.password !== this.password ){
				alert('이메일과 비밀번호가 일치하지 안습니다.')
			}else{
				alert('로그인 되었습니다.');
			}
		}
		console.log(this.email, this.password)
	}
}
}
</script>