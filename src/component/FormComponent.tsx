import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {AuthModule} from "../module/AuthModule";
import {authService} from "../servise/api.servise";

const FormComponent = () => {
    const{handleSubmit, register} = useForm<AuthModule>();

    const [isAuthState, setIsAuthState] = useState<boolean>(false);
    const authenticate = async (formData: AuthModule) => {
        const isAuth = await authService.authentication(formData);
        setIsAuthState(isAuth);
        console.log(isAuth)
    }

    return (
        <div>
            <h3>login form</h3>
            {isAuthState ? <div>ok</div> : <div>not ok</div>}
            <form onClick={handleSubmit(authenticate)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>login</button>
            </form>
        </div>
    );
};

export default FormComponent;