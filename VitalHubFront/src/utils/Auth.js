import AsyncStorage from "@react-native-async-storage/async-storage"

import { jwtDecode } from "jwt-decode"

import {decode, encode} from 'base-64'

   if ( !global.atob){
      global.atob = decode

   }

   if(!global.btoa){
       global.btoa = encode
   }


   // Funcao de decodificar o token
   export const userDecodeToken = async () => {

       // Capturando o token
       const token = await AsyncStorage.getItem('token');

       if(token == null){

        return null;
       }

       // Descriptogranfando o token 
       const decode = jwtDecode(token)


       return{
        role : decode.role,
        name : decode.name
       
       }


   }