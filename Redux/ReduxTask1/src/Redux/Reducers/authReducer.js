 
 const initState = {
    login : false,
    token : [],
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case "GET_DATA_SUCCEDD":
        return {
        ...state,
        token : action.payload
        }

        case "LOGIN":
        return {
        ...state,
        login : action.payload
        }

        default :
        return state;
    }
}

export default authReducer;