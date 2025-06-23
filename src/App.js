import Template from './component/template.js';
import Home from './component/home.js';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import About from './component/about.js';
import Service from './component/service.js';
import Contact from './component/contact.js';
import Product from './component/product.js';
import Work from './component/work.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Template/>} >
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path ="/service" element={<Service/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/product" element={<Product/>}/>
          <Route path ="/work" element={<Work/>}/>



      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
