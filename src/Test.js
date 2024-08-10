import React, { Component } from "react";

class Test extends Component{

state = {
    value : 'Default',
    selectVal : '2',
    checked : true
}

setValue = (e) => {
    const name = e.target.name;
    this.setState({
        [name]:e.target.value
    });
}

render(){
    return (
        <div className="Test">
            <input name="value" value={this.state.value} onChange={this.setValue}/>
            <hr></hr>
            <select name="selectVal" value={this.state.selectVal} onChange={this.setValue}>
                <option value='1'>one</option>
                <option value='2'>two</option>
            </select>
            <hr/>
            <input name="chcked" type="checkbox" checked={this.state.checked} onChange={this.setValue}/>
        </div>
    );
}

}

export default Test;