import { createApp } from "vue";
import { hello, asyncHello } from "@js/components/sub.js";
import "@css/index.scss";
import TsCounter from "@js/components/tsCounter.vue";
import JsCounter from "@js/components/jsCounter.vue";
import SampleJson from "@js/samples/sample.json";

const app = createApp({
  components: { TsCounter, JsCounter },
});
app.mount("#vue-root");

console.log(SampleJson);
hello();
asyncHello();
