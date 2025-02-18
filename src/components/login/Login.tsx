'use client'
import Modal from "@/components/modal/Modal";
import LoginForm from "@/components/forms/login-form/LoginForm";
import {useState} from "react";




const Login = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const handleClick = () => {
        setIsActive(true)
    }
    return (
        <div>
            <button className={'nav__list-item'} onClick={handleClick}>Login</button>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <LoginForm setIsActive={setIsActive}/>
            </Modal>
        </div>
    );
};

export default Login;