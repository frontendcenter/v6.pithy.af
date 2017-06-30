import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home'
import Author from './Author'
import Work from './Work'
import Quote from './QuotePage'

export default () => (
  <Router>
    <main>
      <Route exact path="/" component={Home}/>
      <Route path="/authors/*-:id" component={Author}/>
      <Route path="/works/*-:id" component={Work}/>
      <Route path="/quote/*-:id" component={Quote}/>
    </main>
  </Router>
)
