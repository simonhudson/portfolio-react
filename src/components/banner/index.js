'use strict';

import React from 'react';
import css from './css/styles.scss';
import ExternalLinks from '~/components/external-links';
import selfImg from '~/assets/imgs/self.jpg';

const Banner = props => {

	return (
		<div className="banner__outer">
			<div className="banner wrap">
				<div className="banner__primary">
					<h1 className="banner__title">Hi there, my name's Simon. I am an experienced web designer/front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites.</h1>
				</div>
				<div className="banner__secondary">
					<ExternalLinks />
				</div>
			</div>
		</div>
	);

};

export default Banner;
