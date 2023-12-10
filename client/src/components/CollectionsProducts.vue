<template>
     <section id="products" class="products">

          <div class="products-filter" :class="{ 'active-fil': isVisibleFilter }">
               <div class="products-filter-content">
                    <div class="products-filter-content__block">
                         <span class="products-filter-content__block-title">Product type</span>

                         <div class="products-filter-content__block-checkbox">
                              <div v-for="type in ['Furniture', 'Homeware', 'Sofas', 'Accessories', 'Light fittings']" :key="type" class="products-filter-content__block-checkbox__item">
                                   <input v-model="selectedProductTypes" class="products-filter-content__block-checkbox__item-check" type="checkbox" :value="type">
                                   <span>{{ type }}</span>
                              </div>
                         </div>
                    </div>

                    <div class="products-filter-content__block">
                         <span class="products-filter-content__block-title">Price</span>

                         <div class="products-filter-content__block-checkbox">
                              <div v-for="priceRange in ['0 - 100', '101 - 250', '250 - 10000']" :key="priceRange" class="products-filter-content__block-checkbox__item">
                                   <input v-model="selectedPrices" class="products-filter-content__block-checkbox__item-check" type="checkbox" :value="priceRange">
                                   <span>{{ priceRange }}</span>
                              </div>
                         </div>
                    </div>

                    <div class="products-filter-content__block">
                         <span class="products-filter-content__block-title">Designer</span>

                         <div class="products-filter-content__block-checkbox">
                              <div v-for="designer in ['Robert Smith', 'Liam Gallagher', 'Biggie Smalls', 'Thom Yorke']" :key="designer" class="products-filter-content__block-checkbox__item">
                                   <input v-model="selectedDesigners" class="products-filter-content__block-checkbox__item-check" type="checkbox" :value="designer">
                                   <span>{{ designer }}</span>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <div :class="{ 'show': isVisibleFilter }" class="sidebar-overlay" @click="toggleFilterClose"></div>

          <div class="products-filter-mobile">
               <button class="products-filter-mobile_btn" @click="toggleFilter">Filter</button>
               <button class="products-filter-mobile_btn" @click="toggleFilter">Sorting</button>
          </div>

          <div class="products-message" v-if="filteredProducts.length === 0">
               <span>product is temporarily out of stock</span>
          </div>

          <div class="products-elements" v-else>
               <div class="products-element" v-for="element in filteredProducts" :key="element._id">
                    <a class="products-element__image-container" :href="`/product/${element._id}`">
                         <img class="products-element__image" :src="element.images[0]" :alt="element.slug">
                    </a>

                    <a :href="`/product/${element._id}`" class="products-element__text">
                         <span class="products-element__text__name">{{ element.title }}</span>
                         <span class="products-element__text__price">£{{ element.price }}</span>
                    </a>
               </div>
          </div>
     </section>
</template>

<script setup> 
     import { ref, watchEffect, onMounted } from 'vue'; 
     import api from '@/config/api';

     const products = ref([]);
     const filteredProducts = ref([]);

     const selectedProductTypes = ref([]);
     const selectedPrices = ref([]);
     const selectedDesigners = ref([]);

     const isVisibleFilter = ref(false);

     const filterProducts = () => {
          return products.value.filter(product => {
               const typeMatch = selectedProductTypes.value.length === 0 || selectedProductTypes.value.includes(product.productType);
               const priceMatch = selectedPrices.value.length === 0 || selectedPrices.value.some(priceRange => {
                    const [min, max] = priceRange.split(' - ').map(Number);
                    return product.price >= min && product.price <= max;
               });
               const designerMatch = selectedDesigners.value.length === 0 || selectedDesigners.value.includes(product.author);

               return typeMatch && priceMatch  && designerMatch;
          });
     };

     const toggleFilter = () => {
          isVisibleFilter.value = !isVisibleFilter.value;

          if (isVisibleMenu.value) {
               document.body.style.overflow = 'hidden';
          } else {
               document.body.style.overflow = '';
          };
     };

     const toggleFilterClose  = () => {
          isVisibleFilter.value = !isVisibleFilter.value
          document.body.style.overflow = '';
     };

     onMounted(async () => {
          products.value = await api.getAllProducts();
          filteredProducts.value = products.value;
     });

     watchEffect(() => {
          filteredProducts.value = filterProducts();
     })
</script>

<style lang="scss" scoped>
     .products {
          padding: 0 80px 0 0;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;

          @media only screen and (max-width: 1340px) {
               padding: 0 25px 0 0;
          }

          @media only screen and (max-width: 768px) {
               padding: 25px;
               display: block;
          }

          &-filter {
               width: 385px;
               padding: 48px 80px;

               @media only screen and (max-width: 768px) {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: -385px;
                    z-index: 5;
                    background: #fff;
                    z-index: 20;
               }

               @media only screen and (max-width: 450px) {
                    width: calc(100% - 50px);
                    padding: 25px;
               }

               &-content {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 48px;

                    &__block {
                         display: flex;
                         flex-direction: column;
                         align-items: flex-start;
                         gap: 20px;

                         &-title {
                              color:#2A254B;
                              font-family: 'Clash Display', sans-serif;
                              font-size: 16px;
                              font-weight: 300;
                         }

                         &-checkbox {
                              display: grid;
                              gap: 12px;

                              &__item {
                                   display: flex;
                                   align-items: center;
                                   gap: 12px;

                                   &-check {
                                        width: 16px;
                                        height: 16px;
                                        
                                        &:checked {
                                             background-color: #000;
                                        }
                                   }

                                   span {
                                        color:#2A254B;
                                        font-family: 'Satoshi', sans-serif;
                                        font-size: 16px;
                                        font-weight: 300;
                                   }
                              }


                         }
                    }
               }
          }

          &-filter-mobile {

               display: none;

               @media only screen and (max-width: 768px) {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    padding-bottom: 48px;

                    &_btn {
                         width: 100%;
                         height: 56px;
                         background:#F9F9F9;
                         border: none;
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                         cursor: pointer;
                    }
               }
          }

          &-message {
               color: #000;
               padding: 35px 20px;
               
               span {
                    font-size: 24px;
                    text-align: center;
                    font-weight: 300;
                    font-family: "Clash Display", sans-serif;
               }
          }
          
          &-elements {
               display: grid;
               grid-template-columns: repeat(3, 1fr);
               column-gap: 20px;
               row-gap: 40px;
               padding: 35px 20px;

               @media only screen and (max-width: 1124px) {
                    grid-template-columns: repeat(2, 1fr);
               }

               @media only screen and (max-width: 768px) {
                    padding: 0;
                    column-gap: 16px;
                    row-gap: 20px;
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

                    display: flex;
                    flex-direction: column;
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
     }

     .active-fil {
          left: 0;
     }
</style>