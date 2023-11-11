/** @format */

import React, { useEffect } from 'react';
import TextComponent from './TextComponent';
import { users } from '../data/users';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../constants';
import { axiosClient } from '../axiosClient';

const UserComponent = (props) => {
	const { id } = props;
	const [user, setUser] = useState();

	useEffect(() => {
		getUserById();
	}, [id]);

	const getUserById = async () => {
		const api = `/users/${id}`;
		const res = await axiosClient(api);

		if (res) {
			setUser(res);
		}
	};

	return (
		<>
			{user && (
				<Link to={`../profile?uid=${id}`} style={{ margin: 0 }}>
					{user.name}
				</Link>
			)}
		</>
	);
};

export default UserComponent;
