import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const evaluatedExpression="this is a String"

// Creating element without using HTML (Babbel injects the element )
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click here to visit google.com ',
  evaluatedExpression

)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement

)
