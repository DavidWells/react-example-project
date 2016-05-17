import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Router, hashHistory, useRouterHistory } from 'react-router'
import routes from './routes'
import createHashHistory from 'history/lib/createHashHistory'

const history = useRouterHistory(createHashHistory)({
  queryKey: false,
})

const mountNode = document.getElementById('app')

render(<Router history={history} routes={routes} />, mountNode)