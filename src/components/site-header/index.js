'use strict';

import React from 'react';
import SiteLogo from '~/components/site-logo';
import css from './css/styles.scss';

const SiteHeader = props => {

	return (
		<header className="site-header">
			<SiteLogo context="header" />
			<p className="site-header__strap">
				<span>Web Design &amp; Development by&nbsp;</span>
				<span>Simon Hudson</span>
			</p>
		</header>
	);

};

export default SiteHeader;

