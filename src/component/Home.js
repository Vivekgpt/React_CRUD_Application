import React from 'react';
import Input from './Input';
import Table from './Table';

class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data: [],
            editIndex: ""
        }
    }

    handleData = (add) => {
        this.setState({
            data: [...this.state.data, add]
        })
    }

    handleDelete = (del) => {
        this.setState({
            data: this.state.data.filter((a, i) => i !== del)
        })
    }

    handleEdit = (edit) => {
        this.setState({
            editIndex: edit
        })
    }

    submitEdit = (data, index) => {
        var temp = this.state.data.map((a, i) => {
            if (i === index)
                a = data
            return a
        })
        this.setState({
            data: temp,
            editIndex: ""
        })
    }

    render(){
        return(
            <div>
                <Input edit={this.submitEdit} editIndex={this.state.editIndex} click={this.handleData}/>
                <Table edit={this.handleEdit} delete={this.handleDelete} data={this.state.data}/>
                {/* <div>
                    {this.state.data.map(e => {
                        return(
                            <div key={e}>{e.name}</div>
                        )
                    })}
                </div> */}
            </div>
        )
    }
}

export default Home