<template>
     <footer class="footer">
          <span class="footer-left">Copyright 2022 Avion LTD</span>
          <div class="footer-items">
               <img class="footer-items_link" src="/svg/instagram-footer-icon-link.svg" alt="instagram"/>
               <img class="footer-items_link" src="/svg/facebook-footer-icon-link.svg" alt="facebook"/>
               <img class="footer-items_link" src="/svg/linkedin-footer-icon-link.svg" alt="linkedin"/>
          </div>
     </footer>
</template>

<style lang="scss" scoped>
     .footer {
          max-width: 1440px;
          margin: 0 auto;
          height: 70px;
          padding: 0 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #2A254B;

          &-left {
               color: #FFF;
               font-family: 'Satoshi', sans-serif;
               font-size: 14px;
               font-weight: 300;
          }

          &-items {
               display: flex;
               gap: 25px;
          }
     }
</style>