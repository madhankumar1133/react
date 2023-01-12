import React from  "react";

import './superover.css';

import im1 from '../images/rcb-img.png';
import im2 from '../images/csk-img.png';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";


export function Overscri()
{
    return(
       <>
       <Menu/>

       <div className="sud1 bg-dark mb-5">
        <div className="container ">
            <div className="row ">
                <div className="col-lg-12 text-light  text-center p-5">
                    <h1>Super Over League</h1>

                </div>
                <div className="col-lg-2 &nbsp;">

                </div>
                <div className="col-lg-4">
                <img src={im1} className="col-lg-12"/>

                </div>
                <div className="col-lg-4">
                <img src={im2} className="col-lg-12"/>

                </div>
                <div className="col-lg-2 &nbsp;">

                </div>


            </div>

        </div>

       </div>
       </>

    );
}