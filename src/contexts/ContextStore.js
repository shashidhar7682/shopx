import { useState } from 'react';
import { appContext } from './appContext';

function ContextStore({children}) {
  let [products,setProducts]=useState([{id:1,name:"macbookair",image:"https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",cost:65000,description:"abc"},{id:2,name:"macbookairm3",image:"https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",cost:85000,description:"abc"},{id:3,name:"macbookair",image:"https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",cost:65000,description:"abc"},{id:4,name:"macbookairm3",image:"https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.large.jpg",cost:85000,description:"abc"}]);
  let [cartItems,setCartItems]=useState([]);
  let [wishlistItems,setWishlistItems]=useState([]);
  const changeProducts = (prods) => {
    setProducts(prods);
  }
  const addToCartItems = (ctitems) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === ctitems.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === ctitems.id
            ? { ...item, count: (item.count || 1) + 1 } 
            : item
        );
      } else {
        return [...prevCartItems, { ...ctitems, count: 1 }];
      }
    });
  };
  const removeFromCartItems = (ctitems) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === ctitems.id);
      if (existingItem.count>1) {
        return prevCartItems.map((item) =>
          item.id === ctitems.id
            ? { ...item, count: item.count - 1 } 
            : item
        );
      } else {
        return prevCartItems.filter((item) => item.id !== ctitems.id);
      }
    });
  };
  
  const changeWishlistItems = (productId) => {
    setWishlistItems((prevWishlist) => {
      const isInWishlist = prevWishlist.some((item) => item.id === productId);  
      if (isInWishlist) {
        return prevWishlist.filter((item) => item.id !== productId);
      } else {
        const productToAdd = products.find((product) => product.id === productId);
        if (productToAdd) {
          return [...prevWishlist, productToAdd];
        }
        return prevWishlist; 
      }
    });
  };
  
  return (
    <appContext.Provider value={[products,changeProducts,cartItems,addToCartItems,removeFromCartItems,wishlistItems,changeWishlistItems]}>
      {children}
    </appContext.Provider>
  )
}

export default ContextStore;