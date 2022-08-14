import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/AuthProvider';
import Axios from '../api/axios';
const LOGOUT_URL = "/logout";

export default function Logout() {
	//const [auth, setAuth] = useState('');
	// const {user} = useContext(AuthContext);
	// const {pwd} = useContext(AuthContext);


	const { setAuth } = useContext(AuthContext);

	Axios.get(LOGOUT_URL, {
		withCredentials: true
	})
	.then(function (response) {
		console.log(response);
		console.log(setAuth);
		setAuth({accessToken: null});
		console.log(response);
		console.log(setAuth.accessToken);
	})

	// useEffect(() => {
	// 	//set the user state back to it's original value
	// 	setAuth({})
	// 	// eslint-disable-next-line
	// }, [])

	// async function handleLogout () {

    //     try {
    //         const response = await Axios.get(LOGOUT_URL);
    //         console.log(JSON.stringify(response?.data));
    //         //console.log(JSON.stringify(response));
    //         const refreshToken = response?.data?.refreshToken;
    //         const roles = response?.data?.roles;
    //         setAuth({ refreshToken });
    //     } catch (err) {
    //         if (!err?.response) {
    //             console.log('No Server Response');
    //         }
    //     }
    // }

	return(

		<Navigate to="/login" />

		)
}
