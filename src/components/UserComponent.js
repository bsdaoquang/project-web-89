/** @format */

import React, { useEffect } from 'react';
import TextComponent from './TextComponent';
import { users } from '../data/users';
import { useState } from 'react';

const UserComponent = (props) => {
	const { id } = props;
	const [user, setUser] = useState();

	useEffect(() => {
		getUserById();
	}, [id]);

	const getUserById = async () => {
		const api = `https://jsonplaceholder.typicode.com/users/${id}`;

		await fetch(api, {
			method: 'get',
		})
			.then((result) => result.json())
			.then((res) => {
				setUser(res);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return <>{user && <p>{user.name}</p>}</>;
};

export default UserComponent;
