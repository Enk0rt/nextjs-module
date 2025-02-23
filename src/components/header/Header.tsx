import Menu from "@/components/header/menu/Menu";
import "./Header.scss"
import {retrieveCookie} from "@/services/data/helpers/retrieveCookies";


const Header = async () => {

    const {refreshToken} = await retrieveCookie()
    console.log(refreshToken)
    return (
        <div className={'header'}>
            <div className={'wrapper'}>
                <div className={'header__container'}>
                    <Menu refreshToken={refreshToken}/>
                </div>
            </div>
        </div>
    );
};

export default Header;