import React, { useEffect } from "react";
import {Card, CardBody} from "react-bootstrap";
import {useLogin} from "../hooks/loginHook.jsx";

export default function LoginPage() {
    const [uname, setUname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [apiError, setApiError] = React.useState({error: false, message: ''})

    const {loginHook} = useLogin();


    const handleLogin = (e) => {
        e.preventDefault();
        loginHook(uname, password).then(r => {
            console.log(r)
        });
    }
    return (
        <div className="container-lg">

            <h1>Login Page</h1>
            <h2>Loading state</h2>
            <Card>
                <CardBody className={'shadow-lg border-2 border-black'}>
                    <div>
                        {apiError.error ? <div className="alert alert-danger h-25" role="alert">
                            {apiError.message}
                        </div> : ''}
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
