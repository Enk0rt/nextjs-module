import './LoginForm.scss'
import {useForm} from "react-hook-form";
import {IForm} from "@/models/form/IForm";
import {loginValidator} from "@/validators/login-validator/LoginValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import React, {Dispatch, SetStateAction, useEffect} from "react";
import axios from "axios";
import {IUserWithTokens} from "@/models/auth/IUserWithTokens";
import {redirect} from "next/navigation";

interface LoginFormProps {
    setIsActive: Dispatch<SetStateAction<boolean>>,
    isActive: boolean
}

const LoginForm = ({setIsActive, isActive}: LoginFormProps) => {
    const {handleSubmit, register, formState: {errors}, reset} = useForm<IForm>({
        mode: 'all',
        resolver: joiResolver(loginValidator)
    })

    const submitAndLogin = async (formData: IForm) => {
        const {data} = await axios.post<IUserWithTokens>('api/auth/login', formData)
        localStorage.setItem('user', JSON.stringify(data))
        reset()
        setIsActive(false)
        window.location.reload()
        redirect('/')
    }

    useEffect(() => {
        if (!isActive) {
            reset()
        }
    }, [isActive]);

    return (
        <div>
            <form className={'form'} onSubmit={handleSubmit(submitAndLogin)}>
                <h2 className={'form__title'}>Login</h2>
                <div className={'form__input'}>
                    <p className={'text-red-500 text-xs mb-2 h-4'}> {errors && errors.username?.message}</p>
                    <div className={'relative'}>
                        <span className={'form__input-title'}>Username</span>
                        <input className={'form__input-field'} type="text" {...register("username")}/>
                    </div>
                </div>
                <div className={'form__input'}>
                    <p className={'text-red-500 text-xs mb-2 h-4'}> {errors && errors.password?.message}</p>
                    <div className={'relative'}>
                        <span className={'form__input-title'}>Password</span>
                        <input className={'form__input-field'} type="text" {...register("password")}/>
                    </div>
                </div>
                <button className={'form__btn'}>Sign in</button>
            </form>
        </div>
    );
};

export default LoginForm;