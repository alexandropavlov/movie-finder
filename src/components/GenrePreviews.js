import React, { Component, PropTypes } from 'react'
import GenrePreview from './GenrePreview'
import { connect } from 'react-redux'
import { loadGenrePreviews } from '../AC/genrePreviews'
import theMovieDb from '../lib/themoviedb'
import { rusify } from '../utils'
import { Link } from 'react-router'

class GenrePreviews extends Component {

	componentDidMount() {
		const { genre } = this.props
        this.props.loadGenrePreviews(genre.id, {
            callApi: theMovieDb.genres.getMovies,
            callApiData: rusify({
                id: genre.id
            })
        });
        console.log('genrePreviewsMount');
    }

    getPreviews() {
    	const { genre, genrePreviews } = this.props

    	return genrePreviews[genre.id] ? genrePreviews[genre.id].map((preview) => (<GenrePreview key = {preview.id} preview = {preview} />)) : null
    }

    render() {
        const { genre } = this.props
        const categoryLink = `/category/${genre.id}`;

        return (
			<div>
	            <p className = "genre-list__item-name">{ genre.name }</p>
                <div>
                    <Link to = { categoryLink }>Показать еще</Link>
                </div>
	            { this.getPreviews() }
            </div>
        )
    }
}

GenrePreviews.propTypes = {
//     article: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         comments: PropTypes.array,
//         text: PropTypes.string
//     }).isRequired
}


export default connect((state) => ({
    genrePreviews: state.genrePreviews
}), {
    loadGenrePreviews
})(GenrePreviews)