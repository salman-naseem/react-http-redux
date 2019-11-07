import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDefault } from '../actions/FilterActions';

export const ProductListFilter = (props) => {
    return (
      <div>
        <select
          value={props.filters} onChange = { (e) => {
            if (e.target.value === 'default') {
              sortByDefault();
            } else if (e.target.value === 'amount') {
              sortByAmount();
            }
          }}>
          <option value="default">Default</option>
          <option value="amount">Amount</option>
        </select>
      </div>
    );
};



const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByDefault: () => dispatch(sortByDefault()),
  sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListFilter);