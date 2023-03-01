import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container">
    <Link className="fs-3 navbar-brand">Rick & Morty <span className="text-success">Wiki</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Karakterler</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/episode" className="nav-link" href="#">Bölümler</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar