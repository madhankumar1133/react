import React from "react";

import './congr.css';

import hu from '../images/congr.png';

import wa from '../images/watch.jpg';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";

export function Fun()
{
return(
    <>
    <Menu/>
    <div className="condd">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 &nbsp;">

                </div>
                <div className="col-lg-8 text-center p-5 ">
                    <h1>Congradulations</h1>

                </div>
                <div className="col-lg-2 &nbsp;">

                </div>

            </div>

            <div className="container">

                <div className="row conbt1">
                    
                            <div className="col-lg-12 p-3 text-center">
                                <img src={hu}/>
                            </div>
                            <div className="col-lg-12 p-5">

                                <h3 className="text-center">Kiran V</h3>

                            </div>
                            <div className="col-lg-12">
                                <p className="text-center">vishnu institute of computer and technology <br/>Bhimavaram</p>

                            </div>
                            <div className="col-lg-12 p-3 text-center">
                                <img src={wa}/>
                            </div>
                    

                </div>

            </div>
        </div>

    </div> 
    </>
);

}