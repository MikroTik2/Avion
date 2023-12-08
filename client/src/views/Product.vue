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
          max-width: 1440px;
          padding: 0 80px;
          margin: 65px auto 0;

          @media only screen and (max-width: 1340px) {
               padding: 0 25px;
          }

          @media only screen and (max-width: 1340px) {
               font-size: 24px;
          }
     }
</style>