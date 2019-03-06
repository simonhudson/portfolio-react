'use strict';

import React from 'react';
import logo from './logo.svg';
import css from './styles.scss';

const SiteLogo = props => {
	
	return (
		<img alt="" className={`site-logo site-logo--${props.context}`} src={logo} />
	);

};

export default SiteLogo;
