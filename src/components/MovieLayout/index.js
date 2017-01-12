import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import { connect } from 'react-redux'
import { loadGenres } from '../../AC/genres'
import { browserHistory } from 'react-router'
import './style.scss'

class MovieLayout extends Component {
    static propTypes = {

    }

    constructor() {
        super();

        this.state = {
            data: null
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
        if (this.props.id != prevProps.id) {
            this.update()
        }
    }

    update() {
        theMovieDb.movies.getById(rusify({
            id: this.props.id
        }), (response) => {
            let data = JSON.parse(response)
            console.log('data', data)
            this.setState({
              data
            });
        }, (response) => {
            //error
        })
    }

    getContent() {
        const { data } = this.state
        if (data) {
            const posterLink = theMovieDb.common.getImage({
                size: 'w185',
                file: data.poster_path
            })
            const backdropLink = theMovieDb.common.getImage({
                size: 'w1920',
                file: data.backdrop_path
            })
            const showStyle = data.backdrop_path ? {backgroundImage: 'url('+ backdropLink +')'} : {}
            const showClass = data.backdrop_path ? 'movie__show has-image' : 'movie__show'
            const productionCountries = data.production_countries.map((value) => value.iso_3166_1).join(', ')
            return (
                <div className = "movie">
                    <div className = {showClass} style = {showStyle}>
                        <div className = "movie__content">
                            <div className = "container">
                                <h1 className = "movie__name">{data.title}</h1>
                                <p>{data.original_title}</p>
                                <p>{data.overview}</p>    
                            </div>
                        </div>
                    </div>                
                    <div className = "container">
                        <button className = "movie__back" onClick = {browserHistory.goBack}>Назад</button>
                        <div className = "movie__table">
                            <div className = "movie__row">
                                <div className = "movie__poster">
                                    <img src = {posterLink}/>
                                </div>
                                <div className = "movie__info">
                                    <p>Страна: {productionCountries}</p>
                                    <p>Слоган: {data.tagline}</p>
                                    <p>Статус: {data.status}</p>
                                    <p>Дата выхода: {data.release_date}</p>
                                    <p>Время: {data.runtime} мин.</p>
                                    <p>Бюджет: ${data.budget}</p>
                                    <p>Сборы: ${data.revenue}</p>
                                </div>
                                <div className = "movie__credits">
                                    <p>Тест</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div>
                {this.getContent()}
            </div>
        )
    }
}

export default connect(state => ({
    genres: state.genres
}), {
    loadGenres
})(MovieLayout)