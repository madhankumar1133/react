import {React,useState} from 'react';

import './count.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';



export function Count()
{    

    const[buttonLike,setbuttonLike]=useState(0);
    // const[buttonComment,setbuttonComment]=useState(0);
    // const[buttonShare,setbuttonShare]=useState(0);

    return(


        <>
        <Menu/>
          <div>
          <h1 className='text-danger'>{buttonLike}</h1>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike+1)}>like</button>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike-1)}>dislike</button>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike*0)}>reset</button>

          </div>

        </>
    );
}
