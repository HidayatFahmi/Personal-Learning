import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Counter'
import Input from './ControlInput'
import HideShowValue from './HideShowValue'
import Konter from './Latihan'
import Parent from './Parent'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Input/>
    <HideShowValue/> */}
    <Konter/>
    <Parent/>
  </React.StrictMode>,
)
