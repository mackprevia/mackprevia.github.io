import {createApp} from "vue";
import App from "./App.vue";
import {key, store} from "./stores";
import router from "@/routes";
import Toast, {PluginOptions, POSITION,} from "vue-toastification";
import "vue-toastification/dist/index.css";
import {ToastOptionsAndRequiredContent} from "vue-toastification/dist/types/types";

const app = createApp(App);

app.use(store, key);

const toastOptions: PluginOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true,
    filterBeforeCreate: (toast: ToastOptionsAndRequiredContent, toasts: ToastOptionsAndRequiredContent[]) => {
        if (toasts.filter(
            t => t.type === toast.type
        ).length !== 0) {
            return false;
        }
        return toast;
    },
    position: POSITION.BOTTOM_CENTER,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: true,
    rtl: false
}

app.use(Toast, toastOptions);
app.use(router);

app.mount("#app");
