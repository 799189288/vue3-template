import { Button } from "@arco-design/web-vue";
import { App } from "vue";
const arcoList = [Button];
export function arcoPlugin(app: App<Element>) {
  arcoList.forEach((i) => app.use(i));
}
