<template>
  <div class="comment" style="border: solid; margin: 5px;">
    <p class="attribute">{{comment.id}}</p>
    <p class="attribute">{{comment.body}}</p>
    <div class="reply-form" style="text-align: right;">
      <input type="text" v-model="replyBody" />
      <button @click="submit">submit</button>
    </div>
    <div class="reply" v-for="reply in comment.repries" :key="reply.id" style="border: solid; margin: 5px;">
      <p class="attribute">{{reply.id}}</p>
      <p class="attribute">{{reply.body}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { Comment } from '../types/types'
interface DateType {
  replyBody: string
}

export default Vue.extend({
  props: {
    comment: Object as PropType<Comment>
  },
  data(): DateType {
    return {
      replyBody: "",
    }
  },
  methods: {
    submit() {
      this.$emit('reply-submit', {
        id: null,
        parent_id: this.comment.id,
        body: this.replyBody,
        repries: []
      })
      this.replyBody = ""
    }
  }
})
</script>
