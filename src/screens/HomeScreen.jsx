/** @format */

import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../contexts/themeContext';
import { Link, useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import { Button, Card, Input, List } from 'antd';
import { posts } from '../data/posts';
import { SearchNormal1 } from 'iconsax-react';

const HomeScreen = () => {
	const langCtx = useContext(ThemeContext).theme;

	const [searchKey, setSearchKey] = useState('');

	const navigate = useNavigate();

	const bills = [
		{
			date: 'b',
			total: 18,
		},
		{
			date: 'd',
			total: 36,
		},
		{
			date: 'f',
			total: 258,
		},
		{
			date: 'faf',
			total: 28927,
		},
		{
			date: 'klfas',
			total: 25363,
		},
		{
			date: 'hasgjhs',
			total: 6373738,
		},
		{
			date: 'a',
			total: 36268389,
		},
	];

	const handleDemoJavascript = () => {
		// //number
		// bills.sort((a, b) => a.total - b.total);
		// // alphabe
		// bills.sort((a, b) => a.date.localeCompare(b.date));
		// console.log(bills);
	};

	return (
		<>
			<h1>Home screen</h1>
			<Button onClick={handleDemoJavascript}>Test</Button>

			{/* <div className='col col-8 offset-2'>
				<Input
					allowClear
					value={searchKey}
					size='large'
					onChange={(event) => setSearchKey(event.target.value)}
					onPressEnter={() => navigate(`/search?q=${searchKey}`)}
					prefix={<SearchNormal1 size={18} color='#676767' />}
					placeholder='Search'
				/> */}

			{/* <Card
					extra={
						<Input
							allowClear
							value={searchKey}
							onChange={(event) => setSearchKey(event.target.value)}
							prefix={<SearchNormal1 size={18} color='#676767' />}
							placeholder='Search'
						/>
					}>
					<List
						dataSource={searchKey ? results : posts}
						renderItem={(item) => (
							<List.Item key={item.id}>
								<List.Item.Meta title={item.title} description={item.body} />
							</List.Item>
						)}
					/>
				</Card> */}
		</>
	);
};

export default HomeScreen;
