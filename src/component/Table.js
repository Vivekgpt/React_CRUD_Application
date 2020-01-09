import React from 'react';


class Table extends React.Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <table className="table font-weight-bold">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>English</th>
                    <th>Science</th>
                    <th>Math</th>
                    <th>Total</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
            {this.props.data.map((e, i) => {
                return(
                    <tbody key={i}>
                      <tr>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.eng}</td>
                        <td>{e.sci}</td>
                        <td>{e.math}</td>
                        <td>{e.total}</td>
                        <td><button onClick={() => this.props.edit(i)}><ion-icon name="create"></ion-icon></button></td>
                        <td><button onClick={() => this.props.delete(i)}><ion-icon name="trash"></ion-icon></button></td>
                      </tr>
                    </tbody>
                )
            })}
            </table>
        )
    }
}

export default Table