/** @format */

import { Button, FloatButton, List, Space } from 'antd';
import { Edit, Trash } from 'iconsax-react';
import { useEffect, useState } from 'react';
import './App.css';
import UserComponent from './components/UserComponent';

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		data.length < 90 && getPosts();
	}, [data.length]);

	const getPosts = async () => {
		const api = `https://jsonplaceholder.typicode.com/posts/`;
		setIsLoading(true);
		await fetch(api, {
			method: 'get',
		})
			.then((result) => result.json())
			.then((res) => {
				setData(res);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleRemovePostById = (id) => {
		const index = data.findIndex((element) => element.id === id);

		if (index) {
			data.splice(index, 1);
			const items = [...data];
			setData(items);
		}
	};

	return (
		<>
			<div className='container mt-4'>
				<div className='row'>
					<div className='col-8 offset-2'>
						<h1>Total Posts {data.length}</h1>
						<List
							dataSource={data}
							loading={isLoading}
							renderItem={(item, _index) => (
								<List.Item
									key={item.id}
									extra={
										<Space>
											<Button
												onClick={() => handleRemovePostById(item.id)}
												type='text'
												icon={<Trash size={18} color='coral' />}
											/>
										</Space>
									}>
									<List.Item.Meta
										title={item.title}
										description={<UserComponent id={item.userId} />}
									/>
								</List.Item>
							)}
						/>
					</div>
				</div>
			</div>
			<FloatButton.BackTop />
		</>
	);
}

export default App;
