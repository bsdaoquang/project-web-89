/** @format */

import { Card } from 'antd';
import React from 'react';

const TasksComponent = ({ tasks }) => {
	return (
		<Card className='mt-4'>
			<ul>
				{tasks.map((item, index) => (
					<li key={`task${index}`}>{item.title}</li>
				))}
			</ul>
		</Card>
	);
};

export default TasksComponent;
