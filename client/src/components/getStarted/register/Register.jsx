import { useContext, useState } from "react";

import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";
import { validateRegisterForm } from "../../../utils/formValidation";

const RegisterFormKeys = {
    Email: "email",
    Username: "username",
    Password: "password",
    RepeatPassword: "repeatPassword",
};
export default function Register() {
    const [formErrors, setFormErrors] = useState({});
    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(
        (values) => {
            const errors = validateRegisterForm(values);
            console.log(errors);
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) {
                registerSubmitHandler(values);
            }
        },
        {
            [RegisterFormKeys.Email]: "",
            [RegisterFormKeys.Username]: "",
            [RegisterFormKeys.Password]: "",
            [RegisterFormKeys.RepeatPassword]: "",
        }
    );

    return (
        <div className="sign-up-form">
            <form className="sign-up-form" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="email-create" className="label">
                        Email
                    </label>
                    <input
                        id="email-create"
                        type="email"
                        className="input"
                        placeholder="Enter your email"
                        name="email"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                        autoComplete="on"
                    />
                    {formErrors[RegisterFormKeys.Email] && (
                        <p className="error"> {formErrors[RegisterFormKeys.Email]}</p>
                    )}
                </div>
                <div className="group">
                    <label htmlFor="username-create" className="label">
                        Username
                    </label>
                    <input
                        id="username-create"
                        type="text"
                        className="input"
                        placeholder="Create your username"
                        name="username"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Username]}
                        autoComplete="on"
                    />
                    {formErrors[RegisterFormKeys.Username] && (
                        <p className="error"> {formErrors[RegisterFormKeys.Username]}</p>
                    )}
                </div>
                <div className="group">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Create your password"
                        name="password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />
                    {formErrors[RegisterFormKeys.Password] && (
                        <p className="error"> {formErrors[RegisterFormKeys.Password]}</p>
                    )}
                </div>
                <div className="group">
                    <label htmlFor="repeat-password" className="label">
                        Repeat Password
                    </label>
                    <input
                        id="repeat-password"
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Repeat your password"
                        name="repeatPassword"
                        onChange={onChange}
                        values={values[RegisterFormKeys.RepeatPassword]}
                    />
                    {formErrors[RegisterFormKeys.RepeatPassword] && (
                        <p className="error"> {formErrors[RegisterFormKeys.RepeatPassword]}</p>
                    )}
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign Up" />
                </div>
                <div className="hr"></div>
                <div className="foot">
                    <label htmlFor="tab-1">Already Member?</label>
                </div>
            </form>
        </div>
    );
}
