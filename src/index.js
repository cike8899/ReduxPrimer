import 'normalize.css/normalize.css'

import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import createStore from './store'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import App from './containers/App'
import Blog from './containers/Blog'
import MainSection from './components/MainSection/blogMainContent'
// 按需增删改 end

const store = createStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/app" component={App} />
      <Route path="/routetest" component={RouteTest} />
      <Route component={Blog}>
        <Route path="/" component={MainSection} />
        <Route path="/blogDetail" component={Blog} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
