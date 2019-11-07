import React from 'react'
import Button from '../containers/Button'
import Products from '../containers/Products'
import Filters from '../containers/Filters'
const App = () => (
  <div>
    <Button title = 'Men' page = '1'/><span className="tab"/>
    <Button title = 'Women' page = '2'/><span className="tab"/>
    <Button title = 'Kids' page = '3'/><span className="tab"/>
    <Button title = 'Shoes' page = '4'/><br/><br/>
    <Filters/><br/>
    <Products />
  </div>
)

export default App;
