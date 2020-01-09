import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: "",
            age: "",
            eng: "",
            sci: "",
            math: "",
            total: "",
            // data: []
            isEdit: false
        }
    }

    handleChange = (dataChange) => {
        this.setState({[dataChange.target.name]: dataChange.target.value})
    }

    handleClick = () => {
        var total = Number(this.state.eng) + Number(this.state.sci) + Number(this.state.math)
        var obj = {
            name: this.state.name,
            age: this.state.age,
            eng: Number(this.state.eng),
            sci: Number(this.state.sci),
            math: Number(this.state.math),
            total: total
        }
        if(this.props.editIndex === "")
            this.props.click(obj)
        else
            this.props.edit(obj, this.props.editIndex)
        this.reset()
        // this.setState({
            // data : [...this.state.data, obj]
        // })
    }

    reset = () => {
        this.setState({
            name: "",
            age: "",
            eng: "",
            sci: "",
            math: "",
            total: ""
        })
    }

    render(){
        return(
            <div className="input">
                Name: <input placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                Age: <input placeholder="Age" value={this.state.age} onChange={this.handleChange} name="age"/>
                English: <input placeholder="Eng" value={this.state.eng} onChange={this.handleChange} name="eng"/>
                Science: <input placeholder="Sci" value={this.state.sci} onChange={this.handleChange} name="sci"/>
                Math: <input placeholder="Math" value={this.state.math} onChange={this.handleChange} name="math"/>
                {this.props.editIndex === "" ? 
                    (<button className="submit btn-outline-dark" onClick={this.handleClick}>Submit</button>): 
                    (<button className="submit btn-outline-dark" onClick={this.handleClick}>Edit</button>)}
            </div>
        )
    }
}

export default Input