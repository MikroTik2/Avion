import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import Product from '@/views/Product.vue';

const router = createRouter({
     history: createWebHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },
          { path: "/product/:productId", name: "Product", component: Product },
     ],
});

export default router;