'use client'
import Modal from "@/components/modal/Modal";
import LoginForm from "@/components/forms/login-form/LoginForm";
import {useState} from "react";
import './Login.scss'


const Login = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const handleClick = () => {
        setIsActive(true)
    }
    return (
        <div>
            <button className={'nav__list-item nav__list-item--green'} onClick={handleClick}>Login</button>
            <Modal isActive={isActive} setIsActive={setIsActive}>
                <LoginForm isActive={isActive} setIsActive={setIsActive}/>
            </Modal>
        </div>
    );
};

export default Login;