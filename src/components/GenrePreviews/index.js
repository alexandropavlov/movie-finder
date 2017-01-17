import React, { Component, PropTypes } from 'react'
import GenrePreview from '../GenrePreview'
import { connect } from 'react-redux'
import { loadGenrePreviews } from '../../AC/genrePreviews'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import { Link } from 'react-router'
import './style.scss'

class GenrePreviews extends Component {
    static propTypes = {

    }

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
			<div className = "genre-previews">
	            <h3 className = "genre-previews__name">{ genre.name }</h3>
                <div className = "genre-previews__list">
                    {this.getPreviews()}
                    <div className = "genre-previews__more">
                        <Link to = { categoryLink } className = "genre-previews__more-link">Показать еще</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => ({
    genrePreviews: state.genrePreviews
}), {
    loadGenrePreviews
})(GenrePreviews)