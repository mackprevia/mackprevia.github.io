import {RouteRecordRaw, createRouter, createWebHistory} from "vue-router";
import TheLanding from "@/views/TheLanding.vue";
import TheExtractor from "@/views/TheExtractor.vue";
import The404 from "@/views/The404.vue";
import Contact from "@/views/Contact.vue";
import {nextTick} from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: TheLanding,
        meta: {
            title: "Inicio"
        }
    },
    {
        path: '/extractor',
        name: "Extractor",
        component: TheExtractor,
        meta: {
            title: "Extrator"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: "Contato"
        }
    },
    {
        path: '/404',
        name: 'NotFound',
        component: The404,
        meta: {
            title: "404"
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to, _) => {
    nextTick(() => {
        let title = "| " + to.meta.title
        if (!to.meta.title) {
            title = " "
        }
        document.title = "MackPrevIA " + title
    }).then(() => {})
});

export default router;