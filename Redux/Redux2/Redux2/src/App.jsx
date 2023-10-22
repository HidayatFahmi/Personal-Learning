import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { TYPES } from './redux/type';


function App() {
const {isAuth, userName} = useSelector(state => state.authReducer)
const {list} = useSelector(state => state.productReducer)
const dispatch = useDispatch();

console.log(isAuth, userName);
console.log("list",list)

const handleLogin = () => {
  dispatch({
    type : TYPES.LOGIN,
    payload : true,
  });
}

const handleLogout = () => {
  dispatch({
    type : TYPES.LOGOUT,
    payload : false,
  })
}

  return (
    <>
      <h1>{isAuth ? "Login" : "Logout"}</h1>
      <button onClick={handleLogin}>Submit</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default App
