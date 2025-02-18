import Menu from "@/components/header/menu/Menu";
import "./Header.scss"


const Header =async () => {
    return (
        <div className={'header'}>
            <div className={'wrapper'}>
                <div className={'header__container'}>
                    <Menu/>
                </div>
            </div>
        </div>
    );
};

export default Header;