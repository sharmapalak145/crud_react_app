import React, { Component } from 'react' 
import EmployeeService from '../services/EmployeeService' 
 
class ViewEmployeeComponent extends Component { 
    constructor(props) { 
        super(props) 
 
        this.state = { 
            id: this.props.match.params.id, 
            employee: {} 
        } 
    } 
 
    componentDidMount(){ 
        EmployeeService.getEmployeeById(this.state.id).then( res => { 
            this.setState({employee: res.data}); 
        }) 
    } 
 
    goBack(){ 
        this.props.history.push('/employees'); 
    } 
 
    render() { 
        return ( 
             
            <div className = "container"> 
                <br></br> 
                <h3 className = "text-center"> View Employee Details</h3> 
                <br></br> 
                <button className="btn btn-info" onClick={this.goBack.bind(this)} >Back</button><br/><br/>
                <table className = "table table-striped table-bordered "> 
                          <tbody>  
                                <tr> 
                                    <td className="text-bold">Employee Id</td>  <td> {this.state.employee.eid} </td>                                                                       
                                </tr> 

                                <tr> 
                                    <td className="text-bold">Employee Name</td> <td> {this.state.employee.name} </td>                                                                 
                                </tr> 
                             
                                <tr> 
                                    <td className="text-bold">Employee Designation</td> <td> {this.state.employee.designation}</td> 
                                </tr> 
                             
                                <tr> 
                                    <td className="text-bold">Employee Salary</td> <td> {this.state.employee.salary}</td> 
                                </tr> 
                             
                            </tbody>  
                    </table> 
                         
                          {/* <button className="btn btn-info" onClick={ () => this.editEmployee(employee.eid)}>Edit</button>  */}
                </div> 
             
        ) 
    } 
} 
 
export default ViewEmployeeComponent 
 