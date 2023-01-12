import React from "react";

import './notification.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faCircleCheck} from '@fortawesome/free-solid-svg-icons';
 import{faBellConcierge} from '@fortawesome/free-solid-svg-icons';


import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";


export function Note()
{
return(


 
   <>
   
      {/* <div className="container-fluid p-5">
        <h1 className="text-center"> Notifications</h1>
        <div className="row p-2">
            <div className="col-lg-4 &nbsp;">

            </div>

            <div className="col-lg-4 bg-primary m-2 text-center">
                
               <h3 className="m-3 noh3"><FontAwesomeIcon icon={faCircleCheck} className="dd1"/>information message</h3>
            </div>
            <div className="col-lg-4 &nbsp;">

            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg-4 &nbsp;">

            </div>
            <div className="col-lg-4 bg-success m-2  text-center">
             
                <h3 className="m-3 noh3">    <FontAwesomeIcon icon={faCircleCheck} className="dd1"/>success message</h3>
            </div>
            <div className="col-lg-4 &nbsp;">

            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg-4 &nbsp;">

            </div> 
            <div className="col-lg-4 bg-warning m-2  text-center">
          
            <h3 className="m-3 noh3">   <FontAwesomeIcon icon={faBellConcierge} className="dd1"/>warning message</h3>
            </div>
            <div className="col-lg-4 &nbsp;">

            </div>
        </div>
        <div className="row p-2">
            <div className="col-lg-4 &nbsp;">

            </div>

            <div className="col-lg-4 bg-danger m-2  text-center">
  
              <h3 className="m-3  noh3">  <FontAwesomeIcon icon={faBellConcierge} className="dd1"/>Error message</h3>
            </div>
            <div className="col-lg-4 &nbsp;">

            </div>




        </div>

      </div> */}

     <div className="container-fluid p-5">
         
         <h1 className="text-center"> Notifications</h1>

         <div className="row ">

            <div className="col-lg-3 bg-primary text-center">
               <h3><FontAwesomeIcon icon={faCircleCheck} />information message</h3>
            </div>
            <div className="col-lg-3 bg-success   text-center">
               <h3>    <FontAwesomeIcon icon={faCircleCheck}/>success message</h3>
            </div>
            <div className="col-lg-3 bg-warning   text-center">
               <h3 >   <FontAwesomeIcon icon={faBellConcierge}/>warning message</h3>
            </div>
            <div className="col-lg-3 bg-danger  text-center">
              <h3 >  <FontAwesomeIcon icon={faBellConcierge}/>Error message</h3>
            </div>

         </div>

     </div>

     


    </>
);
}