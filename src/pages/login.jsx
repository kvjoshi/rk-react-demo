export default function LoginPage() {
    return (
        <div className="container">
            <h1>Login Page</h1>
            <div>
                <form>
                    <input type='text' name='uname' className="form-control"/>
                    <input type='password' name='password' className="form-control"/>
                    <button type="button" onClick={(e)=>{e.preventDefault}}>Login</button>
                </form>
            </div>
        </div>
    )
}
