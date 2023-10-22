const authState = {
    isAuth : false,
    userName : "",
};

export const authReducer = (auth = authState, action) => {
   switch(action.type){
    case "LOGIN":
        return {
        ...auth,
        isAuth : action.payload,
        };
    
    case "LOGOUT":
        return {
        ...auth,
        isAuth : action.payload,
        };
    
        default:
            return auth;
   }
}

