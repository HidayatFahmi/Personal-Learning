
const initState = {
    list : [],
    isLoading : true,
    isError : null,
}

export const productReducer = (state = initState, action) => {
    switch (action.type){
    
    case "GET_PRODUCT_SUCCEED":
        return {
        ...state,
        list : action.payload,
        isLoading : action.loadingStatus,
        }
    

    case "GET_PRODUCT_FAIL":
        return {
        ...state,
        list : [],
        isLoading : action.loadingStatus,
        isError : action.errorStatus,
        }

    case "GET_PRODUCT_LOAD":
        return {
        ...state,
        isLoading : action.loadingStatus,
        };

    default :
    return state
    }
}