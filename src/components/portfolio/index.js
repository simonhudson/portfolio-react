'use strict';

import React from 'react';
import Item from './item';
import content from '~/content/portfolio.json';
import css from './css/styles.scss';

const Portfolio = props => {
	
	return (
		<main className="portfolio">
			{content.map((item, index) => <Item key={`item--${index}`}	{...item} />)}
		</main>
	);

};

export default Portfolio;
