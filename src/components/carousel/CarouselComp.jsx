import React, { useEffect, useState } from 'react';
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const getMaxDiscount = products
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 5);

  return (
    <div className='carouselDisp'>
      <Carousel
        className='car'
        showThumbs={false}
        autoPlay={true}
        transitionTime={1000} // transitionTime is in milliseconds
        infiniteLoop={true}
        showStatus={false}
      >
        {getMaxDiscount.map((product, index) => (
          <div className='imageSlider' key={index}>
            <div className="carouselContent">
              <h1>{product.discountPercentage}% off on this Product</h1>
              <h3>{product.title}</h3>
              <h4>Price: $<span className='after'>{product.price}</span> <span className='before'>{Math.round((product.price/100)*product.discountPercentage)+product.price}</span></h4>
              
              <p>Rating: <span>{product.rating} &#9734;</span></p>
            </div>
            <div className="carouselImage">
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
