import * as React from "react";

interface IProps {}
interface IState {
  value_1: string;
  value_2: string;
  cols1: number;
  cols2: number;
  rows: number;
}
export class Main extends React.Component {
  textInput_1 = React.createRef<HTMLTextAreaElement>();
  textInput_r = React.createRef<HTMLTextAreaElement>();
  state: IState;
  constructor(props: IProps) {
    super(props)
    this.state = {
      value_1: 'val 1',
      value_2: 'val 2',
      cols1: 44,
      cols2: 44,
      rows: 7,
    }
  }

  handleSubmit_1 = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log(e)
    //console.log(this.textInput_r.current)
    if (this.textInput_r.current) {
      console.log(this.textInput_r.current.cols)
      //console.log(this.textInput_r.current.scrollTop)
      const sTA1value = this.textInput_1.current ? this.textInput_1.current.value : ""
      console.log(">2: " + sTA1value );
      
      this.setState({ value_1: sTA1value + sTA1value })
      this.textInput_r.current.cols = 48
      this.textInput_r.current.scrollTop += 40
    }
  };
  handleOnChange = () => {
    if (this.textInput_r.current) {
      this.textInput_r.current.cols = 60
      this.textInput_r.current.scrollTop += 20
    }
  }

  render() {
    const s: IState = this.state;
    const t = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`
    return (
      <div>
        <h3>Textareas properties tests (J2L, v.8)<br /></h3>
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
