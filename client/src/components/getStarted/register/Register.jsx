import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";

const RegisterFormKeys = {
    Email: "email",
    Username: "username",
    Password: "password",
    RepeatPassword: "repeatPassword",
};
export default function Register() {
    const navigate = useNavigate();
    const { registerSubmitHandler } = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: "",
        [RegisterFormKeys.Username]: "",
        [RegisterFormKeys.Password]: "",
        [RegisterFormKeys.RepeatPassword]: "",
    });

    return (
        <div className="sign-up-form">
            <form className="sign-up-form" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username-create" className="label">
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
                    />
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
                    />
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
