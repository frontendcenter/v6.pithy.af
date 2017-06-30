import React from 'react'

import logo from './logo.svg'

export default () => (
  <nav className="Nav mb3">
    <a href="/" className="Logo">
      <img src={ logo } alt="pithy.af logo" />
    </a>
    <a className="NavLink" href="#about">About</a>
    <a className="NavLink" href="#submit">Submit a quote</a>
  </nav>
)
