import React, { Component, PropTypes } from 'react'
import SearchLayout from '../components/SearchLayout'

class Search extends Component {
    static propTypes = {

    };

    render() {
        return (
            <SearchLayout query = {this.props.location.query.q} page = {this.props.location.query.page}/>
        )
    }
}

export default Search