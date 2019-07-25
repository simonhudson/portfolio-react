'use strict';

import React from 'react';
import css from './css/styles.scss';
import NewTabWarning from '~/components/new-tab-warning';
import Icon from '~/components/icon';

const LinkItem = props => {
	
	if (props.isDisabled) return null;
	
	return (
		<a className="external-links__item" href={props.href} rel="noopener noreferrer" target="_blank">
			<Icon type={props.icon} />
			<span className="visuallyhidden">{props.CTAText}</span>
			<NewTabWarning />
		</a>
	);

};

export default LinkItem;
