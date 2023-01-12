import React from "react";

import './login.css';

import a from '../images/lap1.jpeg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";


export function Logi()
{
    return(
<>
   <Menu/>
  <div className="bgcolor1 p-5">
      <div className="container bg-light p-5">
          <div className="row">
            <div className="col-lg-6" >
                 <img src={a} className="col-lg-10 p-5"/>
            </div>
            <div className="col-lg-6 text-center" >
                 <h1>Member Login</h1>

                 <div className="d-flex  ml-5">
                    <FontAwesomeIcon icon={faEnvelope} className="mt-3 pl-5 bg-light"/>      
                    <input type="email" placeholder="EMail" className=" m-2 col-lg-7 bg-light"/> 
              
                 </div><br/>
                 <div className=" d-flex  ml-5">
                     <FontAwesomeIcon icon={faLock} className="mt-3 pl-5 bg-light"/>
                     <input type="password" placeholder="password" className="m-2 col-lg-7 bg-light"/>
          
                 </div><br/>

                 <div>
                     <button type="submit" className="ml-3 pl-5 pr-5 btn-success   col-lg-7">LOGIN</button>
                      <p>forgot<a href="#" className="text-success ">UserName/</a><a href="#" className="text-success">password?</a></p><br/><br/>
                     <h6><a href="#" className="text-success">Create your account</a></h6>


                 </div>

            </div>

          </div>
         
      </div>
  </div>


</> );
}