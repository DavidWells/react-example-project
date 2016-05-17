import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory, useRouterHistory } from 'react-router'
import routes from './routes'
import configureStore from './store/configureStore'
import createHashHistory from 'history/lib/createHashHistory'

const store = configureStore()

const history = useRouterHistory(createHashHistory)({
  queryKey: false,
  basename: '/home/',
})

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
)
