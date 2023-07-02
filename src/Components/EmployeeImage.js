import React from 'react'
import {Image } from "react-bootstrap";
import Emp1 from "./../Assets/Images/Emp1.jpeg"
import Emp2 from "./../Assets/Images/Emp2.jpg"
import Emp3 from "./../Assets/Images/Emp3.jpg"
import Emp4 from "./../Assets/Images/Emp4.jpeg"
import Emp5 from "./../Assets/Images/Emp5.jpg"


function EmployeeImage({employee}) {
    var imageArray = [Emp1, Emp2, Emp3, Emp4, Emp5];
    var imagesUrl = [];
    for(let i = 0; i < employee; i++){
        imagesUrl.push(imageArray[i]);
    }
  return (
    <>
    {
        imagesUrl.map((image) =>{
           return <Image src={image} roundedCircle alt="Admin Image" style={{ width: '25px' }} />
        })
    }
    </>
  )
}

export default EmployeeImage