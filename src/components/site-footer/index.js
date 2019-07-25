'use strict';

import React from 'react';
import css from './css/styles.scss';

const getNowDate = () => {
	const now = new Date();
	return now;
}

const SiteFooter = props => {

	return (
		<div className="wrap">
			<footer className="site-footer">
				<p className="site-footer__copyright">&copy; Simon Hudson {getNowDate().getFullYear()}</p>
			</footer>
		</div>
	);

};

export default SiteFooter;
