import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
import Nav from './Components/nav';
import Footer from './Components/Footer';
import Mainsection from './pages/firstpage/Mainsection';
import Customer from './pages/SecondPage/Customer';
import WhyOak from './pages/Thirdpages/WhyOak';

import {BrowserRouter, Route, Routes,} from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
<Nav/>
<Routes>
   <Route path ="/" index element={<Mainsection/>}/>
   <Route path="/customer" element={<Customer/>}/>
   <Route path='/WhyOak' element={<WhyOak/>}/>
 </Routes> 
<Footer/>
 </BrowserRouter>
     </ChakraProvider>
  );
}

export default App;
