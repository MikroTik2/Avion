<template>
     <div class="header">
          <h2 class="header-title">All products</h2>
     </div>
</template>

<style lang="scss" scoped>
     .header {
          background-image: url("/img/page-header.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          height: 210px;
          padding:  35px 80px;
          display: flex;
          align-items: flex-end;
          max-width: 1440px;
          margin: 0 auto;
          object-fit: cover;

          @media only screen and (max-width: 768px) {
               height: 146px;
               justify-content: center;
          }

          &-title {
               color:#FFF;
               font-family: 'Clash Display', sans-serif;
               font-size: 36px;
               font-weight: 300;
          }
     }
</style>