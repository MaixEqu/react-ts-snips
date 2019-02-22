import * as React from "react";

const sVerInfo = "Textareas properties tests (J2M, v.17)"

interface IProps {}
interface IState {
  text_from: string;
  text_res: string;
  cols_from: number;
  cols_res: number;
  rows: number;
  height: number;
}
export class Main extends React.Component {
  textInput_from = React.createRef<HTMLTextAreaElement>();
  textInput_res = React.createRef<HTMLTextAreaElement>();
  fileInput = React.createRef<HTMLInputElement>();
  taText = `line1\nline2\nl3\nl-4\nline-5\n\nRepeat: line1\nline2\nl3\nl-4\nline-5\n`;

  state: IState;
  constructor(props: IProps) {
    super(props)
    const sFill = "=========\n" + this.taText.repeat(1)
    this.state = {
      text_from: sFill.repeat(1),
      text_res: sFill.repeat(2),
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
  _autoResize = () => {
    this._minResize()
    if (this.textInput_from.current && this.textInput_res.current) {
      const nScrollHeight = this.textInput_from.current.scrollHeight;
      //console.log(nScrollHeight);
      this.textInput_from.current.style.height = 'inherit';
      this.textInput_from.current.style.height = nScrollHeight + 'px';
      this.textInput_res.current.style.height = 'inherit';
      this.textInput_res.current.style.height = nScrollHeight + 'px';
    }
  }
  _minResize = () => {
    if (this.textInput_from.current && this.textInput_res.current) {
      this.textInput_from.current.style.height = 'inherit';
      this.textInput_from.current.style.height = '50px';
      this.textInput_res.current.style.height = 'inherit';
      this.textInput_res.current.style.height = '50px';
    }
  }
  handleOnScroll_from = () => {
    if (this.textInput_from.current) {
      console.log(this.textInput_from.current.scrollTop)
      if (this.textInput_res.current) {
        this.textInput_res.current.scrollTop = this.textInput_from.current.scrollTop
      }11
    }
  }
  componentDidMount() {
    this._autoResize();
  }

  handleChooseFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sFname = (this.fileInput.current && this.fileInput.current.files)
              ? this.fileInput.current.files[0].name
              : ""
    const oFname = (this.fileInput.current && this.fileInput.current.files)
              ? this.fileInput.current.files[0]
              : null              
    console.log(`file input '${sFname}' choosen.`);
    if (oFname) {
      //let data = new FormData();
      //data.append('file', sFname);
      let reader = new FileReader();
      reader.readAsText(oFname, "UTF-8");
      reader.onload = this.loaded;
      //console.log(reader);
      //console.log(reader.result);
      
    }
  }

  loaded = (e: any) => {
    var sText = e.target.result;
    console.log(sText);
    this.setState({text_from: sText})
    this._autoResize();
    //this.setState({text_res: sText})
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
          <input type="file" ref={this.fileInput} onChange={this.handleChooseFile} />
          <br />
          <span>LTA length: {this.state.text_from.length}</span>
          <br />
          <textarea
            value = {this.state.text_from}
            className="halfsize"
            style={taStyle}
            id="ta-from"
            ref={this.textInput_from}
            onChange = {this._autoResize}
            onDoubleClick = {this._autoResize}
          />
          {' '}
          <textarea
            value={this.state.text_res}
            className="halfsize"
            style={taStyle}
            id="ta-to"
            ref={this.textInput_res}
            onChange = {this._autoResize}
            onDoubleClick = {this._autoResize}
            readOnly = {true}
          />
          <br />
          <br />
          <button>R = L x 2 (Submit)</button>
        </form>
      </div>
    );
  }
}
/*
            onChange = {this._autoResize}
            onScroll = {this.handleOnScroll_from}
            onDoubleClick = {this._autoResize}
            onSeeking = {this._autoResize}
*/
