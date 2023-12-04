<template>
     <div class="about container">
          <h2 class="about-title">What makes our brand different</h2>

          <div class="about-elements">
               <div class="about-element" v-for="(element, index) in aboutItems" :key="index">
                    <div class="about-element-content">
                         <img class="about-element-content_svg" :src="element.svg" :alt="element.title">

                         <h3 class="about-element-content_title"> {{ element.title }}</h3>

                         <span class="about-element-content_description">{{ element.description }}</span>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';
     
     const aboutItems = ref([
          { title: "Next day as standard", description: "Order before 3pm and get your order the next day as standard", svg: "/svg/delivery.svg" },
          { title: "Made by true artisans", description: "Handmade crafted goods made with real passion and craftmanship", svg: "/svg/checkmarket.svg" },
          { title: "Unbeatable prices", description: "For our materials and quality you won’t find better prices anywhere", svg: "/svg/wallet.svg" },
          { title: "Recycled packaging", description: "We use 100% recycled to ensure our footprint is more manageable", svg: "/svg/sprout.svg" },
     ])
</script>

<style lang="scss" scoped>
     .about {
          padding: 80px;

          &-title {
               color: #2A254B;
               font-family: 'Clash Display', sans-serif;
               font-size: 24px;
               font-weight: 300;
               text-align: center;
               margin-bottom: 35px;
          }

          &-elements {
               display: grid;
               grid-template-columns: repeat(4, 1fr);
               gap: 20px;
          }

          &-element {

               padding: 48px;
               background: #f9f9f9;

               &-content {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;

                    &_svg {
                         width: 24px;
                         height: 24px;
                    }

                    &_title {
                         font-family: 'Clash Display', sans-serif;
                         font-size: 20px;
                         font-weight: 300;
                         color: #2A254B;
                    }

                    &_description {
                         color: #2A254B;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                    }
               }
          }
     }
</style>