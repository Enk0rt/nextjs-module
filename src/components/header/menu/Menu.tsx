import Link from "next/link";
import {routes} from "@/constants/constants";
import "./Menu.scss"

import Login from "@/components/login/Login";
import Logout from "@/components/logout/Logout";
import {logout} from "@/server-actions/logout";
import Image from "next/image";
import {decodeToken} from "@/utils/decodeToken";


interface MenuProps {
    refreshToken: string
}

const Menu = async ({refreshToken}: MenuProps) => {

    const decoded = decodeToken(refreshToken)
    return (
        <>
            <nav className={'nav '}>
                <div className={'menu__logo'}>
                    <Image src={'/next.svg'} alt={'logo'} width={'100'} height={'40'}/>
                </div>
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
                        {
                            decoded && <div className={'nav__user'}>
                                <h2>{decoded.username}</h2>
                                <img src={decoded.image} width={'50px'} height={'50px'} alt=""/>
                            </div>
                        }
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