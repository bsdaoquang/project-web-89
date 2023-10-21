/** @format */

import React from 'react';
import TextComponent from './TextComponent';

const UserComponent = (props) => {
	const { name, email, company, user } = props;

	return (
		<div>
			<h5>{user.name}</h5>
			<p>{user.address}</p>
		</div>
	);
};

export default UserComponent;
