import { Link, graphql, useStaticQuery} from 'gatsby'
import React from 'react'

export default function Navibar() {
  return (
    <nav>
        <h1>Web Warrior</h1>
        <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Portfolio</Link>
        </div>
    </nav>
  )
}