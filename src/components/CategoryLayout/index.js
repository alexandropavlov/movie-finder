import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import MoviePreview from '../MoviePreview'
import Paginator from '../Paginator'
import './style.scss'

class CategoryLayout extends Component {

    constructor() {
        super();

        this.state = {
            categoryId: null, 
            categoryName: null,
            page: null,
            totalPages: null,
            movieList: null
        }
    }

    componentDidMount() {
        this.update()
    }

    componentDidUpdate(prevProps) {
        if (this.props.page != prevProps.page) {
            this.update()
        }
    }

    update() {
        theMovieDb.genres.getMovies(rusify({
            id: this.props.id,
            page: this.props.page
        }), (response) => {
            let data = JSON.parse(response)
            console.log('data', data)
            this.setState({
              categoryId: data.id,
              categoryName: 'Название категории',
              page: data.page,
              totalPages: data.total_pages,
              movieList: data.results
            });
        }, (response) => {
            //error
        })
    }

    getMovies() {
        const movieList = this.state.movieList
        //console.log('getMovies movielist', !!movieList)
        return movieList ? movieList.map((movie, i) => (
            <MoviePreview key = {movie.id} movie = {movie}/>     
        )) : null
    }

    getPaginator() {
        const basePath = `/category/${this.props.id}/`;
        return this.state.page ? (<Paginator basePath = {basePath} total = {this.state.totalPages} current = {this.state.page} />) : null
    }

    render() {
        return (
            <div>
                <p>{this.props.page}</p>
                <div>{this.getMovies()}</div>
                {this.getPaginator()}
            </div>
        )
    }
}

CategoryLayout.propTypes = {
//     article: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         comments: PropTypes.array,
//         text: PropTypes.string
//     }).isRequired
}


export default CategoryLayout