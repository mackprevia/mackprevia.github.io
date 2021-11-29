import {PluginOptions, POSITION} from "vue-toastification";
import {ToastOptionsAndRequiredContent} from "vue-toastification/dist/types/types";

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

export default toastOptions;