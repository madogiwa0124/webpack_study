import Vue from "vue";
import { hello, asyncHello } from "../components/sub.js";
import "../../styles/index.scss";
import TsCounter from "../components/tsCounter.vue";
import JsCounter from "../components/jsCounter.vue";
import SampleJson from "../samples/sample.json";

new Vue({
  el: "#vue-root",
  components: { TsCounter, JsCounter },
});

console.log(SampleJson);
hello();
asyncHello();
