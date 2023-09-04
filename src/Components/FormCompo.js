import React from 'react'
import { Component } from 'react'
import DisplayForm from './DisplayForm'

class FormCompo extends Component{
    state = {
        Name: " ",
        Dept: " ",
        Rating: " ",
        clicked: true,
        EmpData : []
    }
    changeHandle = (e) => {
        this.setState({[e.target.name] : e.target.value})
        this.setState({[e.target.dept] : e.target.value})
        this.setState({[e.target.rating] : e.target.value})
    }
    toggleFunction = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    clickHandle = (e) => {
        e.preventDefault();
        let newObj = {
            name: this.state.Name,
            dept: this.state.Dept,
            rating: this.state.Rating
        }
        if(newObj.name === " " && newObj.dept === " " && newObj.rating === " "){
            alert('Fill the fields which are mandatory!')
        }
        else{
            this.state.EmpData.push(newObj)
        this.setState({
            EmpData: this.state.EmpData,
            Name:'',
            Dept:'',
            Rating:'',
            clicked: false
        })
        }
        
        
    }
    render(){
        return(
            <>
            {this.state.clicked ?
            <>
                <h1 className='header'>EMPLOYEE FEEDBACK FORM</h1>
                <form id='form'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={this.state.Name} name="Name" onChange={this.changeHandle} required/><br/>
                    <label htmlFor="dept">Department:</label>
                    <input type="text" id="dept" value={this.state.Dept} name="Dept" onChange={this.changeHandle} required/><br/>
                    <label htmlFor="rating">Rating:</label>
                    <input type="number" id="rating" value={this.state.Rating} name="Rating" onChange={this.changeHandle} required/> <br/>
                    <button id="btn" onClick={this.clickHandle}>Submit</button>
                </form>
            </>
            :
            <>
                <h1 className='header'>EMPLOYEE FEEDBACK DATA</h1>
                <DisplayForm value={this.state.EmpData} togglefunc = {this.toggleFunction}/>
            </>
            }

            </>
        )
        
    }

}
export default FormCompo;