import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import HomeContainer from './containers/HomeContainer'
import AccountsContainer from './containers/AccountsContainer'
import DynamicContainer from './containers/DynamicContainer'
import NotFound from './containers/NotFound'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path='/accounts' component={AccountsContainer}/>
    <Route path='/dynamic/:id' component={DynamicContainer}/>
    <Route path='*' component={NotFound} />
  </Route>
)


