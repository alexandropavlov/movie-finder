import React, { Component, PropTypes } from 'react'
import GenreList from './GenreList'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        //articles: PropTypes.array.isRequired
    };

    render() {

        return (
            <div>
                <GenreList/>
            </div>
        )
    }
}

export default App