import React, { Component } from 'react';
import PizzaList from './Components/PizzaList'
import Search from './Components/Search'
import Sort from './Components/Sort'
//import OrderList from './Components/OrderList'


class App extends Component {

		constructor(props){
			console.log(props)
			super(props);
			this.state = {
				filterPizza: '',
				sortPizza: '',
				sortDirection: ''
			}
		}

		filterUpdate(value){
			this.setState({
				filterPizza: value
			})
		}

		sortUpdate(value){
			console.log(value);
			this.setState({
				sortPizza: value
			})
		}

  render(){
  	const title = "Welcome Will!!";
  	//console.log("filterPizza state from parent", this.state.sortDirection)
  	//console.log("proppers props", this.props)
		return( 
			<div>
				<Search 
				filterPizza = { this.state.filterPizza }
				filterUpdate= { this.filterUpdate.bind(this)}
				/>
				<main>
					<Sort 
					  sortPizza={this.props.sortPizza}
						sortUpdate = { this.sortUpdate.bind(this)}
						sortDirecrtion = {this.props.sortDirection }
						data={this.props.data}

					/>
					<PizzaList 
						title ={this.title}
						data={this.props.data}
						filterPizza={this.state.filterPizza}
						sortPizza = {this.state.sortPizza}
					/>
				</main>
			</div>
		)
  }
}


export default App;