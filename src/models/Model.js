import {Model as BaseModel} from "vue-api-query";

export default class Model extends BaseModel{
    baseURL(){
        return "http://localhost:8000/api";
    }
    request(config){
        return this.$http.request(config)
    }
}