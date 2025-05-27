import React, { useContext } from 'react';
import {
	UserContextProvider,
	FeatureFlagsContextProvider,
	LoadingContext,
	Body,
} from './components';

function App() {
	const [loading, setLoading] = useContext(LoadingContext);
	return (
		<FeatureFlagsContextProvider>
			<UserContextProvider>
				<Body />
			</UserContextProvider>
		</FeatureFlagsContextProvider>
	);
}

export default App;
