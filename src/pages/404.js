import React from 'react'
import {Link} from 'gatsby';

export default () => {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h2>Page Not Found :(</h2>
        <p><Link to="/">Go to Home</Link></p>
      </div>
    </div>
  )
}
