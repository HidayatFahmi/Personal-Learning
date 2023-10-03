// import { createContext, useState, useContext } from 'react';
import Main from './Latihan1.jsx/Main'
import './App.css'

function App() {

  return (
    <div>
      {/* <UserProvider>
        <Logincard/>
        <Profile/>
      </UserProvider> */}
      <Main/>
    </div>
  )
}

// const userKonteks = createContext({
//   // userName : null,
//   // setUserName : function (){},
// })

// function UserProvider ({children}) {

//   const [userName, setUserName] = useState("");

//   return(
//     <userKonteks.Provider value={{userName, setUserName}}>
//       {children}
//     </userKonteks.Provider>
//   )
// }


// function Logincard(){
//   const{setUserName}= useContext(userKonteks)

//   return(
//     <div>
//       <input type="text" placeholder='Username' onChange={(event)=> setUserName(event.target.value)}/>
//       <button>Login</button>
//     </div>
//   )
// }

export default App


// function Profile(){
//   const {userName} = useContext(userKonteks)

//   return(
//     <div>
//       <h3>Selamat datang fahmi</h3>
//       <p>{userName}</p>
//     </div>
//   )
// }