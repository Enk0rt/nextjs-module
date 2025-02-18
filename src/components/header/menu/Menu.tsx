import Link from "next/link";
import {routes} from "@/constants/constants";
import "./Menu.scss"

import Login from "@/components/login/Login";
import Logout from "@/components/logout/Logout";
import {logout} from "@/server-actions/logout";



interface MenuProps {
    refreshToken: string | undefined
}

const Menu = ({refreshToken}: MenuProps) => {

    return (
        <>
            <nav className={'nav '}>
                {refreshToken ? (
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
                        <form action={logout}>
                            <Logout/>
                        </form>
                    </ul>
                ) : (
                   <ul className={'nav__list'}>
                       <Link className={'nav__list-item'} href={routes.home}>
                           <li>Home</li>
                       </Link>
                       <Login/>
                   </ul>
                )
                }
            </nav>
        </>
    );
};

export default Menu;