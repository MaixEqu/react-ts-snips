// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";
import * as ReactDOM from "react-dom";

export class Main extends React.Component {
  textInput_1:any;
  textInput_2:any;
  textInput_r:any;
  state: any;
  constructor(props:any) {
    super(props)
    this.textInput_1 = React.createRef();
    this.textInput_2 = React.createRef();
    this.textInput_r = React.createRef();
    this.state = {
      value_1: 'val 1',
      value_2: 'val 2',
      cols1: 44,
      cols2: 44,
      rows: 11,
    }
  }

  handleSubmit_1 = (e: any) => {
    e.preventDefault();
    //console.log(e)
    //console.log(this.textInput_r.current)
    console.log(this.textInput_r.current.cols)
    console.log(this.textInput_r.current.scrollTop)
    //this.setState({ value_1: this.textInput_1.current.value, cols1: 44, cols2: 22 })
    this.setState({ value_1: this.textInput_1.current.value + this.textInput_1.current.value })
    this.textInput_r.current.cols = 60
    this.textInput_r.current.scrollTop += 20
  };
  handleSubmit_2 = (e:any) => {
    e.preventDefault();
    this.setState({ value_2: this.textInput_2.current.value})
  };
  handleOnChange = (e:any) => {
    //e.preventDefault();
    //alert("onChange")
    //return true;
    this.textInput_r.current.cols = 60
    this.textInput_r.current.scrollTop += 20
  }

  render() {
    const s: any = this.state;
    const t = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`
    return (
      <div>
        <h3>Textareas properties tests (J2L, v.6 from JS variant direct copy with anys).<br /></h3>
        <textarea rows={s.rows} cols={s.cols1} 
          id="res"
          value={this.state.value_1} 
          onChange={this.handleOnChange}
          onClick={this.handleOnChange}
          ref={this.textInput_r}
          readOnly={true} 
        />
        <form onSubmit={this.handleSubmit_1}>
          <textarea rows={s.rows} cols={s.cols2} 
            id="from"
            ref={this.textInput_1} 
            defaultValue={t}
          />
          <br />
          <button>Submit</button>
        </form>
        <h3>Value 2: {this.state.value_2}</h3>
        <form onSubmit={this.handleSubmit_2}>
          <input type="text" ref={this.textInput_2} defaultValue="input-2" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
