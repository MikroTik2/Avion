<template>
     <div class="hero">
          <div class="hero-content">
               <div class="hero-content__text">
                    <h1 class="hero-content__text-title">Luxury homeware for people who love timeless design quality</h1>
                    <span class="hero-content__text-description">Shop the new Spring 2022 collection today</span>
               </div>

               <a class="hero-content__btn" href="/collections">View collection</a>
          </div>

          <img class="hero__image" src="/img/hero-mobile.jpg" alt="hero">
     </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
     .hero {
          background-image: url('../../public/img/Hero.png');
          height: 685px;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 80px;

          @media only screen and (max-width: 768px) {
               background: transparent;
               padding: 0;
               align-items: flex-start;
               justify-content: center;
               height: auto;
               display: grid;
          }

          &-content {
               width: 630px;
               height: 445px;
               background: #fff;
               padding: 48px 61px 46px 56px;
               display: flex;
               flex-direction: column;
               justify-content: space-between;

               @media only screen and (max-width: 768px) {
                    padding: 50px 25px;
                    justify-content: inherit;
                    row-gap: 32px;
                    height: auto;
                    width: 100%;
               }

               &__btn {
                    width: 170px;
                    height: 56px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--lightgray);
                    border: none;
                    color: #2A254B;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    font-weight: 300;

                    @media only screen and (max-width: 768px) {
                         width: 100%;
                    }
               }

               &__text {

                    &-title {
                         color: #22202E;
                         font-family: 'Clash Display', sans-serif;
                         font-size: 32px;
                         font-weight: 300;
                         margin-bottom: 20px;

                         @media only screen and (max-width: 768px) {
                              font-size: 24px;
                         }
                    }

                    &-description {
                         color: #5B5676;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 18px;
                         font-weight: 300;

                         @media only screen and (max-width: 768px) {
                              font-size: 16px;
                         }
                    }
                    
               }
          }

          &__image {
               display: none;

               @media only screen and (max-width: 768px) {
                    display: flex;
                    width: 100%;
                    object-fit: contain;
               }
          }
     }
</style>