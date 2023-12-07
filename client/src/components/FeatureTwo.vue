<template>
     <div class="hero">
          <div class="hero-left">

               <div class="hero-left-content">
                    <h2 class="hero-left-content__title">It started with a small idea</h2>
                    <span class="hero-left-content__description">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</span>
               </div>

               <button class="hero-left_btn" type="button">View collection</button>

          </div>
          <div class="hero-right">
               <img src="/img/Hero-chair.png" alt="chair">
          </div>
     </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
     .hero {

          padding: 60px 80px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;

          @media only screen and (max-width: 1340px) {
               padding:  32px 25px;
          }

          @media only screen and (max-width: 1124px) {
               grid-template-columns: repeat(1, 1fr);
          }

          @media only screen and (max-width: 768px) {
               padding:  32px 25px;
          }

          &-left {

               background: #2A254B;
               padding: 64px;
               display: flex;
               flex-direction: column;
               justify-content: space-between;

               @media only screen and (max-width: 1124px) {
                    padding: 36px 32px 30px 32px;
                    gap: 56px;
               }

               &-content {

                    &__title {
                         color: #FFF;
                         font-family: 'Clash Display', sans-serif;
                         font-size: 32px;
                         font-weight: 300;
                         margin-bottom: 12px;

                         @media only screen and (max-width: 768px) {
                              font-size: 24px;
                         }
                    }

                    &__description {
                         color: #FFF;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 18px;
                         font-weight: 300;

                         @media only screen and (max-width: 768px) {
                              font-size: 16px;
                         }
                    }
               }

               &_btn {
                    width: 170px;
                    height: 56px;
                    border: none;
                    background: rgba(249, 249, 249, 0.15);
                    color: #fff;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    font-weight: 300;
                    cursor: pointer;

                    @media only screen and (max-width: 768px) {
                         width: 100%;
                    }
               }
               
          }

          &-right {

               img {

                    width: 100%;
                    height: 100%;
               }

          }

     }
</style>