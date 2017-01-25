import React, { Component, PropTypes } from 'react'
import theMovieDb from '../../lib/themoviedb'
import { rusify } from '../../utils'
import './style.scss'

class MovieTrailer extends Component {
    static propTypes = {

    }

    constructor() {
        super();

        this.state = {
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
        theMovieDb.movies.getTrailers(rusify({
            id: this.props.id
        }), (response) => {
            let trailers = JSON.parse(response)
            this.setState({
                trailers
            })
            console.log('this.state', this.state)
        }, (response) => {
            //error
        })
    }

    getContent() {
        if (this.state.trailers && this.state.trailers.youtube.length) {
            const link = `https://www.youtube.com/embed/${this.state.trailers.youtube[0].source}`
            return (
                <div>
                    <h4>{this.state.trailers.youtube[0].name}</h4>
                    <iframe width = "560" height = "315" src = {link} frameBorder = "0" allowFullScreen></iframe>
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

export default MovieTrailer