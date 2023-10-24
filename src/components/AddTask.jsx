/** @format */

import { Card, Input } from 'antd';
import React from 'react';

const AddTask = ({ onAddTask }) => {
	return (
		<Card>
			<Input.Search
				size='large'
				enterButton='Add Task'
				placeholder='Add new task'
				onSearch={(val) =>
					onAddTask({
						id: val,
						title: val,
					})
				}
			/>
		</Card>
	);
};

export default AddTask;
