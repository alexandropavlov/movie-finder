import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class Paginator extends Component {
    static propTypes = {

    };

    constructor() {
    	super()
    	this.margin = 2
    	this.range = this.margin * 2 + 1
    }

    getPages() {
    	const { basePath, current, total } = this.props
    	let pageArr = []
    	if (total <= this.range * 2) {
    		for (let i = 1; i <= total; i++) {
	    		const link = basePath + `${i}`;
	    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
	    	}
    	} else {
    		if (1 <= current && current <= this.range) {
    			// current near left boundary
    			console.log('current near left boundary');
    			for (let i = 1; i <= current + this.margin; i++) {
		    		const link = basePath + `${i}`;
		    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
		    	}
		    	pageArr.push(<span key = "div-1">...</span>)
		    	for (let i = total - this.margin + 1; i <= total; i++) {
		    		const link = basePath + `${i}`;
		    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
		    	}
    		} else if ((total - this.range + 1) <= current && current <= total) {
    			// current near right boundary
    			console.log('current near right boundary');
    			for (let i = 1; i <= this.margin; i++) {
		    		const link = basePath + `${i}`;
		    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
		    	}
		    	pageArr.push(<span key = "div-1">...</span>)
		    	for (let i = current - this.margin; i <= total; i++) {
		    		const link = basePath + `${i}`;
		    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
		    	}
    		} else {
    			// current in between
    			console.log('current in between');
    			for (let i = 1; i <= this.margin; i++) {
                    const link = basePath + `${i}`;
                    pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
                }
		    	pageArr.push(<span key = "div-1">...</span>)
		    	for (let i = current - this.margin; i <= current + this.margin; i++) {
		    		const link = basePath + `${i}`;
		    		pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
		    	}
		    	pageArr.push(<span key = "div-2">...</span>)
		    	for (let i = total - this.margin + 1; i <= total; i++) {
                    const link = basePath + `${i}`;
                    pageArr.push(<Link to = {link} key = {i}>{i}</Link>)
                }
    		}
    	}
    	
    	return pageArr
    }

    getPrevButton() {
    	const { basePath, current } = this.props
    	const link = basePath + `${current - 1}`
    	return current != 1 ? (<Link to = {link}>prev</Link>) : (<button>prev</button>)
    }

    getNextButton() {
    	const { basePath, current, total } = this.props
    	const link = basePath + `${current + 1}`
    	return current != total ? (<Link to = {link}>next</Link>) : (<button>next</button>)
    }

    render() {
        return (
        	<div>
                {this.getPrevButton()}
                {this.getPages()}
                {this.getNextButton()}
            </div>
        )
    }
}

export default Paginator