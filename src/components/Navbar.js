import React from 'react'
import { useState } from 'react'

export default function Navbar(props) {
  let toggleText = useState('enable Dark Mode')

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.homeTitle}</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleModeFucntion} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${props.mode === 'dark' ? 'white' : 'dark'}`} htmlFor="flexSwitchCheckDefault">{toggleText}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
