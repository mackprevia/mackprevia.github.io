import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from "./stores";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const app = createApp(App);

app.use(store, key);
app.use(PrimeVue);

app.mount("#app");
