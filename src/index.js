import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const nodes = [
  {
    id:1,
    content:'Working with array lists',
    important: true,
  },
  {
    id:2,
    content: 'Usage of keys',
    important:false,
  },
  {
    id:3,
    content:'Conditional rendering',
    important: false,
  },
  {
    id:4,
    content:'Handling Events',
    important: false,
  },
  {
    id:5,
    content:'Props vs state',
    important:false,
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(< App notes = {nodes}/>);
