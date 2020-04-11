import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
<div class="window">
  <header class="toolbar toolbar-header">
  <h1 class="title">Header with actions</h1>

  <div class="toolbar-actions">
    <div class="btn-group">
      <button class="btn btn-default">
        <span class="icon icon-home"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-folder"></span>
      </button>
      <button class="btn btn-default active">
        <span class="icon icon-cloud"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-popup"></span>
      </button>
      <button class="btn btn-default">
        <span class="icon icon-shuffle"></span>
      </button>
    </div>

    <button class="btn btn-default">
      <span class="icon icon-home icon-text"></span>
      Filters
    </button>

    <button class="btn btn-default btn-dropdown pull-right">
      <span class="icon icon-megaphone"></span>
    </button>
  </div>
</header>
<div class="window-content">
<Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
</div>
<footer class="toolbar toolbar-footer">
  <div class="toolbar-actions">
    <button class="btn btn-default">
      Cancel
    </button>

    <button class="btn btn-primary pull-right">
      Save
    </button>
  </div>
</footer>
</div>
)

export default App
