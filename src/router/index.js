import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Scene from "../components/Scene.vue"

const routes =[
    {
        path: "/",
        component: Home,
    },
    {
        path: "/scene",
        component: Scene
    }
]

const router =  createRouter(
    {
        history: createWebHashHistory(),
        routes,
    }
)

export default router;