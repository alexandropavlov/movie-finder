import React, { Component, PropTypes }  from 'react'
import GenrePreviews from './GenrePreviews'
import { connect } from 'react-redux'
import { loadGenres } from '../AC/genres'

class GenreList extends Component {
    static propTypes = {
        //articles: PropTypes.array.isRequired,
        //from accordion decorator
        //isOpen: PropTypes.func.isRequired,
        //toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.loadGenres()
    }

    render() {
        const { genres } = this.props

        const genrePreviews = genres.map(genre => (
            <li key={ genre.id }>
                <GenrePreviews genre={genre} />
            </li>
        ))

        return (
            <div>
                <h1>Жанры</h1>
                <ul>
                    {genrePreviews}
                </ul>
            </div>
        )

    }
}

export default connect(state => ({
    genres: state.genres
}), {
    loadGenres
})(GenreList)