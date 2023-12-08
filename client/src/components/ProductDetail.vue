<template>
     <div class="product" v-if="product">
          <div class="product-left">
               <img class="product-left__image" :src="product.images[0]" :alt="product.slug">
          </div>
          <div class="product-right">
               <div>
                    <div class="product-right-top">
                         <h2 class="product-right-top__title"> {{ product.title }} </h2>
                         <span class="product-right-top__price"> £{{ product.price }} </span>
                    </div>

                    <div>
                         <h3 class="product-right-description__title">Product description</h3>
                         <span class="product-right-description__description">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</span>
                    </div>

                    <div>
                         <h3 class="product-right-description__title">Quantity</h3>
                         
                         <div class="product-right-quantity">
                              <button class="product-right-quantity-symbol" @click="changeQuantity('minus')">-</button>
                              <span class="product-right-quantity-count"> {{ quantity }} </span>
                              <button class="product-right-quantity-symbol" @click="changeQuantity('plus')">+</button>
                         </div>
                    </div>
               </div>

               <div>
                    <div class="product-right-ctas">
                         <button class="product-right-ctas__cart">Add to cart</button>
                         <button class="product-right-ctas__wishlist">Save to favorites</button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
     import { useRoute } from 'vue-router';
     import { ref, onMounted } from 'vue';
     import api from '@/config/api.js';

     const route = useRoute();

     const product = ref(null);
     const productId = ref(null);

     const quantity = ref(0);

     const changeQuantity = (type) => {
          if (type === 'minus') {
               quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
          };

          if (type === 'plus') {
               quantity.value === 15 ? (quantity.value = 15) : quantity.value++;
          };
     };

     onMounted(async () => {
          productId.value = route.params.productId;
          product.value = await api.getProduct(productId.value);
     });

</script> 

<style lang="scss" scoped>
     .product {
          max-width: 1440px;
          margin: 0 auto;
          background: #F9F9F9;
          display: grid;
          gap: 65px;
          grid-template-columns: repeat(2, 1fr);

          @media only screen and (max-width: 1024px) {
               grid-template-columns: repeat(1, 1fr);
               gap: 0;
          }

          &-left {

               width: 100%;
               height: 661px;

               @media only screen and (max-width: 768px) {
                    height: 380px;
               }

               &__image {

                    width: 100%;
                    height: 100%;
                    object-fit: cover;
               }
          }

          &-right {
               padding: 50px 80px 50px 0;
               display: flex;
               flex-direction: column;
               justify-content: space-between;

               @media only screen and (max-width: 1340px) {
                    padding: 25px 25px 25px 0;
               }

               @media only screen and (max-width: 1024px) {
                    padding: 25px;
               }

               &-top {
                    margin-top: 30px;
                    padding-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    border-bottom: 1px solid #EBE8F4;

                    @media only screen and (max-width: 768px) {
                         margin-top: 0;
                         padding-bottom: 12px;
                    }
                                   
                    &__title {
                         color: #2A254B;
                         font-family: 'Clash Display', sans-serif;
                         font-size: 36px;
                         font-weight: 300;

                         @media only  screen and (max-width: 768px) {
                              font-size: 24px;
                         }
                    }

                    &__price {
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 24px;
                         font-weight: 300;

                         @media only  screen and (max-width: 768px) {
                              font-size: 20px;
                         }
                    }
               }

               &-description {
                    display: block;

                    &__title {
                         color: #2A254B;
                         font-family: 'Clash Display', sans-serif;
                         font-size: 16px;
                         font-weight: 300; 
                         margin-top: 24px;
                         margin-bottom: 14px;
                    }

                    &__description {
                         color:#2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                    }
               }

               &-quantity {
                    width: 122px;
                    height: 46px;
                    background: #fff;
                    display: flex;
                    margin-top: 24px;

                    &-symbol {
                         width: 100%;
                         height: 100%;
                         border: none;
                         background: transparent;
                         color: #EBE8F4;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                         cursor: pointer;
                    }

                    &-count {
                         display: flex;
                         align-items: center;
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                    }

               }

               &-ctas {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 30px;
                    margin-top: 24px;

                    @media only screen and (max-width: 768px) {
                         display: grid;

                    }

                    &__cart { 
                         width: 143px;
                         height: 56px;
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         background-color: #2A254B;
                         color: #FFF;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                         border: none;
                         cursor: pointer;

                         @media only screen and (max-width: 768px) {
                              width: 100%;
                         }
                    }

                    &__wishlist {
                         width: 173px;
                         height: 56px;
                         background: #fff;
                         border: none;
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                         cursor: pointer;

                         @media only screen and (max-width: 768px) {
                              width: 100%;
                         }
                    }
               }
          }
     }
</style>