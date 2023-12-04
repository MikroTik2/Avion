<template>
     <div class="subscribe">
          <div class="subscribe-content">
               <h2 class="subscribe-content__title">Join the club and get the benefits</h2>
               <span class="subscribe-content__description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>

               <div class="subscribe-content-elements">
                    <div class="subscribe-content-element">
                         <img src="/svg/checkout.svg" alt="checkout">
                         <span>Exclusive offers</span>
                    </div>
                    <div class="subscribe-content-element">
                         <img src="/svg/checkout.svg" alt="checkout">
                         <span>Free events</span>
                    </div>
                    <div class="subscribe-content-element">
                         <img src="/svg/checkout.svg" alt="checkout">
                         <span>Large discounts</span>
                    </div>
               </div>

               <form @submit.prevent="" class="subscribe-content-form">
                    <input class="subscribe-content-form__input" placeholder="your@email.com" type="text">
                    <button class="subscribe-content-form__btn" type="submit">Sign Up</button>
               </form>
          </div>
     </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
     .subscribe {
          background-image: url('/img/Subscribe.png');
          height: 445px;
          display: flex;
          align-items: center;
          color: #FFF;

          &-content {
               max-width: 500px;
               margin: 0 auto;
               text-align: center;

               &__title {
                    color: #FFF;
                    font-family: 'Clash Display', sans-serif;
                    font-size: 32px;
                    font-weight: 300;
                    margin-bottom: 12px;
               }

               &__description {
                    color: #FFF;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 18px;
                    font-weight: 300;
               }

               &-elements {
                    display: flex;
                    justify-content: center;
                    margin-top: 30px;
                    gap: 35px;
               }

               &-element {
                    display: flex;
                    align-items: center;
                    gap: 8px;
               }

               &-form {

                    display: flex;
                    justify-content: center;
                    margin-top: 40px;

                    &__btn {
                         display: flex;
                         align-items: center;
                         justify-content: center;
                         background: #2A254B;
                         border: none;
                         width: 118px;
                         height: 56px;
                         color: #FFF;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         font-weight: 300;
                         cursor: pointer;
                    }

                    &__input {
                         outline: none;
                         border: none;
                         padding: 0 16px;
                         width: 355px;
                         font-family: 'Satoshi', sans-serif;
                         font-size: 16px;
                         background: #F9F9F9;
                         color: #2A254B;
                    }
               }
          }
     }
</style>