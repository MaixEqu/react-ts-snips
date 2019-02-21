import * as React from "react";

const sVerInfo = "Textareas properties tests (J2L, v.13)"

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
    const sFill = "=========\n" + this.taText.repeat(1)
    this.state = {
      text_from: sFill+sFill+sFill,
      text_res: sFill+sFill,
      cols_from: 44,
      cols_res: 44,
      rows: 7,
      height: 220
    }
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.textInput_res.current) {
      const sText_from = this.textInput_from.current ? this.textInput_from.current.value : ""
      this.setState({text_res: sText_from + sText_from})
    }
  };
  handleOnClick = (e: any) => {
    e.target.style.height = 'inherit';
    e.target.style.height = e.target.scrollHeight + "px";
    if (this.textInput_from.current && this.textInput_res.current) {
      //console.log(this.textInput_res.current.style);
      this._autoResize();
    }
  }
  _autoResize = () => {
    if (this.textInput_from.current && this.textInput_res.current) {
      const nScrollHeight = this.textInput_from.current.scrollHeight;
      //console.log(nScrollHeight);
      this.textInput_from.current.style.height = 'inherit';
      this.textInput_from.current.style.height = nScrollHeight + 'px';
      this.textInput_res.current.style.height = 'inherit';
      this.textInput_res.current.style.height = nScrollHeight + 'px';
    }
  }
  handleTextChange = () => {
    this._autoResize();
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
  componentDidMount() {
    this._autoResize();
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
            onChange={this._autoResize}
            onClick={this._autoResize}
            onInput={this._autoResize}
          />
          {' '}
          <textarea
            className="halfsize"
            style={taStyle}
            id="ta-to"
            ref={this.textInput_res}
            value={this.state.text_res}
            onClick={this.handleOnClick}
            onChange={this._autoResize}
            onScroll={this._autoResize}
            
            readOnly={true}
          />
        </form>
      </div>
    );
  }
}

