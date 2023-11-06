import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { onLogin } from './redux/actions/authAction';
import { onLogout } from './redux/actions/authAction';
import { getProduct } from './redux/actions/productAction';
import axios from "axios"
import { useEffect } from 'react';

function App() {
const {isAuth, userName} = useSelector(state => state.authReducer);
const {list} = useSelector(state => state.productReducer);

const dispatch = useDispatch();

console.log(isAuth, userName);
console.log("list",list)

const handleLogin = () => {
  dispatch(onLogin(true));
}

const handleLogout = () => {
  dispatch(onLogout(false));
}

const handleProduct = async () => {
  try{
    const res = await axios.get("https://reqres.in/api/users?page=1");
    const data = res.data.data;
    console.log(`data : `,data);
    dispatch(getProduct(data));
  }catch(err){
    console.log(err)
  }
}

useEffect(()=>{
  handleProduct();
},[list]);

  return (
    <>
      <h1>{isAuth ? "Login" : "Logout"}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {isAuth && 
      <div>
        <table border={2} cellPadding={5}>
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Avatar</th>
              <th>Source</th>
            </tr>
        </thead>
        <tbody>
            {list?.map((list, index) => (
              <tr key={index}>
                  <td>{list.id}</td>
                  <td>{list.first_name} {list.last_name}</td>
                  <td>{list.email}</td>
                  <td><img src={list.avatar} alt="" /></td>
                  <td><a href={list.avatar} target='_blank' rel='noreferrer'>Click</a></td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      }

    </>
  )
}

export default App
