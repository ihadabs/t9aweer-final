import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginPage } from './routes/login';
import './styles/index.css';
import './styles/login.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<LoginPage></LoginPage>
	</React.StrictMode>
);
