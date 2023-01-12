import React from "react";

import './testimonial1.css';
import teimage from './teimag.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";

 

export function Testi1(){
    return(
        <>
         
         <div className="container-fluid  bg-secondary testbg">
              <div className="container ">
                <div className="row ">
                    <div className="col-lg-6">
                    <div className="col-lg-12 ">
                        <img src={teimage} className="testibgimage col-lg-12"/>

                    </div>
                    </div>
                    <div className="col-lg-6 p-5 bg-light">
                        <h3 className=" text-success pl-5">Happy Farming</h3><br/>

                        <h1 className="text-danger pl-2">Happy animals</h1>

                        <p className=" text-center">Its hard to say what facts about animals we love the most their 
                        cute or beautiful looks, their natural innocence or the emotional reactions that they eli
                        cit from us. But whatever the case may be, one of these 30 happy facts about animals is bound to bring a smile to your face.

                        A lot of these interesting facts also underscore the similarities and emotional connections that people
                        </p>
                        <button href="#" className=" p-1 m-5 testibtnfirst text-light">Learn more</button>
                                    
                    </div>


                </div>

                

              </div>
         </div>
        </>
       
    );

}