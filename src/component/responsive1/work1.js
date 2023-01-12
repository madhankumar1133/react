import React from "react";

import './home1.css';

import workimage from './workim.jpeg';
import workimage1 from './workim1.jpeg';
import workimage2 from './workim2.jpeg';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";

export function Work1()
{
    return(
        <>
        

          <div className="container-fluid bg-success p-5">
            <div className="row">
                <div className="col-lg-12 text-center">
                      <h1 className="text-light">How its works?</h1>
                      <p className="text-light">A Transformation in our Food and Agricultural 
                         Systems is needed to stop Climate Change. UNDP has an Innovative Response to the
                         Current Global Crisis: Food Smart
                      </p>

                    
                </div>
                
                <div className="col-lg-4 ">
                    <img src={workimage}  className="col-lg-12"/>;
                </div>
                <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>organic forming</h4><br/>
                    <p>Help CCD Educate Farmers To Increase Crop Produce Using Sustainable 
                        Farming. Know More! Live Demos For Effective Farming is
                    </p>


                </div>
                </div>
                <div className="col-lg-4">
                    <img src={workimage1} className="col-lg-12"/>
                </div>


                <div className="col-lg-4 ">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>animal husbandry</h4><br/>
                    <p>Animal husbandry is the branch of agriculture 
                        concerned with animals that are raised for meat, fibre, milk, or other products.
                    </p>


                </div>
                </div>
                <div className="col-lg-4">
                    <img src={workimage2} className="col-lg-12"/>
                </div>
                <div className="col-lg-4">
                <div className="col-lg-12 bg-light p-5 text-center">
                    <h4>arable farming</h4><br/>
                    <p>Arable land is any land capable of being ploughed and used to grow crops. Alternatively,
                         for the purposes of agricultural statistics and 
                    </p>


                </div>
                    
                </div>


            </div>

          </div>

        </>
    );
}