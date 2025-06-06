import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import { LoadingContextProvider } from './components/index';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
	dsn: 'https://03c4d2a1459c4fabb9eac2419cf773db@o1067256.ingest.sentry.io/6060866',
	integrations: [new Integrations.BrowserTracing()],
	environment: import.meta.env.NODE_ENV,
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
	// debug: true,
	beforeSend(event, hint) {
		// Check if it is an exception, and if so, show the report dialog
		if (event.exception) {
			Sentry.showReportDialog({ eventId: event.event_id });
		}
		return event;
	},
});

ReactDOM.render(
	<React.StrictMode>
		<LoadingContextProvider>
			<App />
		</LoadingContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
