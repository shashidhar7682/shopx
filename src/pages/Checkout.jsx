import React, { useContext } from 'react'
import { appContext } from '../contexts/appContext'
import { Card,Button } from 'react-bootstrap';
function Checkout() {
  let [,,cartItems,addToCartItems,removeFromCartItems]=useContext(appContext);
  return (
    <div className="container">
      <div className="row justify-content-center">
        {cartItems.length!==0
        ?
          <div>
            {cartItems?.map((item) => {
              return (
                <div className="col-md-4 p-2" key={item.id}>
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {item.cost} * {item.count} = {item.cost * item.count}
                      </Card.Subtitle>
                      <Button variant="primary" onClick={()=>removeFromCartItems(item)}>-</Button>
                      <span className='p-2'>{item.count}</span>
                      <Button variant="primary" onClick={()=>addToCartItems(item)}>+</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        :
          <div className="d-flex align-items-center justify-content-center w-100" style={{ height: '80vh' }}>
            <h4>Cart is Empty</h4>
          </div>}
        
      </div>
    </div>
  )
}

export default Checkout