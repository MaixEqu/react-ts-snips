import * as React from "react";

interface IProps {}
interface IState {
  text_from: string;
  text_res: string;
  cols_from: number;
  cols_res: number;
  rows: number;
  height: number;
  width?: number;
  height_from?: number;
  width_from?: number;
  height_res?: number;
  width_res?: number;
}
export class Main extends React.Component {
  textInput_from = React.createRef<HTMLTextAreaElement>();
  textInput_res = React.createRef<HTMLTextAreaElement>();
  state: IState;
  constructor(props: IProps) {
    super(props)
    this.state = {
      text_from: 'val source',
      text_res: 'val result',
      cols_from: 44,
      cols_res: 44,
      rows: 7,
      height: 100
    }
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(e)
    // console.log(this.textInput_r.current)
    if (this.textInput_res.current) {
      // console.log(this.textInput_r.current.cols)
      // console.log(this.textInput_r.current.scrollTop)
      const sText_from = this.textInput_from.current ? this.textInput_from.current.value : ""
      this.setState({text_res: sText_from + sText_from})
      this.textInput_res.current.cols = 48
      this.textInput_res.current.scrollTop += 40
    } else {
      console.log('Now no "this.textInput_r.current"')
    }
  };
  handleOnClick = () => {
    if (this.textInput_res.current) {
      this.textInput_res.current.cols = 60
      this.textInput_res.current.scrollTop += 20
    } else {
      console.log('Now no "this.textInput_r.current"')
    }    
  }

  render() {
    const taText = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`
    const taStyle = {
      height: this.state.height+'px',
      width: '48%',
      border: "1px solid", 
      verticalAlign: "top",
    };
    return (
      <div>
        <h3>Textareas properties tests (J2L, v.9)<br /></h3>
        <form onSubmit={this.handleSubmit}>
        <textarea
            style={taStyle}
            id="ta-from"
            ref={this.textInput_from} 
            defaultValue={taText}
          />
          {' '}
          <textarea
            style={taStyle}
            id="ta-to"
            value={this.state.text_res} 
            onClick={this.handleOnClick}
            ref={this.textInput_res}
            readOnly={true} 
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
//    const s: IState = this.state;
//          <textarea rows={s.rows} cols={s.cols1} 
//          <textarea rows={s.rows} cols={s.cols2} 
