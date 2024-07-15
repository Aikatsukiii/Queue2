import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginRegister.css";

const LoginRegister = () => {
    const [action, setAction] = useState("");
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const registerLink = () => {
        setAction(" active");
    };

    const loginLink = () => {
        setAction("");
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const result = await response.json();
            if (response.ok) {
                if (result.success) {
                    navigate("/home");
                } else {
                    setErrorMessage('Invalid username or password');
                }
            } else {
                setErrorMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(`An error occurred: ${error.message}`);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerData)
            });
            const result = await response.json();
            if (response.ok) {
                setErrorMessage(result.message);
            } else {
                setErrorMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div>
            <nav className="navbar-register">
                <div className="navbar-titleregister">Queue Management System</div>
            </nav>
            <div className="login-middle">
                <div className={`wrapper${action}`}>
                    <div className="form-box login">
                        <form onSubmit={handleLogin}>
                            <h1 className="Login">Login</h1>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={loginData.username}
                                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                                    required
                                />
                                <FaUser className="icon" />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    required
                                />
                                <FaLock className="icon" />
                            </div>
                            <button type="submit">Login</button>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <div className="register-link">
                                <p>
                                    Don't have an account?
                                    <a href="#Signup" onClick={registerLink}>
                                        {" "}Sign up
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="form-box register">
                        <form onSubmit={handleRegister}>
                            <h1 className="Login">Sign up</h1>
                            <div className="input-box">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={registerData.username}
                                    onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                                    required
                                />
                                <FaUser className="icon" />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={registerData.password}
                                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                    required
                                />
                                <FaLock className="icon" />
                            </div>
                            <button type="submit">Submit</button>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <div className="register-link">
                                <p>
                                    Already have an account?
                                    <a href="./" onClick={loginLink}>
                                        {" "}Login
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
