import React, { Component, PropTypes } from 'react'
import GenreList from '../components/GenreList'

class Index extends Component {
    static propTypes = {
        //articles: PropTypes.array.isRequired
    };

    render() {

        return (
            <div>
                <GenreList/>
            </div>
        )
    }
}

export default Index