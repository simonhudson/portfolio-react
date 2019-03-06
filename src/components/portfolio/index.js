'use strict';

import React from 'react';
import Item from './item';
import data from './data.json';

const Portfolio = props => {
	
	return (
		<div className="portfolio">
			{data.map((item, index) => <Item key={`item--${index}`}	{...item} />)};
		</div>
	);

};

export default Portfolio;
