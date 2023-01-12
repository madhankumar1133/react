import React  from "react";

import {Link} from 'react-router-dom';
// import 'bootstrap/dist/js/bootstrap.bundle';


export function Menu()
{
    return(

        <>
           
       


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                
                    <Link to="/"  className="nav-link">Home</Link>

            </li>
            <li className="nav-item">
                    <Link to="/congr" className="nav-link">Congratscard</Link>
            </li>
            <li className="nav-item">
                    <Link to="/superover" className="nav-link">Superover league</Link>
                
            </li>
            <li className="nav-item">
                    <Link to="/social" className="nav-link">Socialbuttons</Link>

            </li>
            <li className="nav-item">
                    <Link to="/login" className="nav-link">LoginPage</Link>

            </li>
            <li className="nav-item">

                    <Link to="/notification" className="nav-link">Notification</Link>
            </li>
            <li className="nav-item">

                    <Link to="/tech" className="nav-link">Technologies</Link>
            </li>
            <li className="nav-item">

                    <Link to="/overall1" className="nav-link">responsive</Link>
            </li>
            <li className="nav-item">

                    <Link to="/count" className="nav-link">counter</Link>
            </li>
            <li className="nav-item">

                    <Link to="/mangocount" className="nav-link">eat</Link>
            </li>
            </ul>
            
        </div>
        </nav>
                

        </>
    );
}

