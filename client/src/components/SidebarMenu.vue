<template>
     <div class="sidebar" :class="{ 'active': isVisibleMenu }">
          <div class="sidebar-top">
               <a class="sidebar-top__logo" href="/">Avion</a>
          </div>

          <div class="sidebar-navigation">
               <a class="sidebar-navigation__link" v-for="(element, index) in menuItems" :href="element.path" :key="index"> {{ element.name }} </a>
          </div>
     </div>
</template>

<script setup>
     import { ref } from 'vue';

     const props = defineProps({
          isVisibleMenu: Boolean,
     });

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
     .sidebar {
          width: 350px;
          position: fixed;
          top: 0;
          bottom: 0;
          left: -350px;
          background: #fff;
          border-right: 1px solid rgba(0, 0, 0, 0.10);
          transition: all .3s;
          z-index: 10;

          @media only screen and (max-width: 400px) {
               width: calc(100% - 50px);
          }

          &-top {
               height: 70px;
               border-bottom: 1px solid rgba(0, 0, 0, 0.10);
               display: flex;
               align-items: center;
               padding: 0 25px;

               &__logo {
                    color: #22202E;
                    font-family: 'Clash Display', sans-serif;
                    font-size: 24px;
                    font-weight: 300;
               }
          }

          &-navigation {
               display: grid;

               &__link {
                    height: 61px;
                    display: flex;
                    align-items: center;
                    padding: 0 25px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
                    color: #726E8D;
                    font-family: "Satoshi", sans-serif;
                    font-size: 16px;
                    font-weight: 300;

                    &:hover {
                         background: #f9f9f9;
                    }
               }
          }
     }

     .active {
          left: 0;
     }
</style>