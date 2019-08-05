//import "@babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/style.scss';
//import './scss/test.css';

let App = <h1>Hello, world!</h1>

ReactDOM.render(
    App,
    document.getElementById('root')
);

console.log('Hello world!');
let test = ()=>{console.log('test')}
test();