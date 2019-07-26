'use strict';

import React, { Component } from 'react';
import './assets/css/styles.scss';

import Banner from '~/components/banner';
import Portfolio from '~/components/portfolio';
import SiteHeader from '~/components/site-header';
import SiteFooter from '~/components/site-footer';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="wrap">
                <SiteHeader />
                <Banner />
                <Portfolio />
                <SiteFooter />
            </div>
        );
    }
}

export default App;