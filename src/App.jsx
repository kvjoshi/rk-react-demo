import {useEffect, useState} from 'react'
import './App.css'
import AdminLayout from "./layout/adminLayout.jsx";
import AuthLayout from "./layout/authLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import {privateRoutes , publicRoutes} from "./routes/index.jsx";
import userStore from "./store/loginStore.js";

function App() {
    const {loginState} = userStore()
    useEffect(() => {
        console.log('loginState:', loginState)
    }, [loginState]);

    const Private = (<Routes>
        {privateRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.component} index={route.index}/>
        })}
    </Routes>)

    const Public = (<Routes>
      {
        publicRoutes.map((route,index)=>{
          return <Route key={index} path={route.path} element={route.component} index={route.index}/>
        })
      }
    </Routes>)
 return (
    <>
    <BrowserRouter basename={'/'}>
        {loginState ?(
      <AdminLayout>
        {Private}
      </AdminLayout>
    ) : (
      <AuthLayout>
        {Public}
      </AuthLayout>
    )
    }
    </BrowserRouter>
    </>
  )

}

export default App
