import {Navbar, Nav} from "react-bootstrap";
import {publicRoutes , privateRoutes} from "../../routes/index.js";
import {Link} from 'react-router-dom'
export default function NavBarComp() {
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
            </Nav>
        </Navbar>
    );
}
