import logo from './logo.svg';
import './App.css';
import {Logi} from './component/loginpage/login';
import {BrowserRouter,Routes,Route, AbortedDeferredError} from 'react-router-dom';
import { Fun } from './component/congrascard/congr';
import { Overscri } from './component/superover/superover';
import { Soci } from './component/socialbuttons/social';
import {Home} from './component/home/home';
import { Home1 } from './component/responsive1/home1'; 

import {Menu} from './component/menu/menu';
import { Note } from './component/notifications/notification';
import { Techno } from './component/technologycard/tech';
import { Hom } from './component/responsive1/overall1';
import { Work1 } from './component/responsive1/work1';
import { Form1 } from './component/responsive1/form1';
import { Testi1 } from './component/responsive1/testimonial1';
import { Concl1 } from './component/responsive1/conclusion1';
import { Product1 } from './component/responsive1/products1';
import { About1 } from './component/responsive1/about1';
import { Count } from './component/countincre/count';
import { Mcount } from './component/mangocount/mangocount';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/congr' element={<Fun/>}/>
            <Route path='/superover' element={<Overscri/>}/>
            <Route path='/social'  element={<Soci/>}/>
            <Route path='/login' element={<Logi/>}/>
            <Route path='/notification' element={[<Menu/>,<Note/>]}/>
            <Route path='/tech' element={<Techno/>}/>
            <Route path='/overall1' element={<Hom/>}/>
            <Route path='/home1' element={<Home1/>}/>
            <Route path='/work1' element={<Work1/>}/>
            <Route path='/form1' element={<Form1/>}/>
            <Route path='/testimonial1' element={<Testi1/>}/>
            <Route path='/conclusion1' element={<Concl1/>}/>
            <Route path='/products1' element={<Product1/>}/>
            <Route path='/about1' element={<About1/>}/>
            <Route path='/count' element={<Count/>}/>
            <Route path='/mangocount' element={<Mcount/>}/>
            

            
            

        </Routes>
    </BrowserRouter>
    
  
  </>   
    
  
    
      );
}

export default App;
