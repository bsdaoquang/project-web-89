/** @format */

import React from 'react';
import { users } from '../data/users';

const CardComponent = (props) => {
	const { color, children } = props;

	return (
		<div
			style={{
				padding: 20,
				margin: 10,
				backgroundColor: color ?? 'white',
				border: '1px solid #676767',
				borderRadius: 12,
			}}>
			{children}
		</div>
	);
};

export default CardComponent;
