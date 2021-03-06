'use strict';

import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount = () => {
        
    }
    
    generateCopyMarkup = () => {
        let paragraphs = [];
        this.props.text.map((item, index) => paragraphs.push(`<p>${item}</p>`));
        return paragraphs.join(' ');
    }

    renderMadeWith = () => {
        if (!this.props.madeWith) return null;
        return (
            <ul className="item__made-with">				
                {this.props.madeWith.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        );
    };
    
    renderGitHub = () => {
        if (!this.props.github) return null;
        return (
            <a className="btn--primary--hollow item__link" href={`http://www.github.com/simonhudson/${this.props.github}`} rel="noopener noreferrer" target="_blank">
                View <span className="visuallyhidden">{this.props.title}</span> on Github
            </a>
        );
    };

    render = () => {
        
        const { props } = this;
        
        const {
            github,
            madeWith,
            omit,
            slug,
            text,
            title,
            url
        } = props;
        
        if (omit) return null;
        
        return (
				<div className="item">
					<div className="wrap item__wrap">
						<div className="item__img">
							<img alt="View project (opens in a new tab/window)" src="http://placehold.it/350x150" />
						</div>
						<div className="item__content">
							<div className="item__info">
								<h2 className="item__title">{props.title}</h2>
                                {this.renderMadeWith()}    
							</div>
							<div className="item__text" dangerouslySetInnerHTML={{ __html: this.generateCopyMarkup() }}>
							</div>
							<div className="item__links">
								<a className="btn--primary item__link" href={props.url} rel="noopener noreferrer" target="_blank">
									View <span className="visuallyhidden">{props.title}</span>project
								</a>
                                {this.renderGitHub()}
							</div>
						</div>
					</div>
				</div>
        );
    }
}

export default Item;
