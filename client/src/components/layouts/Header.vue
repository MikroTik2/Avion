<template>
     <div class="header container">
          <div class="header-top">
               <div class="header-top-left">
                    <img src="/svg/search.svg" alt="search">
               </div>

               <router-link class="header-top-center" to="/">Avion</router-link>

               <div class="header-top-right">
                    <img class="header-top-right__cart" src="/svg/cart.svg" alt="cart">
                    <img class="header-top-right__profile" src="/svg/profile.svg" alt="profile">
               </div>
          </div>

          <div class="header-bottom">
               <router-link class="header-bottom__link" :to="element.path" v-for="(element, index) in menuItems" :key="index"> {{ element.name }} </router-link>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';

     const menuItems = ref([
          { name: "Plant pots", path: "/plant-pots" },
          { name: "Ceramics", path: "/ceramics" },
          { name: "Tables", path: "/tables" },
          { name: "Chairs", path: "/chairs" },
          { name: "Crockery", path: "/crockery" },
          { name: "Tableware", path: "/tableware" },
          { name: "Cutlery", path: "/cutlery" },
     ]);
</script>

<style lang="scss" scoped>
     .header {

          padding: 0 25px;

          &-top {

               height: 70px;
               display: grid;
               align-items: center;
               grid-template-columns: repeat(3, 1fr);
               border-bottom: 1px solid rgba(0, 0, 0, 0.10);

               &-center {
                    text-align: center;
                    color: #22202E;
                    font-family: 'Clash Display', sans-serif;
                    font-size: 24px;
                    font-weight: 300;
               }

               &-right {
                    display: flex;
                    justify-content: flex-end;

                    &__cart {
                         margin-right: 16px;
                         cursor: pointer;
                    }

                    &__profile {
                         cursor: pointer;
                    }
               }

          }

          &-bottom {
                
               height: 60px;
               display: flex;
               align-items: center;
               justify-content: center;
               gap: 45px;

               &__link {
                    color: #726E8D;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    font-weight: 300;
               }
          }
     }
</style>