
import {Dispatch, SetStateAction} from "react";

interface LogoutProps {
    setIsAuth: Dispatch<SetStateAction<boolean>>
}

const Logout = ({setIsAuth}: LogoutProps) => {
    const handleLogout = () => {
       localStorage.removeItem('user')
        setIsAuth(false);
    };
    return (
        <div>
            <form action="">
                <button onClick={handleLogout}>Logout</button>
            </form>
        </div>
    );
};

export default Logout;