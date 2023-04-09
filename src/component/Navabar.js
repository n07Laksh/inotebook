import React from 'react'
import {Link, useLocation} from "react-router-dom";


function Navabar() {
    const location = useLocation();
    const shadow = {
        boxShadow: "0px 1px 2px aqua"
    }
    
    return (
        <div>
            <div>
                <nav style={shadow} className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/"><i className="fa-solid fa-notebook"></i>Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item mr-4 ml-3">
                                <Link className={`nav-a text-${location.pathname==="/"?"success":"light"}`} to="/"><i className="fa fa-home"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-a text-${location.pathname==="/about"?"success":"light"}`} to="about">About</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navabar
