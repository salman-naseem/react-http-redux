import React from 'react'
import EmployeeUi from '../containers/GetEmployee'
import Button from '../containers/Button'
import Products from '../containers/Products'
import EmployeeResponse from '../containers/EmployeeResponseHolder'
import Filters from '../containers/Filters'
const App = () => (
    <div>
    <EmployeeUi/><br/>
    <EmployeeResponse/><br/><br/>
    <Button title = 'Men' page = '1'/><span className="tab"/>
    <Button title = 'Women' page = '2'/><span className="tab"/>
    <Button title = 'Kids' page = '3'/><span className="tab"/>
    <Button title = 'Shoes' page = '4'/><br/><br/>
    <Filters/><br/>
    <Products />
  </div>
)

export default App;
