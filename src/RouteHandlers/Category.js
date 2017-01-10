import React, { Component, PropTypes } from 'react'
import CategoryLayout from '../components/CategoryLayout'

class Category extends Component {
    static propTypes = {

    };

    render() {
        return (
        	<div>
            	<CategoryLayout page = {this.props.params.page} id = {this.props.params.id} />
            </div>
        )
    }
}

export default Category