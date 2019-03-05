'use strict';

import React, { Component } from 'react';

import SiteHeader from './components/site-header';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <SiteHeader />
            </>
        );
    }
};

export default App;