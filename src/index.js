import 'normalize.css/normalize.css'

import './base.less'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, browserHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import createStore from './store'
// 按需增删改 start
import RouteTest from './components/RouteTest'
import App from './containers/App'
import Blog from './containers/Blog'
import MainSection from './components/MainSection/blogMainContent'
import ArticleDetail from './components/ArticleDetail/articleDetail'
import TabContainer from './components/Taber/tabContiner'
// 按需增删改 end

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)


/**
 * not be used currently
 */
function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={Blog}>
        <Route path="/" component={MainSection} />
        <Route path="/blogDetail" component={ArticleDetail} />
        <Route path="/tab" component={TabContainer} />
      </Route>
      <Route path="/app" component={App} />
      <Route path="/routetest" component={RouteTest} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
