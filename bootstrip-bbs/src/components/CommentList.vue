<template>
	<div>
		<div :key="item.comment_id" v-for = "item in comments">
			<CommentListItem :commentObj ="item"/>
		</div>
		<CommentCreate :contentId="contentId" :reloadComment ="reloadComment"/>
	</div>
</template>
<script>
import data from '@/data';
import CommentListItem from './CommentListItem';
import CommentCreate from './CommentCreate';

export default {
	name: 'ContentList',
	components: {
		CommentListItem,
		CommentCreate,
	},
	props: {
		contentId: Number,
		reloadComments: Function,
	},
	data() {
		return {
			comments: data.Comment.filter(item => item.content_id === this.contentId)
		}
	},
	methods: {
		reloadComment() {
			this.comments = data.Comment.filter(item => item.content_id === this.contentId)
		}
	}

}
</script>