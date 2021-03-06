import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import MoviePreview from '../MoviePreview'
import { connect } from 'react-redux'
import { loadGenres } from '../../AC/genres'
import Paginator from '../Paginator'
import './style.scss'

class CategoryLayout extends Component {
    static propTypes = {

    }

    constructor() {
        super();

        this.state = {
            page: null,
            totalPages: null,
            movieList: null
        }
    }

    componentDidMount() {
        this.props.loadGenres({
            callApi: theMovieDb.genres.getList,
            callApiData: rusify({})
        })
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
              page: data.page,
              totalPages: data.total_pages,
              movieList: data.results
            });
        }, (response) => {
            //error
        })
    }

    getCategoryName() {
        const { genres, id } = this.props
        return genres ? genres.reduce((value, current) => current.id == id ? current.name : value, null) : null
    }

    getMovies() {
        const { movieList, page } = this.state
        const { genres } = this.props
        return movieList ? movieList.map((movie, i) => {
            const number = ((page - 1) * 20) + i + 1
            return (
                <li className = "category__item" key = {movie.id}>
                    <MoviePreview movie = {movie} genres = {genres} number = {number} />
                </li>
            )   
        }) : null
    }

    getPaginator() {
        const basePath = `/category/${this.props.id}/`;
        return this.state.page ? (<Paginator basePath = {basePath} total = {this.state.totalPages} current = {this.state.page} />) : null
    }

    render() {
        return (
            <div className = "container">
                <div className = "category">
                    <h1 className = "category__name">{this.getCategoryName()}</h1>
                    <ul className = "category__list">{this.getMovies()}</ul>
                    {this.getPaginator()}
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    genres: state.genres
}), {
    loadGenres
})(CategoryLayout)