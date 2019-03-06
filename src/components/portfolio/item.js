'use strict';

import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount = () => {
        
    }

    render = () => {
        
        const {
            github,
            madeWith,
            slug,
            text,
            title,
            url
        } = this.props;
        
        return (
				<div className="item">
					<div className="wrap item__wrap">
						<div className="item__img">
							<a href={this.props.url} rel="noopener noreferrer" target="_blank">
								<img alt="View project (opens in a new tab/window)" src="http://placehold.it/350x150" />
							</a>
						</div>
						<div className="item__content">
							<div className="item__info">
								<h2 className="item__title">
									<a className="item__title-link" href={url} rel="noopener noreferrer" target="_blank">
										{title}
									</a>
								</h2>
                                {(madeWith &&
    								<ul className="item__made-with">				
    									{madeWith.map((item, index) => <li key={index}>{item}</li>)}
    								</ul>
                                )}
							</div>
							<div className="item__text">
								{(text && text.map((item, index) => <p key={index}>{item}</p>))}
							</div>
							<div className="item__links">
								<a className="btn btn--secondary item__link item__link--project" href={url} rel="noopener noreferrer" target="_blank">
									View <span className="visuallyhidden">{title}</span>project
								</a>
                                {(github &&
    								<a className="btn btn--secondary item__link item__link--project" href="http://www.github.com/simonhudson/" rel="noopener noreferrer" target="_blank">
    									View <span className="visuallyhidden">{title}</span> on Github
    								</a>
                                )}
							</div>
						</div>
					</div>
				</div>
        );
    }
}

export default Item;
