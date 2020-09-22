import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
//import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
//import "rc-datepicker/lib/style.css";
import PopUp from "../PopUp/PopUp";
import "./PalavraAosPaisInput.css";

class PalavraAosPaisTextoImagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_title: "",
      en_title: "",
      position:"",
      image: "",
      pt_text: {},
      en_text: {},
      editorStatePT: EditorState.createEmpty(),
      editorStateEN: EditorState.createEmpty(),
      publish: false,
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
    const getId = match.params.id;
    if (getId) {
      axios.get(`/palavra-aos-pais/palavraaospais2/${getId}`).then((res) => {
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
          pt_title: results.pt_title,
          en_title: results.en_title,
          position: results.position,
          image: results.image,
          publish: getPublish,
          pt_text: results.pt_text,
          en_text: results.pt_text,
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
      ...text_image
    } = this.state;
    const { match, history } = this.props;
    const getId = match.params.id;
    
    if (getId) {
      axios.put(`/palavra-aos-pais/palavraaospais2/${getId}`, text_image)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () => {
            setTimeout(
              () => history.push({ pathname: "/backoffice/palavra-aos-pais" }),
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
      axios.post("/palavra-aos-pais/palavraaospais2/", text_image)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () => {
            setTimeout(
              () => history.push({ pathname: "/backoffice/palavra-aos-pais" }),
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
      pt_title,
      en_title,
      position,
      image,
      publish,
      editorStatePT,
      editorStateEN,
      flash,
      messageStatus,
    } = this.state;

    return (
      <div className="PalavraAosPaisInput">
        <div className="PalavraAosPaisInput-title">Texto / Imagem </div>
        <div className="PalavraAosPaisInput-section">
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
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN:</div>
              <input
                type="text"
                name="en_title"
                value={en_title}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Image:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.updateField}
                placeholder="Link da imagem para o conteúdo da notícia"
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
                    "colorPicker",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
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
                    "colorPicker",
                    "link",
                    "embedded",
                    "history",
                  ],
                  textAlign: {
                    none: "center",
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

PalavraAosPaisTextoImagem.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withRouter(PalavraAosPaisTextoImagem);
