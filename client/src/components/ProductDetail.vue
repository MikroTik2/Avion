<template>
     <div class="product" v-if="product">
          {{ product }}
     </div>
</template>

<script setup>
     import { useRoute } from 'vue-router';
     import { ref, onMounted } from 'vue';
     import api from '@/config/api.js';

     const route = useRoute();

     const product = ref(null);
     const productId = ref(null);

     onMounted(async () => {
          productId.value = route.params.productId;
          product.value = await api.getProduct(productId.value);
     });

</script> 

<style lang="scss" scoped>

</style>