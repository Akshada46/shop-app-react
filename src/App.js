import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import ProductGrid from './Components/ProductGrid';
import '../src/Style/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TopHeader from './Components/TopHeader';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Shop from './Components/Shop';
import Categories from './Components/Categories';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Main from './Components/Main';


function App() {

  const [filters, setFilters] = useState({ price: [10, 1000] });


  return (
    <div className="App">
      <TopHeader />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
      <Main filters={filters} setFilters={setFilters}/>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
        
            <Sidebar filters={filters} setFilters={setFilters} />
    
          </div>
          <div className="col-md-9">
            <ProductGrid filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
