import {React,useState} from 'react';

import './social.css';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Menu } from '../menu/menu';



export function Soci()
{
    const[buttonLike,setbuttonLike]=useState(0);
    const[buttonComment,setbuttonComment]=useState(0);
    const[buttonShare,setbuttonShare]=useState(0);

    return(
        <>
        <Menu/>
        <div className='sodd p-5'>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center sod1 mt-5'>
                        <h1>Social Buttons</h1>

                    </div>

                </div>

         
            </div>
            <div className='container p-5 socibut mt-5'>
                <div className='row'>
                    <div className='col-lg-3 &nbsp;'>

                    </div>
                    <div className='col-lg-2'>
                        <h1 className='text-danger'>{buttonLike}</h1>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike+1)}>like</button>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike-1)}>dislike</button>
                        <button className='b1 bg-success' value="likes" onClick={()=>setbuttonLike(buttonLike*0)}>reset</button>


                    </div>
                    <div className='col-lg-2'>
                        <h1 className='text-danger'>{buttonComment}</h1>
                        <button className='sob1 bg-light' value="no of comments" onClick={()=>setbuttonComment(buttonComment+1)}>comment</button>
                        <button className='sob1 bg-light' value="no of comments" onClick={()=>setbuttonComment(buttonComment-1)}>discomment</button>
                    </div>
                    <div className='col-lg-2'>
                    <h1 className='text-danger'>{buttonShare}</h1>
                        <button className='sob1 bg-primary'value="no of shares" onClick={()=>setbuttonShare(buttonShare+1)}>share</button>
                        <button className='sob1 bg-primary'value="no of shares" onClick={()=>setbuttonShare(buttonShare-1)}>disshare</button>

                    </div>

                    <div className='col-lg-3 &nbsp;'>

                    </div>


                </div>

            </div>

         
        </div>
        </>
    );
}