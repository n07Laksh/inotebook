import React from 'react'
import {Link} from "react-router-dom";

function Navabar() {
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active mr-4 ml-3">
                                <Link className="nav-a" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-a" to="about">About</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navabar
