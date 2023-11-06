
const initState = {
    list : []
}

export const productReducer = (state = initState, action) => {
    switch (action.type){
    
    case "GET_PRODUCT_SUCCEED":
        return {
        ...state,
        list : action.payload
        }
    

    case "GET_PRODUCT_FAIL":
        return {
        ...state,
        list : "Fail load data"
        }

    case "GET_PRODUCT_LOAD":
        return {
        ...state,
        list : "Loading ...."
        };

    default :
    return state
    }
}