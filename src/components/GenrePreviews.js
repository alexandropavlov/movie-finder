import React, { Component, PropTypes } from 'react'
import GenrePreview from './GenrePreview'
import { connect } from 'react-redux'
import { loadGenrePreviews } from '../AC/genrePreviews'

class GenrePreviews extends Component {

	componentDidMount() {
		const { genre } = this.props
        this.props.loadGenrePreviews(genre.id)
    }

    getPreviews() {
    	const { genre, genrePreviews } = this.props
    	// if (genrePreviews[genre.id]) {
    	// 	return 
    	// } else {
    	// 	return null
    	// }
    	return genrePreviews[genre.id] ? genrePreviews[genre.id].map((preview) => (<GenrePreview key={preview.id} preview = {preview} />)) : null
    }

    render() {
        const { genre} = this.props
        //console.log('genre.id', genre.id)
        //console.log('genrePreviews', genrePreviews)
        //console.log('genrePreviews[genre.id]', genrePreviews[genre.id + ''])
        //const foo = JSON.stringify(genrePreviews)
        // for (key in genrePreviews) {
        // 	console.log(key)
        // }
        // if (genrePreviews[genre.id]) {
        // 	console.log('go fuck yourself')
        // 	console.log('genrePreviews[genre.id]', genrePreviews[genre.id])
        // }

        return (
			<div>
	            <p>{ genre.name }</p>
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