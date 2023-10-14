/** @format */

import React from 'react';
import TextComponent from './TextComponent';

const UserComponent = (props) => {
	const { name, email, company } = props;

	return (
		<div>
			<h5>{name + ' Mindx'}</h5>

			<TextComponent text={`Email: ${email}`} size={14} color='#212121' />
			<TextComponent text={`Comapy: ${company.name}`} />
		</div>
	);
};

export default UserComponent;
