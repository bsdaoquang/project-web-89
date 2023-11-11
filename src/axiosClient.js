/** @format */

import axios from 'axios';
import { constants } from './constants';

export const axiosClient = async (api) => {
	try {
		const res = await axios.get(constants.BASE_URL + api);

		if (res && res.status === 200 && res.data) {
			return res.data;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};
