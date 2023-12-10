import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/Index.vue';
import Product from '@/views/Product.vue';
import Collections from '@/views/Collections.vue';

const router = createRouter({
     history: createWebHistory(),

     routes: [
          { path: "/", name: "Index", component: Index },
          { path: "/product/:productId", name: "Product", component: Product },
          { path: "/collections", name: "Collections", component: Collections },
     ],
});

export default router;