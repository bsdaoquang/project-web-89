/** @format */

import React from 'react';
import HeaderComponent from '../components/HeaderComponent';

const ProfileScreen = ({ profiles }) => {
	return (
		<div>
			<HeaderComponent />

			{profiles.map((item, index) => (
				<p key={`profile${index}`}>{item.email}</p>
			))}
		</div>
	);
};

export default ProfileScreen;
