import React from 'react'
import { createEmployee } from '../actions/EmployeeAction'
import { connect } from 'react-redux'


let EmployeeUi = (props) => {
    return <div>
        <span>
            <div>
                <input id="etName" className="text-input text-input--material" placeholder="Name" type="text"/>
            </div><br />
            <div>
                <input id="etSalary" className="text-input text-input--material" placeholder="Salary" type="number"/>
            </div><br />
            <div>
                <input id="etAge" className="text-input text-input--material" placeholder="Age" type="number"/>
            </div>
            <div>
                <button
                    onClick={() => { props.setEmployee(document.getElementById('etName').value, document.getElementById('etSalary').value, document.getElementById('etAge').value); }}>
                    Set Data
                </button>
            </div>
        </span>   
    </div>
    
};

// let Button = (props) => (
//     <button
//         onClick={() => { props.setEmployee(document.getElementById('etName').value, document.getElementById('etSalary').value, document.getElementById('etAge').value); }}>
//         Set Data
//     </button>
// );

const mapStateToProps = (state) => ({
    // products: state.products
})

const mapDispatchToProps = {
  setEmployee: createEmployee
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmployeeUi);