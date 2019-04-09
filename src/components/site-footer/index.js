'use strict';

import React from 'react';
import css from './css/styles.scss';
import SiteLogo from '~/components/site-logo';
import content from '~/content/about.json';
import CVLink from '~/components/cv-link';
import GithubLink from '~/components/github-link';
import selfImg from '~/assets/imgs/self.jpg';

const SiteFooter = props => {

	return (
		<footer className="site-footer">
			<div className="wrap site-footer__wrap">
				<img alt="Simon Hudson" className="site-footer__img" src={selfImg} />
				<h2 className="site-footer__heading">{content.heading}</h2>
				<p>{content.text}</p>
				<div className="site-footer__links">
					<CVLink />
					<GithubLink />
				</div>
				<SiteLogo context="footer" />
			</div>
		</footer>
	);

};

export default SiteFooter;
