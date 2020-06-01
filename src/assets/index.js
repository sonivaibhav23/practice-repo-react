import React from 'react';
import ReactDOM from 'react-dom';

var name = "vaibhav";

var element = <h1>Hello {name}, Welcome to React Leaning.</h1>;

ReactDOM.render(
    element,
    document.getDocumentById('root')
);