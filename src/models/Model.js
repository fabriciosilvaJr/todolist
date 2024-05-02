import { Model as BaseModel } from "vue-api-query";
import axios from "axios";
import { API_BASE_URL } from "@/config";


const token = localStorage.getItem("token");

axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default class Model extends BaseModel {
  baseURL() {
    return API_BASE_URL;
  }
  request(config) {
    return this.$http.request(config);
  }
}
