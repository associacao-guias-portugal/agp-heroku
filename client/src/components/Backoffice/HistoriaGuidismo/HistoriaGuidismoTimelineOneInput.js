import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "rc-datepicker/lib/style.css";
import PopUp from "../PopUp/PopUp";

class HistoriaDoGuidismoTimelineOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      position: "",
      publish: false,
      editorStatePT: EditorState.createEmpty(),
      editorStateEN: EditorState.createEmpty(),
      pt_text: {},
      en_text: {},
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
    const getId = match.params.id;

    if (getId) {
      axios.get(`/historia-guidismo/timeline-one/${getId}`).then((res) => {
        console.log("data", res);
        const results = res.data[0];

        let getPublish = results.publish;
        if (getPublish === 1) {
          getPublish = true;
        } else {
          getPublish = false;
        }

        const contentBlockPT = htmlToDraft(results.pt_text);
        const contentBlockEN = htmlToDraft(results.en_text);

        const contentStatePT = ContentState.createFromBlockArray(
          contentBlockPT.contentBlocks
        );
        const contentStateEN = ContentState.createFromBlockArray(
          contentBlockEN.contentBlocks
        );

        const formatContentPT = EditorState.createWithContent(contentStatePT);
        const formatContentEN = EditorState.createWithContent(contentStateEN);

        this.setState({
          position: results.position,
          image: results.image,
          publish: results.publish,
          pt_text: results.pt_text,
          en_text: results.en_text,
          editorStatePT: formatContentPT,
          editorStateEN: formatContentEN,
        });
      });
    }
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  onEditorStateChangePT = (editorStatePT) => {
    this.setState({ editorStatePT });
    const { pt_text } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStatePT.getCurrentContent()
    );
    const HtmlContentPT = draftToHtml(rawContentState);
    this.setState({ pt_text: HtmlContentPT });
  };

  onEditorStateChangeEN = (editorStateEN) => {
    this.setState({ editorStateEN });
    const { en_text } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateEN.getCurrentContent()
    );
    const HtmlContentEN = draftToHtml(rawContentState);
    this.setState({ en_text: HtmlContentEN });
  };

  handleCheckboxChange = () => {
    const { publish } = this.state;
    this.setState({ publish: !publish });
  };

  postData = () => {
    const {
      editorStatePT,
      editorStateEN,
      messageStatus,
      flash,
      ...timeline
    } = this.state;
    const { match, history } = this.props;
    const getId = match.params.id;
    
    if (getId) {
      axios.put(`/historia-guidismo/timeline-one/${getId}`, timeline)
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
    } else {
      axios
        .post("/historia-guidismo/timeline-one", timeline)
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
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };

  render() {
    const {
      position,
      image,
      publish,
      editorStatePT,
      editorStateEN,
      flash,
      messageStatus,
    } = this.state;

    return (
      <div className="NoticiaInput">
        <div className="NoticiaInput-title">Timeline Robert</div>
        <div className="NoticiaInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Posição:</div>
              <input
                type="text"
                name="position"
                value={position}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Imagem:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input-section-checkbox">
              <div className="input-section-label-checkbox">Publicar:</div>
              <input
                className="input-checkbox"
                type="checkbox"
                value={publish}
                checked={publish}
                onChange={this.handleCheckboxChange}
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo PT:</div>
              <Editor
                editorState={editorStatePT}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangePT}
                stripPastedStyles={true}
                required
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
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
                }}
              />
            </div>
            <div className="input input-block">
              <div className="input-section-label">Conteúdo EN:</div>
              <Editor
                editorState={editorStateEN}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeEN}
                stripPastedStyles={true}
                toolbar={{
                  options: [
                    "inline",
                    "blockType",
                    "list",
                    "textAlign",
                    "link",
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
                }}
              />
            </div>
            <div className="NoticiaInput-section-button">
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

HistoriaDoGuidismoTimelineOne.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withRouter(HistoriaDoGuidismoTimelineOne);
