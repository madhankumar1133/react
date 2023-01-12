import React from "react";


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Menu } from "../menu/menu";
import { About1 } from "./about1";
import { Concl1 } from "./conclusion1";
import { Form1 } from "./form1";
import { Home1 } from "./home1";


import { Menu1 } from "./menu1";
import { Product1 } from "./products1";
import { Testi1 } from "./testimonial1";
import { Work1 } from "./work1";




export function Hom()
{
    return(
        <>

        <div>
            <Menu/>
            <Menu1/>
            <Home1/>
            <Work1/>
            <Form1/>
            <About1/>
            <Testi1/>
            <Product1/>
            <Concl1/>


            
            
         
        </div>
        </>
       
        
    );
}