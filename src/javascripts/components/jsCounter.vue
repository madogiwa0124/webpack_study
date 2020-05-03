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
<script lang="js">
module.exports = {
  props: {
    initCount: Number
  },
  data: function () {
    return {
      count: this.initCount | 0
    }
  },
  methods: {
    decrement(num) {
      this.count -= num;
    },
    increment(num) {
      this.count += num
    }
  }
}
</script>
