'use strict';

import React from 'react';
import css from './css/styles.scss';
import SiteLogo from '~/components/site-logo';
import content from '~/content/about.json';
import selfImg from '~/assets/imgs/self.jpg';

const SiteFooter = props => {

	return (
		<footer className="site-footer">
			<div className="wrap site-footer__wrap">
				<img alt="Simon Hudson" className="site-footer__img" src={selfImg} />
				<h2 className="site-footer__heading">{content.heading}</h2>
				<p>{content.text}</p>
				<div className="site-footer__links">
					<a className="btn--primary--hollow" href={content.cvLink} rel="noopener noreferrer" target="_blank">
						Download my CV
					</a>
					<a className="btn--primary--hollow" href={content.githubProfile} rel="noopener noreferrer" target="_blank">
						View my Github profile
					</a>
				</div>
				<SiteLogo context="footer" />
			</div>
		</footer>
	);

};

export default SiteFooter;
