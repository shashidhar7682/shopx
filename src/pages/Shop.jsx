import React, { useContext, useState } from 'react';
import { appContext } from '../contexts/appContext';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs'; 

function Shop() {
  let [products, , cartItems, addToCartItems,,wishlistItems,changeWishlistItems] = useContext(appContext);
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="row justify-content-center">
        {products?.map((product) => {
          // Check if the product is already in the cart
          const isInCart = cartItems.some((item) => item.id === product.id);
          const isInWishlist = wishlistItems.some((item) => item.id === product.id);

          return (
            <div className="col-md-4 p-2" key={product.id}>
              <Card style={{ width: '100%', position: 'relative' }}>
                {/* Heart Button at Top Corner */}
                <Button
                  variant="light"
                  onClick={() => changeWishlistItems(product.id)}
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    borderRadius: '50%',
                    zIndex: 10,
                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {isInWishlist ? (
                    <BsHeartFill color="red" />
                  ) : (
                    <BsHeart color="black" />
                  )}
                </Button>

                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.cost}
                  </Card.Subtitle>
                  {isInCart ? (
                    <Button
                      variant="primary"
                      onClick={() => navigate('/checkout')}
                    >
                      Go To Bag
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => addToCartItems(product)}
                    >
                      Add To Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
