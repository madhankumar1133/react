import {React,useState} from 'react';

import './mangocount.css';
import man from '../images/mango.jpeg';
import bana from '../images/banana.jpeg';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';




export function Mcount()
{


    const[mangoLike,setMangoLike]=useState(0);
    const[bananaLike,setBananaLike]=useState(0);

    return(

    <>
    <Menu/>
      <div className='container p-5 bg-danger'>

        <div className='container bg-light p-5'>

            <div className='row text-center p-3'>
                <div className='col-lg-12'>
                    <h1> Bob ate {mangoLike} mangoes and  {bananaLike} bananas</h1>

                </div>
                <div className='col-lg-6 p-5'>
                    <img src={man} className="col-lg-12 p-5"/>
                    <button className=' bg-primary p-2' value="likes" onClick={()=>setMangoLike(mangoLike+1)}>Eat Mango</button><br/>
                    <button className='b1 bg-success p-2' value="likes" onClick={()=>setMangoLike(mangoLike*0)}>reset</button>



                </div>
                <div className='col-lg-6 p-5'>
                <img src={bana} className="col-lg-12 p-5"/>
                <button className=' bg-primary p-2' value="likes" onClick={()=>setBananaLike(bananaLike+1)}>Eat Banana</button><br/>
                <button className='b1 bg-success p-2' value="likes" onClick={()=>setBananaLike(bananaLike*0)}>reset</button>




                </div>

            </div>

        </div>

      </div>
    </>

    );
}