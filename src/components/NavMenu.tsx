import { NavLink } from "react-router";
import UserInfo from "./UserInfo"

const NavMenu = () => {
    return (
        <nav>
            <UserInfo />
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavMenu;