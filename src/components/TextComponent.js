/** @format */

import React from 'react';

const TextComponent = (props) => {
	const { text, color, size, margin, fontWeight } = props;

	return (
		<p
			style={{
				color: color ?? 'coral',
				fontSize: size ?? 12,
				margin: margin ?? 0,
				fontWeight: fontWeight ?? '500',
			}}>
			{text}
		</p>
	);
};

export default TextComponent;
