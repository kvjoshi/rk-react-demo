
import NavBarComp from "../components/nav";
export default function AdminLayout ({children}){
    return (
        <div>
            <NavBarComp />
            <h1>Admin Layout</h1>
            {children}
        </div>
    )
}
