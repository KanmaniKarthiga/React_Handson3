import React from 'react'
import { Component } from 'react'

class DisplayForm extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value)
    }
    render(){
        return(
            <>
                <div className='EmpData'>
                    {this.props.value.map((item,index) =>{
                        return(
                            <h1 key={index} className='data'> Name: {item.name} || Department: {item.dept} || Rating: {item.rating}</h1>
                        )
                    })}
                </div>
                <div>
                    <button onClick={this.props.togglefunc} id='btn2'>Go Back</button>
                </div>
            </>
        )
    }
}
export default DisplayForm;