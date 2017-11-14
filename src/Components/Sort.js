import React, { Component } from 'react';

class Sort extends Component{
    constructor(props){
      super(props);
      this.state = {
        sortDirection: 'ascending'
      }
    }

  sortUpdate(){
        if(this.state.sortDirection == ''){
          var val  = this.props.data.sort();
          this.props.sortUpdate(val);
          this.state.sortDirection = 'descending'
        }
        else if(this.state.sortDirection == 'ascending'){
          var val  = this.props.data.sort();
          this.props.sortUpdate(val);
          this.state.sortDirection = 'descending'
        }
        else if(this.state.sortDirection == 'descending'){
          var val  = this.props.data.sort().reverse();
          this.props.sortUpdate(val);
          this.state.sortDirection = 'ascending'
        }
        console.log(this.state)

  }
// 

  // filterUpdate() {
  //   if(this.state.sort == ""){
  //     this.setState({sort: "asc"});
  //     this.props.data.sort();
  //     console.log(this.props.data)
  //   }

  //   if(this.state.sort == 'asc')
  //     this.setState({sort: "dec"});
  //   if(this.state.sort == 'dec')
  //     this.setState({sort: "asc"});
  //     console.log("boom", this.props);
  // }

  render() {
    console.log("this. props" + this.props)
    return (
      <div className="sort-direction">
        <h1>Sort by</h1>
        <button
            onClick={this.sortUpdate.bind(this)}
        >
        {this.state.sortDirection}
        </button>

      </div>
    )
  }


}

export default Sort;