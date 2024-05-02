import { Model as BaseModel } from "vue-api-query";
import axios from "axios";

const token = localStorage.getItem("token");

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default class Model extends BaseModel {
    baseURL() {
        return "http://localhost:8000/api";
    }
    request(config) {
        return this.$http.request(config);
    }
}
