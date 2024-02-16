import LoginPage from "../pages/login.jsx";
import DashboardPage from "../pages/dashboard.jsx";
import HomePage from "../pages/home.jsx";
import RegisterPage from "../pages/register.jsx";

export const publicRoutes = [
{
    path: "/",
    component :LoginPage(),
    name: "Login",
    index: true
},
    {
        path: "/register",
        component :RegisterPage(),
        name: "Register",
    }
]
export const privateRoutes = [
    {path: "/", component : HomePage() , name: "Home" , index: true},
    {path: "/dashboard", component : DashboardPage() , name: "Dashboard"},
    {path:"/profile",component:DashboardPage(),name:"Profile"}
]
