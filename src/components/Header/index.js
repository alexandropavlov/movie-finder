import React, { Component, PropTypes } from 'react'
import SearchForm from '../SearchForm'
import { Link } from 'react-router'
import './style.scss';

class Header extends Component {
	static propTypes = {

	}

    render() {
        return (
			<div className="header">
				<div className = "container header__container">
					<Link to = "/">
						<div className = "header__logo"></div>
						<h2 className = "header__title">Movie Finder</h2>
					</Link>
					<SearchForm/>
				</div>
            </div>
        )
    }
}


export default Header