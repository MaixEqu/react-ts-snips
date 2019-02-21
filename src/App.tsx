import * as React from "react";

const sVerInfo = "Textareas properties tests (J2L, v.12)"

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
  taText = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`;
  // taText = taText + taText + taText

  state: IState;
  constructor(props: IProps) {
    super(props)
    const sFill = "=========\n" + this.taText.repeat(8)
    this.state = {
      text_from: sFill,
      text_res: sFill,
      cols_from: 44,
      cols_res: 44,
      rows: 7,
      height: 220
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
      // this.textInput_res.current.cols = 48
      // this.textInput_res.current.scrollTop += 40
    } else {
      console.log('Now no "this.textInput_r.current"')
    }
  };
  handleOnClick = (e: any) => {
    e.target.style.height = 'inherit';
    e.target.style.height = e.target.scrollHeight + "px";
    if (this.textInput_from.current && this.textInput_res.current) {
      console.log(this.textInput_res.current.style);
      this._autoResize();
      // this.textInput_from.current.style.height = 'inherit';
      // this.textInput_from.current.style.height = '120px';
      // this.textInput_res.current.style.height = 'inherit';
      // this.textInput_res.current.style.height = '120px';
    } else {
      console.log('Now no "this.textInput_r.current"')
    }
  }
  _autoResize = () => {
    if (this.textInput_from.current && this.textInput_res.current) {
      const nScrollHeight = this.textInput_from.current.scrollHeight;
      console.log(nScrollHeight);
      
      this.textInput_from.current.style.height = 'inherit';
      this.textInput_from.current.style.height = nScrollHeight + 'px';
      this.textInput_res.current.style.height = 'inherit';
      this.textInput_res.current.style.height = nScrollHeight + 'px';
    }
  }
  handleTextChange = () => {
    this._autoResize();
    //this.setState({text_s: e.target.value});
    // e.target.style.height = 'inherit';
    // e.target.style.height = `${e.target.scrollHeight}px`;
  }
  handleOnScroll_from = () => {
    if (this.textInput_from.current) {
      console.log(this.textInput_from.current.scrollTop)
      if (this.textInput_res.current) {
        this.textInput_res.current.scrollTop = this.textInput_from.current.scrollTop
      }
    }
  }
  handleOnScroll_res = () => {
    if (this.textInput_res.current) {
      console.log(this.textInput_res.current.scrollTop)
      if (this.textInput_from.current) {
        this.textInput_from.current.scrollTop = this.textInput_res.current.scrollTop
      }
    }
  }

  render() {
    const taStyle = {
      height: this.state.height+'px',
      verticalAlign: "top",
    };
    return (
      <div>
        <h3>{sVerInfo}</h3>
        <form onSubmit={this.handleSubmit}>
          <button>R = L x 2 (Submit)</button>
          <br />
          <br />
          <textarea
            className="halfsize"
            style={taStyle}
            id="ta-from"
            ref={this.textInput_from}
            defaultValue={this.state.text_from}
            onScroll={this.handleOnScroll_from}
            onChange={this.handleTextChange}
          />
          {' '}
          <textarea
            className="halfsize"
            style={taStyle}
            id="ta-to"
            value={this.state.text_res}
            onClick={this.handleOnClick}
            ref={this.textInput_res}
            readOnly={true}
          />
        </form>
      </div>
    );
  }
}
//    const s: IState = this.state;
//          <textarea rows={s.rows} cols={s.cols1}
//          <textarea rows={s.rows} cols={s.cols2}
