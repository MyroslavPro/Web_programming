import axios from "axios";


export const getAllItems  = async () => {
    let promiseResult = await axios.get('http://127.0.0.1:5000/item');
    return (promiseResult.data.items)
}

export const getItemById  = async (id) => {
    return (await axios.get(`http://127.0.0.1:5000/item/${id}`)
    .then((response)=>response.data))
}

export const getItemsByCountry  = async (country) => {
    let promiseResult = await axios.get(`http://127.0.0.1:5000/item/filter-country/${country}`);
    return (promiseResult.data.items)
}