import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {TheLanding, TheExtractor, The404, TheContact, TheAbout} from "@/views";
import {nextTick} from 'vue';
import i18n from "@/i18n/I18n";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: TheLanding,
        meta: {
            title: "home"
        }
    },
    {
        path: '/extractor',
        name: "Extractor",
        component: TheExtractor,
        meta: {
            title: "extractor"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: TheContact,
        meta: {
            title: "contact"
        }
    },
    {
        path: '/about',
        name: 'About',
        component: TheAbout,
        meta: {
            title: "about"
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
        let title = "| " + i18n.global.t("titles." + to.meta.title)
        if (!to.meta.title) {
            title = " "
        }
        document.title = "MackPrevIA " + title
    }).then(() => {
    })
});

export default router;