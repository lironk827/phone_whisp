import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = { term: '', value: '' }
  }

  rawNumber(input){
    input = input.replace(/\D/g,'');
    if (input.length > 0) {
      return `+1${input}`
    } 
    return input
  }

   phoneFormat(input){
    // Strip all characters from the input except digits
    input = input.replace(/\D/g,'');
    var size = input.length;

    if(size === 0){
            input = input
    } else if (size < 4){
            input = `(${input}`
    } else if (size < 7){
            input = `(${input.substring(0,3)}) ${input.substring(3)}`
    } else if (size>=7 && size<=10){
            input = `(${input.substring(0,3)}) ${input.substring(3,6)} - ${input.substring(6)}`
    } else {
      input = input
    }
    return input; 
 }

  render() {
    return (
      <div>
        <input 
            onChange={ event => { this.setState({term: this.phoneFormat(event.target.value),
                                                 value:this.rawNumber(event.target.value)})} } 
            value={this.state.term}
        />
        <div>value: {this.state.value} </div>
      </div>
    );
  }
}
