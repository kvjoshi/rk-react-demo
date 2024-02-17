import React, { useEffect } from "react";
import {Card, CardBody} from "react-bootstrap";
import {useLogin} from "../hooks/loginHook.jsx";
import useAxios from "axios-hooks";

export default function LoginPage() {
    const [uname, setUname] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [apiError, setApiError] = React.useState({error: false, message: ''})

    const {loginHook} = useLogin();

    const [{data, loading, error}, refetch] = useAxios("http://localhost:3001/api/auth/login", {manual: true});

    const handleLogin = (e) => {
        e.preventDefault();
        // If the username or password is empty, set the error state to true and display an error message
        if (uname === '' || password === '') {
            setApiError({error: true, message: 'Username or password cannot be empty'})
            return
        }
        // Using Axios Hooks to make a POST request to the login endpoint

        // refetch({method: 'POST', data: {uname, password}}).then(r => {
        //     console.log(r)
        // });

        // Call the loginHook custom hook and pass the username and password as arguments
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
