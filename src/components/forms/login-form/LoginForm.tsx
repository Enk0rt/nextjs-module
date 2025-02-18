import './LoginForm.scss'
import {useForm} from "react-hook-form";
import {IForm} from "@/models/form/IForm";
import {loginValidator} from "@/validators/login-validator/LoginValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import React, {Dispatch, SetStateAction} from "react";
import axios from "axios";
import {IUserWithTokens} from "@/models/auth/IUserWithTokens";

interface LoginFormProps {
    setIsActive: Dispatch<SetStateAction<boolean>>,
}

const LoginForm = ({setIsActive}: LoginFormProps) => {

    const {handleSubmit, register, reset} = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(loginValidator)
    })

    const submitAndLogin = async (formData: IForm) => {
        const {data} = await axios.post<IUserWithTokens>('http://localhost:3000/api/auth/login', formData)
        localStorage.setItem('user',JSON.stringify(data))
        reset()
        setIsActive(false)
        window.location.reload()
    }

    return (
        <div>
            <form className={'form'} onSubmit={handleSubmit(submitAndLogin)}>
                <h2 className={'form__title'}>Login</h2>
                <div className={'form__input'}>
                    <span className={'form__input-title'}>Username</span>
                    <input className={'form__input-field'} type="text" {...register("username")}/>
                </div>
                <div className={'form__input'}>
                    <span className={'form__input-title'}>Password</span>
                    <input className={'form__input-field'} type="text" {...register("password")}/>
                </div>
                <button className={'form__btn'}>Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;