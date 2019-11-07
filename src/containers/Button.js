import React from 'react'
import { fetchProducts } from '../actions/ProductActions'
import { connect } from 'react-redux'


let Button = ( props) => (<button
    onClick={() => { props.getProducts(props.page); }}>
    {props.title}
  </button>
);

const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = {
  getProducts: fetchProducts
}

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)


export default Button;
