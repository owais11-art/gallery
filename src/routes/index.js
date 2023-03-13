import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/gallery/',
        name: 'Photos',
        component: () => import('../views/Photos.vue'),
        children: [
            {
                path: '/photos/:id',
                name: 'Single-Photo',
                component: () => import('../views/SinglePhoto.vue')
            }
        ]
    },
    {
        path: '/gallery/curated',
        name: 'Curated',
        component: () => import('../views/Curated.vue'),
        children: [
            {
                path: ':id',
                name: 'Single-Curated',
                component: () => import('../views/SingleCurated.vue')
            }
        ]
    },
    {
        path: '/gallery/videos',
        name: 'Videos',
        component: () => import('../views/Videos.vue'),
        children: [
            {
                path: ':id',
                name: 'Single-Video',
                component: () => import('../views/SingleVideo.vue')
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})