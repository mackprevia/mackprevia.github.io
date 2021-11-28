import {createApp} from "vue";
import App from "./App.vue";
import {key, store} from "./stores";
import router from "@/routes";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import i18n from "@/i18n/I18n";
import toastOptions from "@/plugins/toastification";

const app = createApp(App);

app.use(store, key);
app.use(Toast, toastOptions);
app.use(router);
app.use(i18n);

app.mount("#app");
