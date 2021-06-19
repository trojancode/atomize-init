import { userFetch } from "./fetch_functions";

export const getRecomendation = (name) => {
    return userFetch({
      uri:`stocks/search?name=${name}`,
      method:'GET'
    })
};

export const getStock = (id) => {
    return userFetch({
      uri:`stocks/${id}`,
      method:'GET'
    })
};