/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { posts } from '../data/posts';

const SearchScreen = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [results, setResults] = useState([]);

	const searchKey = searchParams.get('q');

	useEffect(() => {
		if (searchKey) {
			const items = posts.filter((element) =>
				element.title.includes(searchKey)
			);

			setResults(items);
		}
	}, [searchKey]);

	return (
		<div>
			{results.map((item) => (
				<p>{item.title}</p>
			))}
		</div>
	);
};

export default SearchScreen;
