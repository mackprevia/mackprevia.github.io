import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./stores";
import router from "@/routes";

const app = createApp(App);

app.use(store, key);

app.use(router);

app.mount("#app");
