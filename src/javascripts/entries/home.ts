import Vue from "vue";
import { Hey } from "../components/tsSub";
// NOTE: webpack.config.jsでresolve.extensionsで.vueを入れているが拡張子なしだと
// 何故かmoduleが見つからなくなる
import TsCounter from "../components/tsCounter.vue";
import JsCounter from "../components/jsCounter.vue";
import "../../styles/home.scss";

new Vue({
  el: "#vue-root",
  components: { TsCounter, JsCounter },
});

console.log("home!");
const hey = new Hey();
hey.call();
