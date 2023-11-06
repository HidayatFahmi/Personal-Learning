import { TYPES } from "../type"

export const getProduct = (data) => {
  return{
    type : TYPES.GET_PRODUCT_SUCCEED,
    payload : data, 
  }
}