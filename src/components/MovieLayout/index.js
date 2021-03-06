import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import { browserHistory } from 'react-router'
import MovieTrailer from '../MovieTrailer'
import getCountryName from '../../lib/isocountries'
import { Link } from 'react-router'
import './style.scss'

class MovieLayout extends Component {
    static propTypes = {

    }

    constructor() {
        super();

        this.state = {
            data: null,
            credits: null,
            trailers: null
        }
    }

    componentDidMount() {
        this.update()
    }

    componentDidUpdate(prevProps) {
        if (this.props.id != prevProps.id) {
            this.update()
        }
    }

    update() {
        // get Movie Info
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

        // get Movie Credits
        theMovieDb.movies.getCredits(rusify({
            id: this.props.id
        }), (response) => {
            let credits = JSON.parse(response)
            console.log('credits', credits)
            this.setState({
              credits
            });
        }, (response) => {
            //error
        })
    }

    getCast() {
        const { credits } = this.state
        return (credits && credits.cast && credits.cast.length)
            ? (<div>
                <h4 className = "movie__cast-title">В главных ролях:</h4>
                {credits.cast.slice(0, 10).map((person) => (<p className = "movie__cast-person" key = {person.cast_id}>{person.name}</p>))}
            </div>)
            : null
    }

    getCrew() {
        const { credits } = this.state
        if (credits && credits.crew && credits.crew.length) {
            const director = credits.crew.reduce((prev, person) => person.job.toLowerCase() === 'director' ? person.name : prev, null)
            return director ? (<p>Режиссер: {director}</p>) : null
        } else {
            return null
        }
    }

    getYear() {
        const { data } = this.state
        return (data && data.release_date) ? (<p>Год: {data.release_date.substr(0,4)}</p>) : null
    }

    getProductionCountries() {
        const { data } = this.state
        return (data && data.production_countries && data.production_countries.length)
            ? (<p>Страна: {this.formatCountries(data.production_countries)}</p>)
            : null
    }

    getTagline() {
        const { data } = this.state
        return (data && data.tagline) ? (<p>Слоган: {data.tagline}</p>) : null
    }

    getGenres() {
        const { data } = this.state
        if (data && data.genres && data.genres.length) {
            const genreLinks = data.genres.reduce((prev, genre, i, arr) => {
                const link = `/category/${genre.id}`
                if (i < arr.length - 1) {
                    prev.push(<span key = {genre.id}><Link className = "movie__link" to = {link}>{genre.name}</Link>, </span>)
                } else {
                    prev.push(<span key = {genre.id}><Link className = "movie__link" to = {link}>{genre.name}</Link></span>)
                }
                return prev
            }, [])
            return (<p>Жанры: {genreLinks}</p>)
        } else {
            return null
        }
    }

    getRuntime() {
        const { data } = this.state
        return (data && data.runtime) ? (<p>Время: {this.formatRuntime(data.runtime)}</p>) : null
    }

    getBudget() {
       const { data } = this.state
       return (data && data.budget) ? (<p>Бюджет: {this.formatMoney(data.budget)}</p>) : null
    }

    getRevenue() {
        const { data } = this.state
        return (data && data.revenue) ? (<p>Сборы: {this.formatMoney(data.revenue)}</p>) : null
    }

    getReleaseDate() {
        const { data } = this.state
        return (data && data.release_date) ? (<p>Дата выхода: {this.formatDate(data.release_date)}</p>) : null
    }

    formatCountries(countries) {
        return countries.map((value) => getCountryName(value.iso_3166_1)).join(', ')
    }

    formatDate(date) {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        const year = date.substr(0,4)
        const month = months[+date.substr(5,2) - 1]
        const day = date.substr(8,2)
        return `${day} ${month} ${year}`
    }

    formatRuntime(runtime) {
        const formattedRuntime = ('0' + Math.floor(runtime / 60)).substr(-2) + ':' + ('0' + runtime % 60).substr(-2)
        return `${runtime} мин. / ${formattedRuntime}`
    }

    formatMoney(money) {
        return '$' + money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    getRating() {
        const { data } = this.state
        return (data)
            ? (<p className = "movie__rating">
                Рейтинг: <span className = {this.getRatingNumberClasses()}>{data.vote_average} </span>
                <span className = "movie__rating-count">(голосов: {data.vote_count})</span>
            </p>)
            : null
    }

    getRatingNumberClasses() {
        const { data } = this.state
        let colorClass;
        if (data.vote_average < 5) {
            colorClass = 'is-red'
        } else if (5 <= data.vote_average && data.vote_average < 7) {
            colorClass = 'is-gray'
        } else {
            colorClass = 'is-green'
        }
        return `movie__rating-number ${colorClass}`
    }

    getContent() {
        const { data } = this.state
        if (data) {
            const posterLink = (data.poster_path) ? theMovieDb.common.getImage({
                size: 'w185',
                file: data.poster_path
            }) : '/images/no-image-portrait.png'
            
            const backdropLink = theMovieDb.common.getImage({
                size: 'w1920',
                file: data.backdrop_path
            })
            const showStyle = data.backdrop_path ? {backgroundImage: 'url('+ backdropLink +')'} : {}
            const showClass = data.backdrop_path ? 'movie__show has-image' : 'movie__show'
            
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
                                    {this.getYear()}
                                    {this.getProductionCountries()}
                                    {this.getTagline()}
                                    {this.getCrew()}
                                    {this.getGenres()}
                                    {this.getReleaseDate()}
                                    {this.getBudget()}
                                    {this.getRevenue()}
                                    {this.getRuntime()}
                                    {this.getRating()}
                                </div>
                                <div className = "movie__credits">
                                    {this.getCast()}
                                </div>
                            </div>
                        </div>
                        <MovieTrailer id = {this.props.id} />
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

export default MovieLayout

