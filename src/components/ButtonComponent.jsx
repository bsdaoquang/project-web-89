/** @format */

import React from 'react';
import { Button } from 'antd';

const ButtonComponent = ({
	type,
	onPress,
	color,
	outLine,
	width,
	height,
	text,
	icon,
	isShadow,
	isRight,
}) => {
	return (
		<div>
			<Button onClick={type === 'incre' ? () => onPress(1) : () => onPress(-1)}>
				{type === 'incre' ? '+' : '-'}
			</Button>
		</div>
	);
};

export default ButtonComponent;
