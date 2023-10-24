/** @format */

import { Home } from 'iconsax-react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useState } from 'react';
import AddTask from './components/AddTask';
import TasksComponent from './components/TasksComponent';
import ScoreComponent from './components/ScoreComponent';
import ButtonComponent from './components/ButtonComponent';
import { users } from './data/users';
import ListUserItem from './components/ListUserItem';

function App() {
	const usersWithCompany = users.filter((element) => element.company);

	const handleCheckEmail = (id) => {
		const user = users.find((element) => element.id === id); // '1' !== 1

		user && alert(user.email);
	};
	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-8 offset-2'>
					<ul>
						{usersWithCompany.map((item, index) => (
							<ListUserItem
								onCheckEmail={() => handleCheckEmail(item.id)}
								size={18}
								color={index % 2 ? 'coral' : 'green'}
								user={item}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
