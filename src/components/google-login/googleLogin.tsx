import { useContext, useEffect, useState } from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { UserContext } from '../index';

const GoogleBtnLogin = () => {
	const [user, setUser] = useContext(UserContext);
	const [credential, setCredential] = useState<CredentialResponse | null>(
		null
	);

	// function onSignIn(googleUser: CredentialResponse) {
	// 	var profile = googleUser.getBasicProfile();
	// 	var userType = 'admin';
	// 	setUser({
	// 		name: profile.getName(),
	// 		email: profile.getEmail(),
	// 		isLogged: true,
	// 		type: userType,
	// 	});
	// 	// console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	// 	// console.log('Name: ' + profile.getName());
	// 	// console.log('Image URL: ' + profile.getImageUrl());
	// 	// console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	// 	// console.log("Todo el obj de usuario: ",googleUser);
	// }

	useEffect(() => {
		if (credential) {
			console.log('credential', credential);
			fetch(
				`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${credential.credential}`,
				{
					headers: {
						Authorization: `Bearer ${credential.credential}`,
						Accept: 'application/json',
					},
				}
			)
				.then((res) => {
					console.log(res);
					// setUser(res);
				})
				.catch((err) => console.log(err));
		}
	}, [user]);

	return (
		<GoogleLogin
			onSuccess={setCredential}
			onError={() => {
				console.error('There was an error while logging in');
			}}
		/>
	);
};

export { GoogleBtnLogin };
