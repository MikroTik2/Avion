import axios from 'axios';
import config from './config';

export const HTTP = axios.create({
     baseURL: config.API,
});

export default {

     async getAllProducts() {
          try {

               const response = await HTTP.get("/product/all");
               return response.data;

          } catch (error) {
               throw error;
          };
     },

     async getProduct(productId) {
          try {

               const response = await HTTP.get(`/product/${productId}`);
               return response.data

          } catch (error) {
               throw error;
          };
     },

     async getProduct4Column() {
          try {

               const response = await HTTP.get("/product/all?page=1&limit=4");
               return response.data;

          } catch (error) {
               throw error;
          };
     },
};