import React from "react"

class Input extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            input : ""
        }
    }
    
    getWeather = () => {
        let {input} = this.state;
        if(input) {
            this.props.getWeather(input)
        }
    }

    inputChange = (event) => {
        this.setState ({
            input : event.target.value
        })
    }

    handleEnter = (event) => {
        if (event.key === "Enter") this.getWeather();  
        
    }


    render () {

        let {input} = this.state;
 
        return (
            <div>
                <input placeholder = "Enter your city" onKeyPress = {this.handleEnter} 
                onChange = {this.inputChange} value = {input}></input>
                <button >Get a weather</button>
            </div>
        )
    }
}

export default Input