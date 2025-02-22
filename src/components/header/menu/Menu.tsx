import Link from "next/link";
import {routes} from "@/constants/constants";
import "./Menu.scss"

import Login from "@/components/login/Login";
import Logout from "@/components/logout/Logout";
import {logout} from "@/server-actions/logout";
import {jwtDecode} from "jwt-decode";
import {IUserWithTokens} from "@/models/auth/IUserWithTokens";
import Image from "next/image";


interface MenuProps {
    refreshToken: string
}

const Menu =async ({refreshToken}: MenuProps) => {

    const decodeToken = (token:string):IUserWithTokens | undefined => {
        if(token){
           return jwtDecode(token);
        }
        return
    }
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
                            decoded && <div className={'nav__user flex gap-4 items-center'}>
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