import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import { connect } from 'react-redux'
import { loadGenres } from '../../AC/genres'
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
                size: 'w300',
                file: data.poster_path
            })
            const backdropLink = theMovieDb.common.getImage({
                size: 'w500',
                file: data.backdrop_path
            })
            return (
                <div>
                    <img src = {backdropLink}/>
                    
                    <div className = "content">
                        <h1 className = "movie__name">{data.title}</h1>
                        <p>{data.original_title}</p>
                        <p>{data.overview}</p>    
                    </div>
                    
                    <img src = {posterLink}/>
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