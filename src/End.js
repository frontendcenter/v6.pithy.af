import React from 'react'
import Link from './Link'

export default ({ children }) => (
  <div className="Quote -main -end">
    { children }
    <Link to="/" obvious>Add one of your own.</Link>
  </div>
)
