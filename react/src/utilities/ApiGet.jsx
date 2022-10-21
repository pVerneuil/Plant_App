import React, { useEffect, useState } from "react";
import instance from "./ApiConfig";

const ApiGet = async (endpoint) => {
  try {
    const { data: resp } = await instance.get(endpoint);
    return resp;
  } catch (error) {
    console.error(error);
  }
};
export default ApiGet;
