import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

fetch('../pizza.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    //console.log('parsed json', json)
	ReactDOM.render(<App data={ json.pizzas }/>, document.body.children[0]);
  }).catch(function(ex) {
    //console.log('parsing failed', ex)
  })




// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

// step 2: implement the view and required behaviors

