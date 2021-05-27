import React, { Component } from 'react'
import style from '../css/Searchbar.module.css'

export default class Searchbar extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            inpvalue: ``
        }

        this.vercneliInputiArjeq = this.vercneliInputiArjeq.bind(this)
       
    }

    vercneliInputiArjeq(e){
 
        this.setState({
            inpvalue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.inpvalue} onInput={this.vercneliInputiArjeq}/>
                <button onClick={()=>this.props.getvalue(this.state.inpvalue)}>search</button>
            </div>
        )
    }
}
