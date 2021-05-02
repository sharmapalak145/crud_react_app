import React, { Component } from 'react' 
import EmployeeService from '../services/EmployeeService'; 
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Label, Group} from "react-bootstrap"

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const vdesignation = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vname = value => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
 
class CreateEmployeeComponent extends Component { 
    constructor(props) { 
        super(props);
        this.changeNameHandler = this.changeNameHandler.bind(this); 
        this.changeeIdHandler = this.changeeIdHandler.bind(this); 
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this); 
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this); 
        this.handlesaveOrUpdateEmployee = this.handlesaveOrUpdateEmployee.bind(this);
        this.state = { 
            // step 2 
            id: this.props.match.params.id, 
            eid: '', 
            name: '', 
            designation: '', 
            salary: '' 
        } 
         
    } 
 
    // step 3 
    componentDidMount(){ 
 
        // step 4 
        if(this.state.id === '_add'){ 
            return 
        }else{ 
            let empid= this.state.id; 
            EmployeeService.getEmployeeById(empid).then( (res) =>{ 
                let employee = res.data; 
                console.log(JSON.stringify(employee)); 
                this.setState({ 
                    eid: employee.eid, 
                    name: employee.name, 
                    designation: employee.designation, 
                    salary : employee.salary 
                }); 
            }); 
        }         
    } 

    
     
    changeNameHandler= (event) => { 
        this.setState({name: event.target.value}); 
    } 
 
    changeeIdHandler= (event) => { 
        this.setState({eid: event.target.value}); 
    } 
 
    changeSalaryHandler= (event) => { 
        this.setState({salary: event.target.value}); 
    } 
 
    changeDesignationHandler= (event) => { 
        this.setState({designation: event.target.value});  
    } 

    handlesaveOrUpdateEmployee = (e) => { 
        e.preventDefault(); 
        let employee = {name: this.state.name, designation: this.state.designation, eid: this.state.eid, salary: this.state.salary}; 
        // step 5 
        this.form.validateAll();
        if(this.state.id === '_add'){ 
            EmployeeService.createEmployee(employee).then(res =>{ 
                this.props.history.push('/employees'); 
            }); 
        }else{ 
            EmployeeService.updateEmployee(employee, this.state.eid).then( res => { 
                
                this.props.history.push('/employees'); 
            }); 
        } 
    } 
    
    
    cancel(){ 
        this.props.history.push('/employees'); 
    } 
 
    getTitle(){ 
        console.log("this.state.id",this.state.id)
        if(this.state.id === '_add'){ 
            return <h2 className="text-center">Add Employee</h2> 
        }else{ 
            return <h2 className="text-center">Edit Employee</h2> 
        } 
    } 

    
    render() { 
         console.log("this.props.history.match-->", this.props.history.location.pathname)
        return ( 
            <div > 
                <br></br> 
                   <div className = "container"> 
                        <div className = "row"> 
                            <div className = "card col-md-6 offset-md-3 offset-md-3" > 
                                { 
                                    this.getTitle() 
                                } 
                                <div className = "card-body" >
                                <Form ref={c => { this.form = c }} onSubmit={this.handlesaveOrUpdateEmployee}>
                                                    
                                        <div  className = "form-group"> 
                                            <label> Employee Id: </label> 
                                            <input type="number" min='1' max='1000' placeholder="Employee Id" name="eid" className="form-control"
                                                value={this.state.eid} onChange={this.changeeIdHandler}
                                                validations={[required, vname]}/>
                                        </div> 
                                        <div className = "form-group"> 
                                            <label> Employee Name: </label> 
                                            <input placeholder="Name" name="name" className="form-control"  
                                                value={this.state.name} onChange={this.changeNameHandler}
                                                validations={[required, vname]}/> 
                                        </div> 
                                        <div className = "form-group"> 
                                            <label> Employee Designation: </label> 
                                            <input placeholder="Designation" name="designation" className="form-control"  
                                                value={this.state.designation} onChange={this.changeDesignationHandler}
                                                validations={[required, vdesignation]}/> 
                                        </div> 
                                        <div className = "form-group"> 
                                            <label>Employee Salary: </label> 
                                            <input placeholder="Salary" name="salary" className="form-control"  
                                                value={this.state.salary} onChange={this.changeSalaryHandler}
                                                validations={[required, vdesignation]}/> 
                                        </div> 
                                        

                                        <div className="form-group text-center">
                                        <button color='green' className="ui primary button" onClick={this.handlesaveOrUpdateEmployee}>Save</button>
                                        <button color='red' className="ui button" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>  
                                        </div>
    
                                         
                                    </Form> 
                                </div> 
                            </div> 
                        </div> 
 
                   </div> 
            </div> 
        ) 
    } 
} 
 
export default CreateEmployeeComponent 