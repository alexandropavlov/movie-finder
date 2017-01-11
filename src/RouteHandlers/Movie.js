import React, { Component, PropTypes } from 'react'
import MovieLayout from '../components/MovieLayout'

class Movie extends Component {
    static propTypes = {

    };

    render() {
        return (
            <MovieLayout id = {this.props.params.id}/>
        )
    }
}

export default Movie