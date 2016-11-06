/**
 * Created by deepcoder on 06/11/16.
 */
import React from "react"
import  DropDown  from "../src/drop-down";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const options = [{value: 1, label: "Hello" }, {value: 2, label: "Hello2"}];
export default class TryComp extends React.Component{

  constructor(props){
    super();
    this.state= {value: options[1].value};

  }
  selectedOption = (event, index, value) =>{
    this.setState({value});
  }

  render(){
    return (
      <DropDown options={options} defaultValue={this.state.value} onChange = {this.selectedOption}/>
    )
  }
}
