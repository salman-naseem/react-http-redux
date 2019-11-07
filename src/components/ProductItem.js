import React from 'react';

const ProductItem = ({ product }) => (
  <article >
    <div>
     <span>{JSON.stringify(product)}</span>
    </div>
  </article>
);

export default ProductItem ;


