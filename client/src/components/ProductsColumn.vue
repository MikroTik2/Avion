<template>
     <div class="product">
          <div class="product-elements">
               <div class="product-element" v-for="(element, index) in productItems" :key="index">
                    <img class="product-element__image" :src="element.img" :alt="element.title">

                    <div class="product-element__text">
                         <span class="product-element__text__name">{{ element.title }}</span>
                         <span class="product-element__text__price">£{{ element.price }}</span>
                    </div>
               </div>
          </div>

          <div class="product_collection">
               <button class="product_collection_btn" type="button">View collection</button>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';

     const productItems = ref([
          { img: "/img/product-1.png", title: "The Dandy chair", price: 250 },
          { img: "/img/product-2.png", title: "Rustic Vase Set", price: 155 },
          { img: "/img/product-3.png", title: "The Silky Vase", price: 125 },
          { img: "/img/product-4.png", title: "The Lucy Lamp", price: 399 },
     ]);
</script>

<style lang="scss" scoped>
     .product {

          padding: 20px 80px;

          &-elements {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 20px;
          }

          &-element {
               display: grid;
               row-gap: 24px;

               &__image {
                    object-fit: cover;
                    cursor: pointer;
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
               }
          }
     }
</style>