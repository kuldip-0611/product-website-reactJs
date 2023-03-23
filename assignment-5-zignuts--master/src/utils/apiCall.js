import axios from "axios"
export const apiCall = (id) => {
    return axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => response.data)
        .catch((error) => console.log(error));
}