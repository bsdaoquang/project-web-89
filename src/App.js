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

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col bg-success'>
					<HomeScreen
						user={user}
						handlePushProfile={(val) => setProfiles([...profiles, val])}
					/>
				</div>
				<div className='col bg-primary'>
					<ProfileScreen profiles={profiles} />
				</div>
			</div>
		</div>
	);
}

export default App;
