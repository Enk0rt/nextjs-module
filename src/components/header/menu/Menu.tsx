import Link from "next/link";
import {routes} from "@/constants/constants";
import "./Menu.scss"

import Login from "@/components/login/Login";


const Menu = () => {

    return (
        <>
            <nav className={'nav '}>
                <ul className={'nav__list'}>
                    <Link className={'nav__list-item'} href={routes.home}>
                        <li>Home</li>
                    </Link>
                    <Link className={'nav__list-item'} href={routes.users}>
                        <li>Users</li>
                    </Link>
                    <Link className={'nav__list-item'} href={routes.recipes}>
                        <li>Recipes</li>
                    </Link>
                    <Login/>
                </ul>
            </nav>
        </>
    );
};

export default Menu;