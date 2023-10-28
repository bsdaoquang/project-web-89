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

	useEffect(() => {
		getTotalPostByUser();
	}, [user]);

	const getTotalPostByUser = () => {};

	const getUserById = () => {
		const item = users.find((element) => element.id === id);

		item && setUser(item);
	};

	return <>{user && <p>{user.name}</p>}</>;
};

export default UserComponent;
