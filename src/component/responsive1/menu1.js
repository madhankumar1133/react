import React  from "react";

import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle';


export function Menu1()
{
    return(

        <>
           
       


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                
                    <Link to="/home1"  className="nav-link">Home</Link>

            </li>
            <li className="nav-item">
                    <Link to="/work1" className="nav-link">Works</Link>
            </li>
            <li className="nav-item">
                    <Link to="/form1" className="nav-link">Form</Link>
                
            </li>
            <li className="nav-item">
                    <Link to="/about1" className="nav-link">About</Link>

            </li>
            <li className="nav-item">
                    <Link to="/testimonial1" className="nav-link">Testimonial</Link>

            </li>
            <li className="nav-item">

                    <Link to="/products1" className="nav-link">products</Link>
            </li>
            <li className="nav-item">

                    <Link to="/conclusion1" className="nav-link">Conclusion</Link>
            </li>
            </ul>
            
        </div>
        </nav>
                

        </>
    );
}

