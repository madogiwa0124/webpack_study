<template>
  <div class="more-read">
    <ul>
      <li v-for="record in initialReacords" :key="record.id">
        {{ record.body }}
      </li>
      <div v-if="showMore" class="more-area">
        <li v-for="record in moreRecords" :key="record.id">
          {{ record.body }}
        </li>
      </div>
      <button v-else @click="more">more</button>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
type Record = { id: number; body: string };
type Records = Record[];

interface Data {
  records: Records;
  showMore: boolean;
}

const INITIAL_RECORDS_COUNT = 3;

export default Vue.extend({
  props: {},
  data(): Data {
    return {
      records: [
        { id: 1, body: "title 1" },
        { id: 2, body: "title 2" },
        { id: 3, body: "title 3" },
        { id: 4, body: "title 4" },
        { id: 5, body: "title 5" },
        { id: 6, body: "title 6" },
        { id: 7, body: "title 7" },
        { id: 8, body: "title 8" },
        { id: 9, body: "title 9" },
      ],
      showMore: false,
    };
  },
  computed: {
    initialReacords(): Records {
      return this.records.slice().splice(0, INITIAL_RECORDS_COUNT);
    },
    moreRecords(): Records {
      return this.records.slice().splice(INITIAL_RECORDS_COUNT, this.records.length);
    },
  },
  methods: {
    more() {
      this.showMore = true;
    },
  },
});
</script>
<style lang="scss" scoped></style>
