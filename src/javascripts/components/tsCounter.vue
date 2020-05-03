<template>
  <div>
    <button @click="decrement(1)">
      -
    </button>
    {{ count }}
    <button @click="increment(1)">
      +
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

interface Data {
  count: number;
}

export default Vue.extend({
  props: {
    initCount: {
       type: Number,
       default: 0
    }
  },
  data(): Data {
    return {
      count: this.initCount
    }
  },
  methods: {
    decrement(num: number) {
      this.count -= num;
    },
    increment(num: number) {
      this.count += num
    }
  }
})
</script>
