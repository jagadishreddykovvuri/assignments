import React, { Component } from 'react'
import './styles.css'
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
class FilterableProductTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            checked:false,
            searchValue:''
        };
        }
    
    filtering=(searchword)=>{
        
        this.setState({
            searchValue:searchword
        })

    }
    checker=()=>{
        this.setState({
            checked:!this.state.checked
        })
    }


    render()
    {   
        var result=this.props.products
        if(this.state.checked){
            result=result.filter(item =>item.stocked===true)
        }
        result=result.filter(item =>item.name.includes(this.state.searchValue))
        return(
            <>
            <div>
            <SearchBar getInput={this.filtering} checking={this.checker}/>
            <ProductTable products={result} />
            </div>
            </>
        )
    }


}
export default  FilterableProductTable