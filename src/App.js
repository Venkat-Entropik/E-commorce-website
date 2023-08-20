import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"
import { useCart } from './context/cart'
import Allert from "./components/alert/Allert"
import Categiries from "./components/categeries/Categiries"
import CarouselComp from "./components/carousel/CarouselComp"
import Footer from "./components/footer/Footer"
import Baner from "./components/baner/Baner"
import FaqComp from "./components/FaqComponent/FaqComp"
import Feedback from "./components/customerFeedback/Feedback"


function App() {

  const navigate = useNavigate();
  const {cartItemCount } = useCart()
  

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (

    <div className="App">
    
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <Categiries/>
      
      <Routes>
        <Route path="/" element={<><CarouselComp/><Products /></>} />
        <Route path="/product/:productId" element={<><Baner/><Product /><FaqComp/><Feedback/></>} />
        <Route path="/cart" element={<><Baner/><Cart /></>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Allert/>
      
      <Footer/>
    </div>

  );
}

export default App;