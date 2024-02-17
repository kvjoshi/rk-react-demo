import React from "react";
import {Card, CardBody} from "react-bootstrap";
import userStore from "../store/loginStore.js";
import axios from "axios";

export default function LoginPage() {
    const {loginData,setLoginState}=userStore()
    const [uname, setUname] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/auth/login', {
            email: uname,
            password: password
        }).then((response) => {
            if (response.status===200){
                console.log(response.data)
                loginData(response.data)
                setLoginState(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className="container-lg">

            <h1>Login Page</h1>
            <Card>
                <CardBody className={'shadow-lg border-2 border-black'}>
                    <div>
                        <label>Username</label>
                        <input type='text' name='uname' className="form-control" onChange={(e) => {
                            setUname(e.target.value)

                        }}/>
                        <label>Password</label>
                        <input type='password' name='password' className="form-control"
                               onChange={(e) => {
                                   setPassword(e.target.value)
                               }}/>
                        <button type="button" onClick={(e) => {
                            handleLogin(e)
                        }} className={'btn btn-primary'}>Login
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
