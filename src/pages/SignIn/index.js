import './SignIn.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import GoogleIcon from '../../assets/img/google.png';

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <section className="signIn">
            <div className="wrapBreadCumb">
                <div className="container-fluid">
                    <ul class="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li className="active">Sign In</li>
                    </ul>
                </div>
            </div>
            <div className="signInWrapper">
                <div className="card shadow">
                    <h3>
                        Sign In
                        <p>
                            Don't have account ? <Link to="/signup">Sign Up</Link>
                        </p>
                    </h3>

                    <form>
                        <div className="form-group">
                            <TextField className="w-100" type="email" id="email" label="Email" />
                        </div>

                        <div className="form-group">
                            <TextField
                                className="w-100"
                                type={showPassword === true ? 'text' : 'password'}
                                id="password"
                                label="Password"
                            />
                            {showPassword === true ? (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                    className="iconShowPassword"
                                    icon={faEye}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setShowPassword(!showPassword);
                                    }}
                                    className="iconShowPassword"
                                    icon={faEyeSlash}
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <button>Sign In</button>
                            <h2 className="text-center mt-5">Or</h2>
                        </div>

                        <div className="form-group ">
                            <button className="signInGoogle">
                                <img src={GoogleIcon} alt="google" className="googleIcon" />
                                <p className="mb-0">Sign In With Google</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
