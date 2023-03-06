import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    let localUsername=localStorage.getItem("username")
    let localPassword=localStorage.getItem("password")

    if(localUsername == username && localPassword == password)
    {
      console.log({username,password});
      toast.success("Login Successfull")
      navigate("/home")
    }
    else{
      toast.error("Login Failed")
      navigate("/login")
    }

    
  }
  return (
    <center><div id='box' >
    <form action="">
        <input type="email" placeholder='Email' id='email' onChange={(e)=>{
          setUsername(e.target.value)
        }}/> <br />
        <input type="password" name="password" id="password" placeholder='Password' onChange={(e)=>{
          setPassword(e.target.value)
        }}/> <br />
        <p id='fp'>Forgot password</p><br />
        <button id='login' onClick={handleSubmit}>Login</button><br />
        <p>Dont have an account? <a href="">Signup</a></p><br />
        <p>-----------------Or-----------------</p><br />
        <button id='fb'>Login with Facebook</button><br />
        <button id='go'>Login with Google</button>
    </form>
</div></center>
  )
}

export default Login