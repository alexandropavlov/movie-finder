import React, { Component, PropTypes }  from 'react'
import GenrePreviews from '../GenrePreviews'
import { connect } from 'react-redux'
import { loadGenres } from '../../AC/genres'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import './style.scss'

class GenreList extends Component {
    static propTypes = {

    }

    componentDidMount() {
        console.log('theMovieDb.genres.getList', theMovieDb.genres.getList);

        this.props.loadGenres({
            callApi: theMovieDb.genres.getList,
            callApiData: rusify({})
        })
    }

    render() {
        const { genres } = this.props

        const genrePreviews = genres.map(genre => (
            <li className = "genre-list__item" key = { genre.id }>
                <GenrePreviews genre={genre} />
            </li>
        ))

        return (
            <div className = "genre-list">
                <h2 className = "genre-list__title">Жанры</h2>
                <ul className= "genre-list__list">
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