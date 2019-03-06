'use strict';

import React from 'react';
import SiteLogo from '~/components/site-logo';
import css from './styles.scss';

const SiteHeader = props => {
	
	return (
		<header className="site-header">
			<div className="wrap site-header__wrap">
				<SiteLogo context="header" />
				<p className="site-header__strap">
					<span>Web Design &amp; Development&nbsp;<em>by</em>&nbsp;</span>
					Simon Hudson
				</p>
			</div>
		</header>
	);

};

export default SiteHeader;
