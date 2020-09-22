import React, { Component } from "react";
import axios from "axios";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "rc-datepicker/lib/style.css";
import PopUp from "../PopUp/PopUp";
import HistoriaGuidismoTimelineOneInputPainel from "./HistoriaGuidismoTimelineOneInputPainel";
import HistoriaGuidismoTimelineTwoInputPainel from "./HistoriaGuidismoTimelineTwoInputPainel";

class HistoriaDoGuidismo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      pt_title_text1: "",
      en_title_text1: "",
      pt_text_text1: "",
      en_text_text1: "",
      editorStateText1PT: EditorState.createEmpty(),
      editorStateText1EN: EditorState.createEmpty(),
      pt_timeline_title: "",
      en_timeline_title: "",
      pt_title_text2: "",
      en_title_text2: "",
      pt_text_text2: "",
      en_text_text2: "",
      editorStateText2PT: EditorState.createEmpty(),
      editorStateText2EN: EditorState.createEmpty(),
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios.get("/historia-guidismo").then((res) => {
      console.log("data", res);
      const results = res.data[0];

      const contentBlockText1PT = htmlToDraft(results.pt_text_text1);
      const contentBlockText1EN = htmlToDraft(results.en_text_text1);

      const contentBlockText2PT = htmlToDraft(results.pt_text_text2);
      const contentBlockText2EN = htmlToDraft(results.en_text_text2);

      const contentStateText1PT = ContentState.createFromBlockArray(
        contentBlockText1PT.contentBlocks
      );
      const contentStateText1EN = ContentState.createFromBlockArray(
        contentBlockText1EN.contentBlocks
      );

      const contentStateText2PT = ContentState.createFromBlockArray(
        contentBlockText2PT.contentBlocks
      );
      const contentStateText2EN = ContentState.createFromBlockArray(
        contentBlockText2EN.contentBlocks
      );

      const formatContentText1PT = EditorState.createWithContent(
        contentStateText1PT
      );
      const formatContentText1EN = EditorState.createWithContent(
        contentStateText1EN
      );

      const formatContentText2PT = EditorState.createWithContent(
        contentStateText2PT
      );
      const formatContentText2EN = EditorState.createWithContent(
        contentStateText2EN
      );

      this.setState({
        image: results.image,
        pt_title_text1: results.pt_title_text1,
        en_title_text1: results.en_title_text1,
        pt_text_text1: results.pt_text_text1,
        en_text_text1: results.en_text_text1,
        pt_timeline_title: results.pt_timeline_title,
        en_timeline_title: results.en_timeline_title,
        pt_title_text2: results.pt_title_text2,
        en_title_text2: results.en_title_text2,
        pt_text_text2: results.pt_text_text2,
        en_text_text2: results.en_text_text2,
        editorStateText1PT: formatContentText1PT,
        editorStateText1EN: formatContentText1EN,
        editorStateText2PT: formatContentText2PT,
        editorStateText2EN: formatContentText2EN,
      });
    });
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  onEditorStateChangeText1PT = (editorStateText1PT) => {
    this.setState({ editorStateText1PT });
    const { pt_text_text1 } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateText1PT.getCurrentContent()
    );
    const HtmlContentText1PT = draftToHtml(rawContentState);
    this.setState({ pt_text_text1: HtmlContentText1PT });
  };

  onEditorStateChangeText1EN = (editorStateText1EN) => {
    this.setState({ editorStateText1EN });
    const { en_text_text1 } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateText1EN.getCurrentContent()
    );
    const HtmlContentText1EN = draftToHtml(rawContentState);
    this.setState({ en_text_text1: HtmlContentText1EN });
  };

  onEditorStateChangeText2PT = (editorStateText2PT) => {
    this.setState({ editorStateText2PT });
    const { pt_text_text2 } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateText2PT.getCurrentContent()
    );
    const HtmlContentText2PT = draftToHtml(rawContentState);
    this.setState({ pt_text_text2: HtmlContentText2PT });
  };

  onEditorStateChangeText2EN = (editorStateText2EN) => {
    this.setState({ editorStateText2EN });
    const { en_text_text2 } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateText2EN.getCurrentContent()
    );
    const HtmlContentText2EN = draftToHtml(rawContentState);
    this.setState({ en_text_text2: HtmlContentText2EN });
  };

  postData = () => {
    const {
      messageStatus,
      flash,
      editorStateText1PT,
      editorStateText1EN,
      editorStateText2PT,
      editorStateText2EN,
      ...histdoguidismo
    } = this.state;
    const { history } = this.props;
    
    axios.put("/historia-guidismo", histdoguidismo)
      .then((res) => {
        this.setState({ messageStatus: "success" }, () => {
          setTimeout(
            () => history.push({ pathname: "/backoffice/historia-guidismo" }),
            1500
          );
        });
        this.setState({ flash: "Guardado com sucesso." });
      })
      .catch((err) => {
        this.setState({ messageStatus: "error" });
        this.setState({
          flash: "Ocorreu um erro, por favor tente outra vez.",
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };

  render() {
    const {
      image,
      pt_title_text1,
      en_title_text1,
      editorStateText1PT,
      editorStateText1EN,
      pt_timeline_title,
      en_timeline_title,
      pt_title_text2,
      en_title_text2,
      editorStateText2PT,
      editorStateText2EN,
      messageStatus,
      flash,
    } = this.state;

    return (
      <div className="PalavraAosPaisInput">
        <div className="PalavraAosPaisInput-title">História do Guidismo</div>
        <div className="PalavraAosPaisInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Imagem Banner:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title_text1"
                value={pt_title_text1}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN:</div>
              <input
                type="text"
                name="en_title_text1"
                value={en_title_text1}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo PT:</div>
              <Editor
                editorState={editorStateText1PT}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeText1PT}
                stripPastedStyles={true}
                required
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
                  },
                  image: {
                    defaultAligh: "center",
                  },
                  fontFamily: {     
                    options: ['Poppins'],     
                  },
                  colorPicker: {        
                    colors: ['rgb(26, 163, 219)','rgb(0, 73, 130)', 'rgb(97,189,109)', 'rgb(26,188,156)', 
                     'rgb(84,172,210)', 'rgb(44,130,201)','rgb(204,204,204)', 'rgb(65,168,95)',
                     'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                     'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',   
                     'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                    'rgb(163,143,132)']
                  }, 
                  fontSize: {
                    options: ['8','9','10','11','12','14','16','18','20','22','24','28','30','32','40','52']
                  }
                }}
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo EN:</div>
              <Editor
                editorState={editorStateText1EN}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeText1EN}
                stripPastedStyles={true}
                required
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
                  },
                  image: {
                    defaultAligh: "center",
                  },
                  fontFamily: {     
                    options: ['Poppins'],     
                  },
                  colorPicker: {        
                    colors: ['rgb(26, 163, 219)','rgb(0, 73, 130)', 'rgb(97,189,109)', 'rgb(26,188,156)', 
                     'rgb(84,172,210)', 'rgb(44,130,201)','rgb(204,204,204)', 'rgb(65,168,95)',
                     'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                     'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',   
                     'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                    'rgb(163,143,132)']
                  }, 
                  fontSize: {
                    options: ['8','9','10','11','12','14','16','18','20','22','24','28','30','32','40','52']
                  }
                }}
              />
            </div>
            <div className="input">
              <div className="input-section-label-subtitle">Timeline</div>
              <div className="input-section-label">Título Timeline PT:</div>
              <input
                type="text"
                name="pt_timeline_title"
                value={pt_timeline_title}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título Timeline EN:</div>
              <input
                type="text"
                name="en_timeline_title"
                value={en_timeline_title}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input-painel">
              <div className="input-section-label-subtitle">
                Timeline Robert
              </div>
              <HistoriaGuidismoTimelineOneInputPainel />
            </div>
            <div className="input-painel">
              <div className="input-section-label-subtitle">Timeline Olave</div>
              <HistoriaGuidismoTimelineTwoInputPainel />
            </div>
            <div className="input">
              <div className="input-section-label-subtitle">Guias Porquê?</div>
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title_text2"
                value={pt_title_text2}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN:</div>
              <input
                type="text"
                name="en_title_text2"
                value={en_title_text2}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo PT:</div>
              <Editor
                editorState={editorStateText2PT}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeText2PT}
                stripPastedStyles={true}
                required
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
                  },
                  image: {
                    defaultAligh: "center",
                  },
                  fontFamily: {     
                    options: ['Poppins'],     
                  },
                  colorPicker: {        
                    colors: ['rgb(26, 163, 219)','rgb(0, 73, 130)', 'rgb(97,189,109)', 'rgb(26,188,156)', 
                     'rgb(84,172,210)', 'rgb(44,130,201)','rgb(204,204,204)', 'rgb(65,168,95)',
                     'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                     'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',   
                     'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                    'rgb(163,143,132)']
                  }, 
                  fontSize: {
                    options: ['8','9','10','11','12','14','16','18','20','22','24','28','30','32','40','52']
                  }
                }}
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo EN:</div>
              <Editor
                editorState={editorStateText2EN}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeText2EN}
                stripPastedStyles={true}
                required
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
                  },
                  image: {
                    defaultAligh: "center",
                  },
                  fontFamily: {     
                    options: ['Poppins'],     
                  },
                  colorPicker: {        
                    colors: ['rgb(26, 163, 219)','rgb(0, 73, 130)', 'rgb(97,189,109)', 'rgb(26,188,156)', 
                     'rgb(84,172,210)', 'rgb(44,130,201)','rgb(204,204,204)', 'rgb(65,168,95)',
                     'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                     'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',   
                     'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                    'rgb(163,143,132)']
                  }, 
                  fontSize: {
                    options: ['8','9','10','11','12','14','16','18','20','22','24','28','30','32','40','52']
                  }
                }}
              />
            </div>
            <div className="PalavraAosPais-section-main-button">
              <button
                className="login-button"
                variant="contained"
                color="primary"
                type="submit"
              >
                GUARDAR
              </button>
            </div>
          </form>
        </div>
        <PopUp flashInput={flash} typeMessage={messageStatus} />
      </div>
    );
  }
}

export default HistoriaDoGuidismo;
