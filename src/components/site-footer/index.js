'use strict';

import React from 'react';
import css from './css/styles.scss';

const getNowDate = () => {
	const now = new Date();
	return now;
}

const SiteFooter = props => {

	return (
		<footer className="site-footer">
			<p className="site-footer__copyright">&copy; Simon Hudson {getNowDate().getFullYear()}</p>
		</footer>
	);

};

export default SiteFooter;
