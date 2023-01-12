import './conclusion1.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import abim1 from './abimg1.jpeg';
import abim2 from './abimg2.jpeg';
import abim3 from './abimg3.jpeg';
import abim4 from './abimg4.jpeg';






import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu1 } from "./menu1";


export function About1()
{
    return(

        <>
        

        <div className='container-fluid bg-success m-1'>
            <div className='row  p-5'>
                <div className='col-lg-12 text-center p-5 '>
                    <h1 className='text-light p-5'>About our form</h1>
                    <p className='text-light '>Fruit is the sweet, fleshy, edible part of a plant. It generally contains seeds. Fruits are usually
                         eaten raw, although some varieties can be cooked. They come in a wide variety of colours, shapes and flavours.
                    </p>

                </div>
               
            </div>


           
               
               
               
        
        <div className='row text-center m-1 p-2' >
               <div className='col-lg-3 bg-light '>
                    <h1>vegetables </h1>
                    <p className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light  '>
                    <h1>how it works</h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light '>
                    <h1>flexibility </h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>
                <div className='col-lg-3 bg-light'>
                    <h1>Farm products </h1>
                    <p  className='col-lg-12'>lorenm ipusum dolor sit amet constructor adipulting elit</p>

                </div>


            </div>

        </div>
        <div className='container p-3 text-center'>
            <div className='row'>
                <div className='col-lg-3 '>
                    <img src={abim1} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={abim2} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={abim3} className="col-lg-12"/>
                      
                </div>
                <div className='col-lg-3 '>
                    <img src={abim4} className="col-lg-12"/>
                      
                </div>

            </div>

        </div>



        
        
        </>
    );
}