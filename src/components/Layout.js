import React from 'react'
import Navibar from './Navibar'
import '../styles/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navibar />
        <div className="content">
            {children}
        </div>
        <footer>
            <p>Copyright 2023 @ Gabriel Luna</p>
        </footer>
    </div>
  )
}
