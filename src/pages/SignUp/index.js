import './SignUp.css';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import GoogleIcon from '../../assets/img/google.png';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const auth = getAuth(app);

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const onChangeInput = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    };

    const signUp = () => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                setLoading(false);
                setFormFields({
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    return (
        <section className="signIn">
            <div className="wrapBreadCumb">
                <div className="container-fluid">
                    <ul class="breadcrumb">
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li className="active">Sign Up</li>
                    </ul>
                </div>
            </div>
            <div className="signInWrapper">
                <div className="card shadow">
                    <Backdrop
                        sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={loading}
                        className="formLoader"
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <h3>Sign Up</h3>
                    <form>
                        <div className="form-group">
                            <TextField
                                onChange={onChangeInput}
                                className="w-100"
                                type="email"
                                id="email"
                                label="Email"
                                value={formFields.email}
                            />
                        </div>

                        <div className="form-group">
                            <TextField
                                onChange={onChangeInput}
                                className="w-100"
                                type={showPassword === true ? 'text' : 'password'}
                                id="password"
                                label="Password"
                                value={formFields.password}
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
                            <TextField
                                onChange={onChangeInput}
                                className="w-100"
                                type={showConfirmPassword === true ? 'text' : 'password'}
                                id="confirmPassword"
                                label="Confirm Password"
                                value={formFields.confirmPassword}
                            />
                            {showConfirmPassword === true ? (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setShowConfirmPassword(!showConfirmPassword);
                                    }}
                                    className="iconShowPassword"
                                    icon={faEye}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    onClick={() => {
                                        setShowConfirmPassword(!showConfirmPassword);
                                    }}
                                    className="iconShowPassword"
                                    icon={faEyeSlash}
                                />
                            )}
                        </div>

                        <div className="form-group">
                            <button onClick={signUp}>Sign In</button>
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

export default SignUp;
