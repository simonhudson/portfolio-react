'use strict';

import React from 'react';
import LinkItem from './item';
import links from './links.json';

const ExternalLinks = props => {

	return (
		<div className="external-links">
			{links.map((item, index) => <LinkItem key={`item--${index}`} {...item} />)}
		</div>
	);

};

export default ExternalLinks;
