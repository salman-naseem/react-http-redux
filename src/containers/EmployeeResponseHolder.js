import React from 'react'
import { connect } from 'react-redux'

let EmployeeResponse = (props) => {

    // let data = "";
    if (props.loading) {
        return <div><h3>Loading ...</h3></div>
        // data = <h3>Loading ...</h3>
    } else if (props.products) {
        console.log(props.products);
        return (
            <div>
                <b>Id:</b>   {props.id}<br />
                <b>Name:</b>   {props.name}<br />
                <b>Salary:</b>   {props.salary}<br />
                <b>Age:</b>   {props.age}<br />
                <hr />
            </div>
        )
        // data = <span>{JSON.stringify(props.products)}</span>
    }
    return <div></div>
    // return <div>{data}</div>;
}

const mapStateToProps = (state) => ({
    employee: state.employee,
    loading: state.loading
})

export default connect(
    mapStateToProps,
    null
)(EmployeeResponse)

