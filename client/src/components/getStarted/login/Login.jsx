import { useContext } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    });

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username" className="label">
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
                    />
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
