'use strict';

import React from 'react';
import css from './css/styles.scss';
import selfImg from '~/assets/imgs/self.jpg';

const Banner = props => {

	return (
		<div className="banner__outer">
			<div className="banner wrap">
				<h1 className="banner__title">Hi there, my name's Simon. I am an experienced web designer/front-end developer who specialises in writing lean, standards-compliant HTML, CSS and JavaScript to create accessible and usable websites.</h1>
			</div>
		</div>
	);

};

export default Banner;
