import React from 'react';
import dumyImg from '../../images/dummy-user.png';
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import './Login.css';
import useAuth from '../../Context/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const {handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLoggedIn = () =>{
        handleGoogleSignIn()
        .then((result) => {
           history.push(redirect_uri);
        })

        .catch(err => {
            console.log(err.message);
        })
    }
    return (
        <div className="form-warp">
            <div className="form-container">

                <div className="log-in-head">
                    <img src={dumyImg} alt="" />
                    <h1>login</h1>
                </div>

                <form>
                    <div className="email">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" placeholder="email" required />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label><br />
                        <input  type="password" name="password" id="password" placeholder="password" required />
                    </div>


                    <div className="register-reset">
                        <div className="checkbox">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox">Dont have any account !</label>
                        </div>
                        <a href="#">forgot password</a>
                    </div>


                    <div className="submit-button">
                        <button type="submit">login</button>
                    </div>

                </form>
                <p className="message"> message</p>
                <div className="icons">
                    <FaGoogle onClick={handleGoogleLoggedIn}  className="google-icon" />
                    <FaFacebook className="facebook-icon" />
                    <FaGithub className="github-icon" />
                    <FaTwitter className="twitter-icon" />
                </div>
            </div>
        </div>
    );
};

export default Login;