/** @format */

import React, { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';

const TextComponent = (props) => {
	const { text, color, size, margin, fontWeight } = props;

	const themeCtx = useContext(ThemeContext).theme;

	return (
		<p
			style={{
				color: color
					? color
					: themeCtx.theme === 'light'
					? '#212121'
					: '#fafafa',
				fontSize: size ?? 14,
				margin: margin ?? 0,
				fontWeight: fontWeight ?? '500',
			}}>
			{text}
		</p>
	);
};

export default TextComponent;
