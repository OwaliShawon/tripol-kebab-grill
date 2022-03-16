import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { authentication } from '../util/firebase-config';

const Login = () => {
    const countryCode = "+88"
    const [phoneNumber, setPhoneNumber] = useState();
    const [otp, setOtp] = useState();
    const [user, setUser] = useState();


    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        }, authentication);
    }

    const requestOTP = (e) => {
        e.preventDefault();
        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                // Error; SMS not sent
                console.log(error);
            });
    }

    const submitOTP = (e) => {
        e.preventDefault();
        const code = otp;
        confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(JSON.stringify(user));
            // alert(user.phoneNumber);
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log(error);
        });
    }

    const onSignOut = () => {
        signOut(authentication).then(() => {
            // Sign-out successful.
            console.log("Sign out successful");
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div>
            <div>
                {/* submit your mobile number */}
                <form onSubmit={submitOTP}>
                    <input
                        onChange={(e) => setOtp(e.target.value)}
                        type="number"
                        name='otp'
                        placeholder='Enter OTP' />

                    <button type='submit'>Enter OTP</button>

                    <div id='recaptcha-container'></div>
                </form>
                {/* request otp */}
                <form onSubmit={requestOTP}>
                    <input
                        onChange={(e) => setPhoneNumber(countryCode + e.target.value)}
                        type="number"
                        name='number'
                        placeholder='number' />

                    <button type='submit'>Request OTP</button>

                    <div id='recaptcha-container'></div>
                </form>
            </div>
            <button onClick={onSignOut}>Sign Out</button>
        </div>
    );
};

export default Login;