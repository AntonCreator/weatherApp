import React from "react"

class Input extends React.Component {
    constructor (props) {
        super (props)

        this.state = {
            input : ""
        }
    }

    render () {
        return (
            <div>
                <input></input>
                <button></button>
            </div>
        )
    }
}

export default Input