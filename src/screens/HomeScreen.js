/** @format */

import React, { useState } from 'react';

const HomeScreen = () => {
	const [profile, setProfile] = useState({
		name: '',
		email: '',
		address: '',
		phone: '',
		gender: 'male',
	});

	const handleSetProfile = (key, val) => {
		const items = profile;

		items[`${key}`] = val;

		setProfile({ ...items });

		// Biến tham chiếu -> lưu địa chỉ ô nhớ, nên muốn thay đổi thì phải thay đổi địa chỉ ô nhớ
		// biến tham trị -> lưu giá trị của ô nhớ, nên muốn thay đổi thì chỉ cần thay đổi giá trị ô nhớ
	};

	return (
		<div>
			<input
				type='text'
				value={profile.name2}
				name=''
				onChange={(val) => handleSetProfile('name2', val.target.value)}
				id=''
			/>
			<input
				type='text'
				value={profile.address}
				name=''
				onChange={(val) => handleSetProfile('address', val.target.value)}
				id=''
			/>
			<input
				type='text'
				value={profile.email}
				name=''
				onChange={(val) => handleSetProfile('email', val.target.value)}
				id=''
			/>
			<input
				type='text'
				value={profile.phone}
				name=''
				onChange={(val) => handleSetProfile('phone', val.target.value)}
				id=''
			/>
			<input
				type='text'
				value={profile.gender}
				name=''
				onChange={(val) => handleSetProfile('gender', val.target.value)}
				id=''
			/>
			<button onClick={() => console.log(profile)}>get input</button>
		</div>
	);
};

export default HomeScreen;
