import {RouteRecordRaw, createRouter, createWebHistory} from "vue-router";
import TheLanding from "@/views/TheLanding.vue";
import TheExtractor from "@/views/TheExtractor.vue";
import The404 from "@/views/The404.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: TheLanding
    },
    {
        path: '/extractor',
        name: "Extractor",
        component: TheExtractor
    },
    {
        path: '/404',
        name: 'NotFound',
        component: The404,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
});