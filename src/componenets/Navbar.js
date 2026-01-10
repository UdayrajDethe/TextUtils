import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} text-${props.mode === 'light'? 'dark' : 'white'}`}>
        <div className="container-fluid">
            <a className="navbar-brand " href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">About</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-3 text-${props.mode === 'light'? 'dark' : 'white'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.click}/>
                <label className="form-check-label" for="switchCheckDefault"><i class="fa-solid fa-circle-half-stroke fa-solid fa-xl"></i></label>
            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

Navbar.defaultProps = {
    title: "Set Title Here"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}