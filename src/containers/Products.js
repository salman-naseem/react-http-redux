
import React  from 'react'
import { connect } from 'react-redux'

let ProductsList = (props) => {
    
    // let data = "";
    if (props.loading) {
        return <div><h3>Loading ...</h3></div>
        // data = <h3>Loading ...</h3>
    } else if(props.products) {
        console.log(props.products);
        return props.products.map((item, index) => {
                return (
                    <div key={`${index}`}>
                        <img src={require("../images/" + item.thumbnail)} alt="product_imag" width="32" height="32"/><br/>
                        <b>Name:</b>   {item.name}<br/>
                        <b>Price:</b>   {item.price}<br/>
                        <b>Description:</b>   {item.description}<br/>
                        <hr/>
                    </div>
                )
            });
        // data = <span>{JSON.stringify(props.products)}</span>
    }
    return <div></div>
    // return <div>{data}</div>;
}

const mapStateToProps = (state) => ({
    products: state.products,
    loading: state.loading
})

export default connect(
    mapStateToProps,
    null
)(ProductsList)

