import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Header from '../components/Header'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root