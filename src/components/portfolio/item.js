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
            <a className="btn btn--secondary item__link item__link--project" href={`http://www.github.com/simonhudson/${this.props.github}`} rel="noopener noreferrer" target="_blank">
                View <span className="visuallyhidden">{this.props.title}</span> on Github
            </a>
        );
    };

    render = () => {
        
        const { props } = this;
        
        const {
            github,
            madeWith,
            slug,
            text,
            title,
            url
        } = props;
        
        return (
				<div className="item">
					<div className="wrap item__wrap">
						<div className="item__img">
							<a href={props.url} rel="noopener noreferrer" target="_blank">
								<img alt="View project (opens in a new tab/window)" src="http://placehold.it/350x150" />
							</a>
						</div>
						<div className="item__content">
							<div className="item__info">
								<h2 className="item__title">
									<a className="item__title-link" href={props.url} rel="noopener noreferrer" target="_blank">
										{props.title}
									</a>
								</h2>
                                {this.renderMadeWith()}    
							</div>
							<div className="item__text" dangerouslySetInnerHTML={{ __html: this.generateCopyMarkup() }}>
							</div>
							<div className="item__links">
								<a className="btn btn--secondary item__link item__link--project" href={props.url} rel="noopener noreferrer" target="_blank">
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
