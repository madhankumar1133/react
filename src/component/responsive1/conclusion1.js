import React from "react";


 import './conclusion1.css';
import coimage from './conclim1.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";


export function Concl1(){
    return(
        <>
         
         <div className="container-fluid bg-light">
              <div className="container ">
                <div className="row p-5">



                <div className="col-lg-6 p-5 bg-light">
                        <h3 className=" text-success pl-5">Organic form</h3><br/>

                        <h1 className="text-danger pl-2 p-5">of organic food</h1>

                        <p className=" text-center">Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming. Standards vary worldwide, 
                        but organic farming features practices that cycle resources, promote ecological balance, and conserve biodiversity.
                        </p>
                        <button href="#" className=" p-1 m-5 cobtnfirst text-light">Learn more</button>
                                    
                    </div>


                    <div className="col-lg-6">
                      
                        <img src={coimage} className="cobgimage col-lg-12"/>

                    
                    </div>

                </div>

                </div>

            
         </div>
        </>
       
    );

}