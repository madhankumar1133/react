import React from "react";
import './tech.css';
import  ti from '../images/html11.jpg';
import  ti1 from '../images/css11.jpg';
import ti2 from  '../images/js.jpg';
import  ti3 from '../images/boot.jpg';



import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from "../menu/menu";


export function Techno()
{
    return(
        <>
        <Menu/>
            <div className="container  p-3">

                <div className="row ">
                    <div className="col-lg-12 text-center">
                        <h1>LEARN 4.0 TECHNOLOGIES</h1>
                        <h6>Technology is the application of scientific knowledge to the practical aims
                             of human life or, as it is sometimes phrased, to the change and manipulation of
                              the human environment.</h6>
                             
                    </div>
                    <div className="col-lg-5 box1">
                         <h2>HTML</h2>
                         <p>The HyperText Markup Language or HTML is the standard markup language for documents 
                             to be displayed in a web browser. </p>
                             <img className="float-right" src={ti}/>
                    </div>
                    <div className="col-lg-2 &nbsp;">

                    </div>
                    <div className="col-lg-5 box2">
                          <h2>CSS</h2>
                          <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup 
                            language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. </p>
                            <img  className="float-right"   src={ti1}/>
                    </div>
                     <div className="col-lg-5 box3 ">
                           <h2>JavaScript</h2>
                           <p>JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 
                            98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                            <img  className="float-right" src={ti2}/>
                     </div>
                     <div className="col-lg-2 &nbsp;">

                    </div>
                     <div className="col-lg-5 box4">
                            <h2>bootstrap</h2>
                            <p>Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
                                 It contains HTML, 
                                CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
                                <img className="float-right" src={ti3}/>
                     </div>

                </div>

            </div>
        
        
        </>
    );
}