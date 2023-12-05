<template>
     <ProductDetail />

     <h2 class="title">You might also love these</h2>
     <ProductsColumn />
     <Feature />
</template>

<script setup>
     import ProductDetail from '@/components/ProductDetail.vue';
     import ProductsColumn from '@/components/ProductsColumn.vue';
     import Feature from '@/components/Feature.vue';
</script>

<style lang="scss" scoped>
     .title {
          color: #2A254B;
          font-family: 'Clash Display', sans-serif;
          font-size: 32px;
          font-weight: 300;
          margin: 65px 80px 0;
     }
</style>