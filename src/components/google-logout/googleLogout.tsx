import { useContext } from 'react';
import { UserContext } from '../index';
import { googleLogout } from '@react-oauth/google';
import './googleLogout.css';

const GoogleBtnLogout = () => {
	const [, setUser] = useContext(UserContext);

	const logout = () => {
		googleLogout();
		setUser({ name: 'Invitado', email: '', isLogged: false });
	};

	return (
		<button type="button" className="google-btn-logout" onClick={logout}>
			{'Log out'}
		</button>
	);
};

export { GoogleBtnLogout };
