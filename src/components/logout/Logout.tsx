'use client'
import './Logout.scss'

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('user')
    };
    return (
        <div>
            <button className={'nav__list-item nav__list-item--red'} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;