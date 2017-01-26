import React, { Component, PropTypes } from 'react'
import CategoryLayout from '../components/CategoryLayout'

class Category extends Component {
    static propTypes = {

    };

    render() {
        return (
            <CategoryLayout page = {this.props.params.page} id = {this.props.params.id} />
        )
    }
}

export default Category