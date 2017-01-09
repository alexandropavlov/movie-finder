import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'

class MoviePreview extends Component {
    static propTypes = {

    };

    render() {
        const { movie } = this.props;
        const imgLink = theMovieDb.common.getImage({
            size: 'w300',
            file: movie.poster_path
        })
        return (
        	<div>
                <img src = {imgLink} alt = ''/>
            	<p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>Рейтинг: {movie.vote_average}</p>
            </div>
        )
    }
}

export default MoviePreview