/** @format */

import { createContext } from 'react';

const defaultValue = { lang: 'vi' };

const LangContext = createContext(defaultValue);

export default LangContext;
