import React from "react";

import './products1.css';
import primage from './prodimg.jpeg';
import primage1 from './prodimg3.jpeg';
import primage2 from './prodimg2.jpeg';





import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";


 export function Product1(){
    return(
        <>
        
        <div className="container-fluid bg-secondary p-5">
            <div className="row p-3">
                <div className="col-lg-4 text-center bg-light p-5">
                    

                    <img src={primage} className="col-lg-12 proim"/>
                    <h3 className="p-5">frush fruits</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light probt">Learn more</button>
                                    

                

                </div>
                
                <div className="col-lg-4 text-center bg-light p-5">
                    

                    <img src={primage1} className="col-lg-12 proim"/>
                    <h3 className="p-5">vegetables</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light probt ">Learn more</button>
                                    

                

                </div>
                <div className="col-lg-4 text-center bg-light p-5">
                    

                    <img src={primage2} className="col-lg-12 proim"/>
                    <h3 className="p-5">vegetables</h3>
                    <p >
                        Shop for fresh Safe to eat fruits online & get them delivered to you through our online fruit & vegetable delivery service
                    </p>
                    <button href="#" className=" p-1 m-5 bg-light probt">Learn more</button>
                                    

                

                </div>
            

            </div>
        </div>
        </>
    );
 }