'use strict';

import React, { Component } from 'react';
import SiteLogo from '~/components/site-logo';
import css from './css/styles.scss';

class SiteHeader extends Component {
	
	constructor(props) {
		super(props);
		this.state = {};
		this.state.isStuck = false;
	}

    componentDidMount = () => {
        this.eventListeners();
    }
	
	eventListeners = () => {
		window.addEventListener('scroll', () => {
			const html = document.querySelector('html');
			const top = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
			const method = (top > 0) ? 'add' : 'remove';
			html.classList[method]('is-scrolled');
		});
	}
	
	render = () => {
		return (
			<header className="site-header">
				<div className="wrap site-header__wrap">
					<SiteLogo context="header" />
					<p className="site-header__strap">
						<span>Web Design &amp; Development by&nbsp;</span>
						<span>Simon Hudson</span>
					</p>
				</div>
			</header>
		);
	}

}

export default SiteHeader;
