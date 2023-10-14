/** @format */

import React from 'react';
import UserComponent from '../components/UserComponent';
import HeaderComponent from '../components/HeaderComponent';
import { users } from '../data/users';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
	return (
		<div>
			<HeaderComponent />

			<CardComponent color='coral'>
				<p>Profile screen</p>
			</CardComponent>

			<CardComponent>
				{users.map((user) => (
					<UserComponent
						key={user.id}
						name={user.name}
						email={user.email}
						company={user.company}
					/>
				))}
			</CardComponent>
		</div>
	);
};

export default HomeScreen;
