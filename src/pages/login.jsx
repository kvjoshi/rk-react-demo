import React from "react";
import {Card, CardBody} from "react-bootstrap";


export default function LoginPage() {
    // const {loginData}=userStore()
    // const [uname, setUname] = React.useState(0)
    // const [password, setPassword] = React.useState(0)
    let x = 1

    const handleLogin = (e) => {
        e.preventDefault();
        // // console.log(uname, password)
        // if(uname === 'admin' && password === 'admin'){
        // // if(x===1){
        //     console.log('Login Success')
        //     // loginData({uname, password})
        //
        // }
        // else{
        // alert('Login Failed')
        //     console.log('Login Failed')
        // }
    }
    return (
        <div className="container-lg">

            <h1>Login Page</h1>
            <Card>
                <CardBody className={'shadow-lg border-2 border-black'}>
                    <div>
                        <label>Username</label>
                        <input type='text' name='uname' className="form-control" onChange={(e) => {
                            // setUname(e.target.value)

                        }}/>
                        <label>Password</label>
                        <input type='password' name='password' className="form-control"
                               onChange={(e) => {
                                   // setPassword(e.target.value)
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
