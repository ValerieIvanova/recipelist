import "./getStarted.css";

import Login from "./login/Login";
import Register from "./register/Register";

export default function GetStarted() {
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                    <div className="card">
                        <div className="login-box">
                            <div className="login-snip">
                                <input
                                    id="tab-1"
                                    type="radio"
                                    name="tab"
                                    className="sign-in"
                                    defaultChecked
                                />
                                <label htmlFor="tab-1" className="tab">
                                    Login
                                </label>
                                <input
                                    id="tab-2"
                                    type="radio"
                                    name="tab"
                                    className="sign-up"
                                />
                                <label htmlFor="tab-2" className="tab">
                                    Sign Up
                                </label>
                                <div className="login-space">
                                    <Login />
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
