import { createApp } from "vue";
import { Hey } from "@js/components/tsSub";
// NOTE: webpack.config.jsでresolve.extensionsで.vueを入れているが拡張子なしだと
// 何故かmoduleが見つからなくなる
import TsCounter from "@js/components/tsCounter.vue";
import JsCounter from "@js/components/jsCounter.vue";
import "@css/home.scss";
import SampleJson from "@js/samples/sample.json";

const app = createApp({
  components: { TsCounter, JsCounter },
});
app.mount("#vue-root");

console.log(SampleJson);
console.log("sub index!");
const hey = new Hey();
hey.call();
