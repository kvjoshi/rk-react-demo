import React, {useState} from "react";
// import userStore from "../store/loginStore.jsx";

export default function LoginPage() {

    // const {loginData}=userStore()
    let x = 1
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log(uname, password)
        // if(uname === 'admin' && password === 'admin'){
        if(x===1){
            console.log('Login Success')
            // loginData({uname, password})

        }
        else{
        alert('Login Failed')
            console.log('Login Failed')
        }
    }
    return (
        <div className="container">
            <h1>Login Page</h1>
            <div>
                <label>Username</label>
                    <input type='text' name='uname' className="form-control"/>
                <label>Password</label>
                    <input type='password' name='password' className="form-control"/>
                    <button type="button" onClick={(e)=>{handleLogin(e)}} className={'btn btn-primary'}>Login</button>
            </div>
        </div>
    )
}
