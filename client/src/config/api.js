import axios from 'axios';
import config from './config';

export const HTTP = axios.create({
     baseURL: config.API,
});

export default {

     async getAllProducts() {
          try {

               const response = await HTTP.get("/product/all");
               console.log(response.data);
               return response.data;

          } catch (error) {
               throw error;
          };
     },
};