import { TYPES } from "../type"
import axios from "axios";

export const onGetProduct = async (dispatch) => {
  try{
    await axios.get("https://reqres.in/api/users?page=1")
    .then((res)=>{
      const data = res.data.data;
      dispatch({
        type : TYPES.GET_PRODUCT_SUCCEED,
        loadingStatus : false,
        payload : data,
      })
    })
  }catch(err){
    dispatch({
      type : TYPES.GET_PRODUCT_FAIL,
      loadingStatus : false,
      errorStatus : err.message,
    })
  }
}