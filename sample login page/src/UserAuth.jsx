import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from './firebase';

const UserAuth = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = data;

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const signUp = async e => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
        } catch (error) {
            console.log(error);
        }
    };

    const signIn = async e => {
        e.preventDefault();

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            console.log(userCredential.user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <center>
                <form autoComplete="off">
                    <h1>Authentication</h1>
                    <input type="email" name="email" value={email} placeholder="Email" onChange={changeHandler} /><br />
                    <input type="password" name="password" value={password} placeholder="Password" onChange={changeHandler} /><br />
                    <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
                    <button onClick={signUp}>Sign Up</button>
                </form>
            </center>
        </div>
    );
};

export default UserAuth;