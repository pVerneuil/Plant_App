import React, { useEffect, useState } from "react";
import instance from "./ApiConfig";
import axios from "axios";


const ApiPost = async (endpoint, dataToPost) => {
    try {
        const { data: resp } = await instance.post(endpoint, dataToPost);
        return resp;
      } catch (error) {
        console.error(error);
      }
};
export default ApiPost;
