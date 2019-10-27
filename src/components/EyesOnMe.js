// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component { 

    onFocusHandler = () => {
        console.log("Good!")
    }

    onBlurHandler = () => {
        console.log("Hey! Eyes on me!")
    }

    render() { 
        return (
            <button onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}/>
        )
    }
}