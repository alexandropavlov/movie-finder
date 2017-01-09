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
            movieList: null
        }
    }

    componentDidMount() {
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
              movieList: data.results
            });
        }, (response) => {
            //error
        })
    }

    componentDidUpdate() {

    }

    getMovies() {
        const movieList = this.state.movieList
        //console.log('getMovies movielist', !!movieList)
        return movieList ? movieList.map((movie, i) => (
            <MoviePreview key = {movie.id} movie = {movie}/>     
        )) : null;
    }

    getPaginator() {
        return (<Paginator/>);
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