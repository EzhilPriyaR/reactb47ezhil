import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import ShoppingNotes from "./components/ShoppingNotes";
import productOne from "./products/product-img-1.jpg";
import productTwo from "./products/product-img-2.jpg";
import productThree from "./products/product-img-3.jpg";
import productFour from "./products/product-img-4.jpg";
import productFive from "./products/product-img-5.jpg";
import productSix from "./products/product-img-6.jpg";
import productSeven from "./products/product-img-7.jpeg";
import productEight from "./products/product-img-8.jpeg";

function ItemName({productName}){
  const cardText = {
    fontSize: 40,
  };
  return(
    <h5 class="card-title text-muted text-center" style={cardText} >{productName}</h5>
  );
}

function ItemPrice({priceValue}){
  const cardPrice = {
    fontSize: 32,
  };
  const period = {
    fontSize: 16,
  };
  return(
    <h6 class="card-price text-center" style={cardPrice}>{priceValue}<span class="period" style={period}>/kg</span></h6>
  );
}

function ShoppingItems({ cart, updateCart, isBtnEnaabled, setBtnEnabled }) {

  const handleClick = (buttonName) => {
    updateCart(cart + 1);
    setBtnEnabled((prevState) => ({
      ...prevState,
      [buttonName]: true
    }));
  }
  const cardImageStyle = {
    height: 200,
  };
  const cardStyle = {
    width: '20rem',
    marginBottom: 20,
  };
  const divStyle = {
    padding: 30,
  }

  return (
    <div style={divStyle} >
     
      <Row>
        <Col>
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productOne} style={cardImageStyle} />
            <Card.Body>
              <ItemName productName={'Strawberry'} />
              <ItemPrice priceValue={200}/>
              <Button disabled = {isBtnEnaabled.button1} onClick={() => handleClick('button1')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productTwo} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName={'Grapes'} />
            <ItemPrice priceValue={60}/>
              <Button disabled = {isBtnEnaabled.button2} onClick={() => handleClick('button2')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productThree} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName={'Lemon'} />
            <ItemPrice priceValue={80}/>
              <Button disabled = {isBtnEnaabled.button3} onClick={() => handleClick('button3')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productFour} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName= {'Kiwi'}/>
            <ItemPrice priceValue={150}/>
              <Button disabled = {isBtnEnaabled.button4} onClick={() => handleClick('button4')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productFive} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName={'Green Apple'}/>
            <ItemPrice priceValue={350}/>
              <Button disabled = {isBtnEnaabled.button5} onClick={() => handleClick('button5')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productSix} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName= {'Rasberry'}/>
            <ItemPrice priceValue={450}/>
              <Button disabled = {isBtnEnaabled.button6} onClick={() => handleClick('button6')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productSeven} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName= {'Banana'}/>
            <ItemPrice priceValue={46}/>
              <Button disabled = {isBtnEnaabled.button7} onClick={() => handleClick('button7')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={cardStyle}>
            <Card.Img variant="top" src={productEight} style={cardImageStyle} />
            <Card.Body>
            <ItemName productName= {'Pear'} />
            <ItemPrice priceValue={380}/>
              <Button disabled = {isBtnEnaabled.button8} onClick={() => handleClick('button8')}>Go to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> 

    </div>
  );
}

function App(props) {

  const [cart, updateCart] = useState(0);

  const [isButtonEnabled, setIsButtonEnabled] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
  });

  var btnName = 'button1';
  return (
    <div>
      <NavigationBar cart={cart} updateCart={updateCart}  setBtnEnabled = {setIsButtonEnabled} btnName = {btnName}/>
      <ShoppingNotes />
      <br></br>
      <ShoppingItems cart={cart} updateCart={updateCart} isBtnEnaabled = {isButtonEnabled} setBtnEnabled = {setIsButtonEnabled}/>
    </div>
  )
}

export default App;