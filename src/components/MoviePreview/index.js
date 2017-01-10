import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import './style.scss'

class MoviePreview extends Component {
    static propTypes = {

    }

    getYear() {
        const { release_date } = this.props.movie
        return release_date ? '(' + release_date.substr(0, 4) + ')' : null
    }

    getGenres() {
        const { movie, genres } = this.props
        const { genre_ids } = movie
        if (genre_ids && genres) {
            let genresArr = [];
            genre_ids.forEach((genreId) => {
                const genreName = genres.reduce((value, current) => current.id === genreId ? current.name : value, null)
                genresArr.push(genreName)
            })
            return genresArr.join(', ')
        } else {
            return null
        }
    }

    getRatingNumberClasses() {
        const { movie } = this.props
        let colorClass;
        if (movie.vote_average < 5) {
            colorClass = 'is-red'
        } else if (5 <= movie.vote_average && movie.vote_average < 7) {
            colorClass = 'is-gray'
        } else {
            colorClass = 'is-green'
        }
        return `movie-preview__rating-number ${colorClass}`
    }

    render() {
        const { movie, number } = this.props
        const imgLink = theMovieDb.common.getImage({
            size: 'w300',
            file: movie.poster_path
        })
        return (
        	<div className = "movie-preview">
                <p className = "movie-preview__number">
                    {number}
                </p>
                <img className = "movie-preview__img"
                     src = {imgLink}
                     alt = {movie.title}
                />
                <div className = "movie-preview__content">
                	<h3 className = "movie-preview__title">
                        {movie.title}
                    </h3>
                    <p className = "movie-preview__original">
                        {movie.original_title} {this.getYear()}
                    </p>
                    <p className = "movie-preview__genres">
                        {this.getGenres()}
                    </p>
                    <p className = "moview-preview__rating">
                        Рейтинг: <span className = {this.getRatingNumberClasses()}>
                            {movie.vote_average}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default MoviePreview