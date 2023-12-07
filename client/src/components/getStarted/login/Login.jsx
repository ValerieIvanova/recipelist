import { useContext, useState } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";
import { validateLoginForm } from "../../../utils/formValidation";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

export default function Login() {
    const [formErrors, setFormErrors] = useState({});
    const { loginSubmitHandler } = useContext(AuthContext);
    
    const { values, onChange, onSubmit } = useForm(
        (values) => {
            const errors = validateLoginForm(values)
            setFormErrors(errors);
            if (Object.keys(errors).length === 0) {
                loginSubmitHandler(values);
            }
        },
        {
            [LoginFormKeys.Email]: "",
            [LoginFormKeys.Password]: "",
        }
    );

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="email-login" className="label">
                        Email
                    </label>
                    <input
                        id="email-login"
                        type="email"
                        name={LoginFormKeys.Email}
                        className="input"
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values[LoginFormKeys.Email]}
                        autoComplete="on"
                    />
                    {formErrors[LoginFormKeys.Email] && (
                        <p className="error">{formErrors[LoginFormKeys.Email]}</p>
                    )}
                </div>
                <div className="group">
                    <label htmlFor="pass" className="label">
                        Password
                    </label>
                    <input
                        id="pass"
                        type="password"
                        className="input"
                        name={LoginFormKeys.Password}
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values[LoginFormKeys.Password]}
                    />
                    {formErrors[LoginFormKeys.Password] && (
                        <p className="error">{formErrors[LoginFormKeys.Password]}</p>
                    )}
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                </div>
                <div className="hr"></div>
                <div className="foot">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}
