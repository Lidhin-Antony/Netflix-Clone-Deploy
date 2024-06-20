// import React from 'react'
import axios from 'axios'
import { baseURL } from './Urls';


const Axios = axios.create({
  baseURL: baseURL
});
export default Axios
