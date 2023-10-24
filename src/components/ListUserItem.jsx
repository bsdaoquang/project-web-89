/** @format */

import { Button } from 'antd';
import { Building } from 'iconsax-react';
import React from 'react';

const ListUserItem = ({ user, color, size, onCheckEmail }) => {
	return (
		<div
			style={{
				marginBottom: 16,
			}}>
			<h5
				style={{
					color: color ?? '#212121',
					fontSize: size ?? 22,
				}}>
				{user.name}{' '}
				{user.company && <Building variant='Bold' size={20} color='#676767' />}
			</h5>
			<p>{user.email}</p>
			<Button onClick={onCheckEmail}>Check</Button>
		</div>
	);
};

export default ListUserItem;
