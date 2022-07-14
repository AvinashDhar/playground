import axios from "axios";
// export const requestGetProduct = (startCount) => {
//     if (startCount === 0) startCount=10;
//     return axios.request({
//         method:'get',
//         url:`https://fakestoreapi.com/products?limit=${startCount}`
//     })
// } 
export const requestGetProduct = () => {
    return axios.request({
        method:'get',
        url:`https://fakestoreapi.com/products`
    })
} 