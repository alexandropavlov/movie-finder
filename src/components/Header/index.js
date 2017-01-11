import React, { Component, PropTypes } from 'react'
import './style.scss';

class Header extends Component {
	static propTypes = {

	}

    render() {
        return (
			<div className="header">
				<div className = "container">
					<div className = "logo"></div>
				</div>
            </div>
        )
    }
}


export default Header