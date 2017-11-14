import React, { Component } from 'react';
import Sort from './Sort'
class PizzaList extends Component {
	render() {
  	//console.log("our pizzas are : ", this.props.data)

  	const  {data,filterPizza}  = this.props
    console.log(data)

  	const pizzaList = data
    .filter(data => {
      return data.toLowerCase().indexOf(filterPizza.toLowerCase()) >= 0;
    })
    .map((pizza, index) => {
  		//console.log(pizza);
  		return(
  			<li key={index}>
  				{pizza}
  			</li>
  		)
  	})
    console.log("PizzaList props", this.props.data )
    return (

      <div className="App">
      	<h1>My Order :</h1>
          <p>filterPizza : {this.props.filterPizza} </p>
		      <ul 
          className="pizza-elements">
		      	{pizzaList}
		      </ul>
	      
      </div>
    );
	}
}

export default PizzaList;