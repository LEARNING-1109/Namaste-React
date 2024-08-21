import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h2', {id: 'parent'}, 'Hello World from React!');
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(heading1);
