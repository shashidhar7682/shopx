import './App.css';
import RootLayout from './RootLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<RootLayout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/wishlist" element={<Wishlist/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
