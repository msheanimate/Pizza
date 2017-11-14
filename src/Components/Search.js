import React, { Component } from 'react';

class Search extends Component{
    filterUpdate() {
        console.log(this.props)
        const val = this.myValue.value;
        console.log(val);
        this.props.filterUpdate(val);
    }
    render(){

        //console.log('filterPizza value', this.props.filterPizza)

        return(
            <header>
                <form>
                    <input
                        type="text"
                        ref={(value) => { this.myValue = value}}
                        placeholder="Type to filter"
                        onChange={this.filterUpdate.bind(this)}
                    />
                </form>
            </header>
        )
    }
}

export default Search;