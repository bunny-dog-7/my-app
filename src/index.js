import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './HelloWorld'; // Import HelloWorld component

//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(element, document.getElementById('root'));

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 className="greeting">Hello,world!</h1>
  </React.StrictMode>
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld /> {/* Use HelloWorld component here */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
