<template>
  <div class="comment-list">
    <h1>Comment List</h1>
    <div class="comment-form">
      <input type="text" v-model="commentBody" />
      <button @click="submit">submit</button>
    </div>
    <div v-if="isload">
      loading...
    </div>
    <div class="comments-area" v-else>
      <comment-component
       class="comment"
       @reply-submit="submitReply"
       v-for="comment in comments"
       :key="comment.id"
       :comment="comment"
      />
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CommentComponent from './CommentComponent.vue'
import { Comment } from '../types/types'
import { commentGet, commentPost, replyPost } from './CommentService'

interface DateType {
  commentBody: string
  isload: boolean
  comments: Comment[]
}

export default Vue.extend({
  components: {
    CommentComponent
  },
  async created () {
    this.comments = await this.refleshComments()
  },
  data(): DateType {
    return {
      commentBody: "",
      isload: true,
      comments: []
    }
  },
  methods: {
    async refleshComments() {
      this.isload = true
      const comments = await commentGet()
      this.isload = false
      return comments
    },
    async submit() {
      this.isload = true
      await commentPost({
        id: 0,
        parent_id: null,
        body: this.commentBody,
        repries: []
      })
      this.commentBody = ""
      this.comments = await this.refleshComments()
    },
    async submitReply(reply:Comment) {
      this.isload = true
      await replyPost(reply)
      this.comments = await this.refleshComments()
    }
  }
})
</script>
