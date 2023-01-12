import React from "react";

import './home1.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";

 

export function Home1(){
    return(
        <>
         
         <div className="homebgimage">
              <div className="container p-5">
                <div className="row p-5">
                    <div className="col-lg-6 p-5">
                        <h3 className=" text-success pl-5">FRESH FOOD</h3><br/>

                        <h1 className="ortcolor pl-2">ORGANIC</h1>

                        <p className="text-light text-center">organic food, fresh or processed food produced by organic farming methods. Organic food is grown without 
                            the use of synthetic chemicals,
                             such as human-made pesticides and fertilizers, and does not contain genetically modified organisms 
                        </p>
                        <button href="#" className="bg-success p-1 m-5 orbtnfirst text-light">Learn more</button>
                                    
                    </div>
                    <div className="col-lg-6 &nbsp;">

                    </div>


                </div>

                

              </div>
         </div>
        </>
       
    );

}