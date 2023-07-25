import axios from 'axios';
import {BASE_URL} from "./constants"

export const getProducts = async()=>{
    try{
        return await axios.get(`${BASE_URL}/products`);
    } catch(err){
        console.log(err);
    }
}