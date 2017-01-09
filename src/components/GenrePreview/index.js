import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import './style.scss';

class GenrePreview extends Component {

    render() {
        const { preview } = this.props
        let imgLink
        if (preview.backdrop_path) {
            imgLink = theMovieDb.common.getImage({
                size: 'w300',
                file: preview.backdrop_path
            })
        } else if (preview.poster_path) {
            imgLink = theMovieDb.common.getImage({
                size: 'w300',
                file: preview.poster_path
            })
        } else {
            imgLink = '/images/no-image.png'
        }
        return (
			<div className="genre-preview" style={{
                backgroundImage: 'url(' + imgLink + ')'
            }}>
	            <h3 className="genre-preview__title">{ preview.title }</h3>
            </div>
        )
    }
}

GenrePreview.propTypes = {
//     article: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         comments: PropTypes.array,
//         text: PropTypes.string
//     }).isRequired
}


export default GenrePreview