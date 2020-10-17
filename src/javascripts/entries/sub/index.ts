import Vue from "vue";
import { Hey } from "@js/components/tsSub";
// NOTE: webpack.config.jsでresolve.extensionsで.vueを入れているが拡張子なしだと
// 何故かmoduleが見つからなくなる
import TsCounter from "@js/components/tsCounter.vue";
import JsCounter from "@js/components/jsCounter.vue";
import "@css/home.scss";
import SampleJson from "@js/samples/sample.json";

new Vue({
  el: "#vue-root",
  components: { TsCounter, JsCounter },
});

console.log(SampleJson);
console.log("sub index!");
const hey = new Hey();
hey.call();
