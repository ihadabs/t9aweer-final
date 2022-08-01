import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProfilePage } from './routes/profile';
import './styles/index.css';
import './styles/login.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ProfilePage></ProfilePage>
	</React.StrictMode>
);
