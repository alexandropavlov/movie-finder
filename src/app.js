import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import './style/base.scss'


//render(<Root store = {store} />, document.getElementById('container'))
render(routes, document.getElementById('container'))