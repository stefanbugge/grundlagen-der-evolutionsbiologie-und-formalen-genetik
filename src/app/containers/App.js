import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { dispatch } from 'redux'

import { getErratasByPage } from './../reducers/erratas'

import Page from "./../components/Page"
import Form from "./../components/Form"

export class App extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {}

    render() {
        const {erratasByPage} = this.props
        const pages = Object.keys(erratasByPage)
        return (
            <div>
                <div>
                  <Form />
                </div>
                <div>
                  { pages.map(page => <Page key={page} number={page} entries={erratasByPage[page]} />) }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      erratasByPage: getErratasByPage(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
