import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './style.scss';

class SearchForm extends Component {
	static propTypes = {

	}

    render() {
        return (
        	<div className = "search-form">
	        	<form className = "search-form__form" action="/search" method = "get">
					<input className = "search-form__input" name = "q" type = "text" placeholder = "Найти фильм"></input>
				</form>
			</div>
        )
    }
}


export default SearchForm