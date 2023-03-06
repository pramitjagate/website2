import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify' 

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  let navigate=useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()

    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    toast.success("user registered")
    navigate("/login")

    console.log({username,password});
    

  }




  return (
    <center><div id='box2'>
    <form action="">
        <input type="email" placeholder='Email' id='email' onChange={(e)=>{
          setUsername(e.target.value)
        }} /> <br />
        <input type="password" name="password" id="password" placeholder='Password' onChange={(e)=>{
          setPassword(e.target.value)
        }}/> <br />
        <button id='login'onClick={handleSubmit}>Signup</button><br />
        <p>Already have an account? <a href="">Login</a></p><br />
        <p>-----------------Or-----------------</p><br />
        <button id='fb'>Login with Facebook</button><br />
        <button id='go'>Login with Google</button>
    </form>
</div></center>
  )
}

export default Signup