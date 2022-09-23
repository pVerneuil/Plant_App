import React,{useEffect, useState} from 'react'
import instance from './ApiConfig'


const ApiGet = async () => {
  let resp
     await instance
          .get('feedback/')
          .then(response => {
              resp = response.data;
              // console.log(resp);
          })
          .catch(error => console.log('get error', error));
  return resp
  };
export default ApiGet;