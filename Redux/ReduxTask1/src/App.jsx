import './App.css'
import Login from './Redux/Pages/Login'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { onLogin } from "./Redux/Action/authAction"
import User from './Redux/Pages/User';

function App() {
 const {token,login} = useSelector(state => state.authReducer)

 const dispatch =  useDispatch();

 const handleLogin = (token) => {
  if(token=="QpwL5tke4Pnpja7X4"){
    dispatch(onLogin(true));
  }
  else{
    dispatch(onLogin(false))
  }
}

useEffect(()=>{
  handleLogin(token);
},[token])

  return (
    <>
      <div className="container">
        {/* <h4>Token = {token}</h4>
        <h4>Login = {JSON.stringify(login)}</h4> */}
        {login?
        <div>
          <Login/>
        </div>
        :
        <div>
          <User/>
        </div>}
      </div>
    </>
  )
}

export default App
