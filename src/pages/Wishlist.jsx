import React,{ useContext } from 'react';
import { appContext } from '../contexts/appContext';
import { Card,Button } from 'react-bootstrap';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
  let [,,cartItems,addToCartItems,,wishlistItems,changeWishlistItems]=useContext(appContext);
  let navigate=useNavigate();
  return (
    <div className="container">
      <div className="row justify-content-center">
        {wishlistItems.length!==0
          ?
          <div>
            {wishlistItems?.map((item) => {
              const isInCart = cartItems.some((citem) => citem.id === item.id);
              return (
                <div className="col-md-4 p-2" key={item.id}>
                  <Card style={{ width: '100%' }}>
                    <Button
                      variant="light"
                      onClick={() => changeWishlistItems(item.id)}
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        borderRadius: '50%',
                        zIndex: 10,
                        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                    <BsHeartFill color="red" />                      
                    </Button>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.cost}
                      </Card.Subtitle>
                      <Card.Body>
                        {item.description}
                      </Card.Body>
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
                          onClick={() => addToCartItems(item)}
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
        :
          <div className="d-flex align-items-center justify-content-center w-100" style={{ height: '80vh' }}>
            <h4>Wishlist is Empty</h4>
          </div>}
        
      </div>
    </div>
  )
}

export default Wishlist