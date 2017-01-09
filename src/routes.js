import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import Index from './RouteHandlers/Index'
import Category from './RouteHandlers/Category'
import Movie from './RouteHandlers/Movie'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history={browserHistory}>
        <Route path = "/" component = {Root}>
            <IndexRoute component = {Index}></IndexRoute>
            <Route path = "/category/:id">
            	<IndexRedirect to = "1" />
            	<Route path = ":page" component = {Category}></Route>
            </Route>
            <Route path = "/movie/:id" component = {Movie} />
            <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)