export default function Login() {
    const { values, onChange, onSubmit } = useForm({
        email: "",
        password: "",
    });

    return (
        <div className="login">
            <form className="login-form" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="username" className="label">
                        Username
                    </label>
                    <input
                        id="email-login"
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Enter your email"
                        onChange={onChange}
                        value={values.email}
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
                        name="password"
                        placeholder="Enter your password"
                        onChange={onChange}
                        value={values.password}
                    />
                </div>
                {/* <div className="group">
                    <input
                        id="check"
                        type="checkbox"
                        className="check"
                        checked
                        onChange={onChange}
                        />
                    <label htmlFor="check">
                        <span className="icon"></span> Keep me Signed in
                    </label>
                </div> */}
                <div className="group">
                    <input
                        type="submit"
                        className="button"
                        value="Sign In"
                    />
                </div>
                <div className="hr"></div>
                <div className="foot">
                    <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}
