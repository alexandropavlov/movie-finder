import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { Link } from 'react-router'
import './style.scss';

class GenrePreview extends Component {
    static propTypes = {
        
    }

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
        const link = `/movie/${preview.id}`
        return (
            <Link to = {link}>
    			<div className="genre-preview" style={{
                    backgroundImage: 'url(' + imgLink + ')'
                }}>
    	            <h3 className="genre-preview__title">{ preview.title }</h3>
                </div>
            </Link>
        )
    }
}


export default GenrePreview