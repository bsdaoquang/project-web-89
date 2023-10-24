/** @format */

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useState } from 'react';

function App() {
	const [profiles, setProfiles] = useState([]);

	const user = {
		name: 'MindX',
		address: 'HCM city',
	};

	return <div className='container-fluid'></div>;
}

export default App;
