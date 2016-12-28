import React, { Component, PropTypes } from 'react'
import { IMAGES_LINK } from '../../config'
import './style.scss';

class GenrePreview extends Component {

    render() {
        const { preview } = this.props
        const imgLink = preview.backdrop_path ? IMAGES_LINK + preview.backdrop_path : IMAGES_LINK + preview.poster_path;
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