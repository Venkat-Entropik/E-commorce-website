import React from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import StoreIcon from '@mui/icons-material/Store';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import WatchIcon from '@mui/icons-material/Watch';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DiamondIcon from '@mui/icons-material/Diamond';
import CategoryIcon from '@mui/icons-material/Category';
import { Tab, Tabs } from '@mui/material';
import { useCart } from '../../context/cart';
import { useNavigate } from 'react-router-dom';
export default function Categories() {
    const {value,setValue}=useCart()
    const navigate=useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate('/')
  };

  

  return (
   
      <div className="categories-scrollable">
        <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className='tab' 
          variant="scrollable" scrollButtons="auto">
           <Tab icon={<CategoryIcon />} value="" label="All Products" />
          <Tab icon={<SmartphoneIcon />} value="smartphones" label="phone" />
          <Tab icon={<LaptopIcon />} value="laptops" label="laptop" />
          <Tab icon={<StoreIcon />} value="groceries" label="groceries" />  
          <Tab icon={<WomanIcon />} value="womens-dresses" label="womens-dresses" />  
          <Tab icon={<ManIcon />} value="mens-shirts" label="mens-shirts" />  
          <Tab icon={<WatchIcon />} value="mens-watches" label="mens-watches" />  
          <Tab icon={<ShoppingBagIcon />} value="womens-bags" label="womens-bags" />  
          <Tab icon={<DiamondIcon />} value="womens-jewellery" label="womens-jewellery" />  
          <Tab icon={<TwoWheelerIcon />} value="motorcycle" label="motorcycle" />  
        </Tabs>
      </div>
   
  );
}
