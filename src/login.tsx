import { useState } from 'react'
import './App.css'
import axios from "axios";
import { encode } from 'js-base64'
import { useNavigate } from "react-router-dom";


import { Input, Button,} from 'antd';

function Login() {  
  const navigate = useNavigate();

  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")

  const userInputChange = (e) => {
    setUser(e.target.value)
  }

  const pwdInputChange = (e) => {
    setPwd(e.target.value)
  }

  const login = () => {  
    axios.create().post('/api/user/authentication', {}, {
      headers: {
        Authorization: 'Basic ' + encode(user + ':' + pwd)        
      }
    })
    navigate("/QA");    
  }; 

  const aboutMe = () => {
    axios.create().get('/api/user/me')
      .then((response) => {console.log(response.data);});
  }

  return (
    <>
      <div>
      <Input addonBefore="用户名" onChange={userInputChange} />      
      <Input.Password addonBefore="密码" onChange={pwdInputChange} />
      </div>
      <Button type="primary" onClick={login}>登录</Button>


    </>
  )
}

export default Login
