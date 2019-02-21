// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";

export class Main extends React.Component {
  textInput_1 = React.createRef<HTMLTextAreaElement>();
  textInput_r = React.createRef<HTMLTextAreaElement>();
  state: any;
  constructor(props:any) {
    super(props)
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
    if (this.textInput_r.current) {
      console.log(this.textInput_r.current.cols)
      console.log(this.textInput_r.current.scrollTop)
      //this.setState({ value_1: this.textInput_1.current.value, cols1: 44, cols2: 22 })
      const sTA1value = this.textInput_1.current ? this.textInput_1.current.value : ""
      this.setState({ value_1: sTA1value + sTA1value })
      this.textInput_r.current.cols = 48
      this.textInput_r.current.scrollTop += 40
    }
  };
  handleOnChange = (e:any) => {
    //e.preventDefault();
    //alert("onChange")
    //return true;
    if (this.textInput_r.current) {
      this.textInput_r.current.cols = 60
      this.textInput_r.current.scrollTop += 20
    }
  }

  render() {
    const s: any = this.state;
    const t = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`
    return (
      <div>
        <h3>Textareas properties tests (J2L, v.7)<br /></h3>
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
      </div>
    );
  }
}
