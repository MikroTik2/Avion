<template>
     <div class="product container">
          <div class="product-elements">
               <div class="product-element" v-for="element in products" :key="element._id">
                    <a class="product-element__image-container" :href="`/product/${element._id}`">
                         <img class="product-element__image" :src="element.images[0]" :alt="element.slug">
                    </a>

                    <a :href="`/product/${element._id}`" class="product-element__text">
                         <span class="product-element__text__name">{{ element.title }}</span>
                         <span class="product-element__text__price">£{{ element.price }}</span>
                    </a>
               </div>
          </div>

          <div class="product_collection">
               <a href="/collections" class="product_collection_btn" type="button">View collection</a>
          </div>
     </div>
</template>

<script setup>
     import { ref, onMounted } from 'vue';
     import api from '@/config/api.js';

     const products = ref([]);

     onMounted(async () => {
          products.value = await api.getProduct4Column();
     });

</script>

<style lang="scss" scoped>
     .product {

          padding: 20px 80px;

          @media only screen and (max-width: 1340px) {
               padding:  20px 25px;
          }

          @media only screen and (max-width: 768px) {
               padding:  20px 25px;
          }

          &-elements {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 20px;

               @media only screen and (max-width: 768px) {
                    grid-template-columns: repeat(2, 1fr);
               }

               @media only screen and (max-width: 390px) {
                    grid-template-columns: repeat(1, 1fr);
               }
          }

          &-element {
               display: grid;
               row-gap: 24px;

               &__image-container {
                    overflow: hidden;
               }

               &__image {
                    object-fit: cover;
                    cursor: pointer;
                    width: 100%;
                    height: 100%;
                    transform: scale(1);
                    transition: all .5s;

                    &:hover {
                         transform: scale(1.1);
                    }
               }

               &__text {

                    display: grid;
                    row-gap: 8px;
                    cursor: pointer;

                    &__name {
                         color: #2A254B;
                         font-family: 'Clash Display', sans-serif;
                         font-size: 20px;
                         font-weight: 300;
                    }

                    &__price {
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 18px;
                         font-weight: 300;
                    }
               }
          }

          &_collection {
               display: flex;
               align-items: center;
               justify-content: center;

               &_btn {
                    margin-top: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 170px;
                    height: 56px;
                    background-color: #F9F9F9;
                    color: #2A254B;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    border: none;
                    font-weight: 300;
                    cursor: pointer;

                    @media only screen and (max-width: 768px) {
                         width: 100%;
                    }
               }
          }
     }
</style>