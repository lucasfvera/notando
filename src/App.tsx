import React, { useContext } from 'react';
import {
	UserContextProvider,
	FeatureFlagsContextProvider,
	LoadingContext,
	Body,
} from '@/components';
import { GOOGLE_CLIENT_ID } from '@/config/googleClientID';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
	const [loading, setLoading] = useContext(LoadingContext);
	return (
		<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
			<FeatureFlagsContextProvider>
				<UserContextProvider>
					<Body />
				</UserContextProvider>
			</FeatureFlagsContextProvider>
		</GoogleOAuthProvider>
	);
}

export default App;
