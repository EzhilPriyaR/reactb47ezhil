import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import imageOne from "./../Images/FruitBackground2.jpeg";
import imageTwo from "./../Images/FruitBackgound3.jpg";
import imageThree from "./../Images/FruitBackground4.jpg";

class ShoppingNotes extends Component {
    render() {
        const carouselStyle = {
            height: 400,
            opacity: 0.8,
          };
        
          const captionStyle = {
            color: "black",
            fontSize: 40,
          };
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imageOne} alt="First slide" style={carouselStyle} />
                        <Carousel.Caption style={captionStyle}>
                            <h3>Henry David Thoreau</h3>
                            <p>Live in each season as it passes: breathe the air, drink the drink, taste the fruit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imageTwo} alt="Second slide" style={carouselStyle} />
                        <Carousel.Caption style={captionStyle}>
                            <h3>William Shakespeare</h3>
                            <p>The Weakest kind of fruit drops earliest to the ground</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={imageThree} alt="Third slide" style={carouselStyle} />
                        <Carousel.Caption style={captionStyle}>
                            <h3>Vietnamese Proverb</h3>
                            <p>When Eating a fruit, think of the person who planted the tree.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default ShoppingNotes;