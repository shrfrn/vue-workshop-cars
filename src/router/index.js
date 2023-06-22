import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import CarIndex from '../pages/CarIndex.vue'
import CarDetails from '../pages/CarDetails.vue'
import CarEdit from '../pages/CarEdit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/car',
            name: 'cars',
            component: CarIndex,
        },
        {
            path: '/car/:id',
            name: 'details',
            component: CarDetails,
        },
        {
            path: '/car/edit/:id?',
            name: 'edit',
            component: CarEdit,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/AboutView.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
