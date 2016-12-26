import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Root from './RouteHandlers/Root'
import Index from './RouteHandlers/Index'
import Category from './RouteHandlers/Category'
import Movie from './RouteHandlers/Movie'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history={browserHistory}>
        <Route path = "/" component = {Root}>
            <IndexRoute component = {Index}></IndexRoute>
            <Route path = "/category/:id" component = {Category} />
            <Route path = "/movie/:id" component = {Movie} />
            <Route path = "*" component={NotFound} />
        </Route>
    </Router>
)