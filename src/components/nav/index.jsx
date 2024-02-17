import {Navbar, Nav, Button} from "react-bootstrap";
import {privateRoutes} from "../../routes/index.jsx";
import {Link} from 'react-router-dom'
import userStore from "../../store/loginStore.js";
export default function NavBarComp() {
    const {logout} = userStore()
    return (
        <Navbar className={"navbar-light navbar-expand text-dark"}>
            <Nav>
                {
                    privateRoutes.map((route, index) => {
                        return <Link key={index} to={route.path} className="nav-link">
                            {route.name}
                                </Link>
                })
            }
            <Button variant="primary" className="ml-2" onClick={()=>{logout()}}>Logout</Button>
            </Nav>
        </Navbar>
    );
}
