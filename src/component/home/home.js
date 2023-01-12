import React from "react";

import './home.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import as from '../images/img1.jpeg';
import { Menu } from "../menu/menu";




export function Home()
{
    return(
        <>

        <div>
            <Menu/>
         
        </div>
        </>
       
        
    );
}