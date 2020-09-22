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
import "./NoticiaInput.css";
import PopUp from "../PopUp/PopUp";

class NoticiaInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_title: "",
      en_title: "",
      thumbnail: "",
      image: "",
      pt_intro_text: "",
      en_intro_text: "",
      pt_date: "",
      en_date: "",
      date: "",
      publish: false,
      editorStatePT: EditorState.createEmpty(),
      editorStateEN: EditorState.createEmpty(),
      pt_content: {},
      en_content: {},
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
    const getId = match.params.id;

    if (getId) {
      axios
        .get(`/news/${getId}`)
        .then((res) => {
          console.log("data", res);
          const results = res.data[0];
          const formatDate = results.date.substr(0, 10);

          let getPublish = results.publish;
          if (getPublish === 1) {
            getPublish = true;
          } else {
            getPublish = false;
          }

          const contentBlockPT = htmlToDraft(results.pt_content);
          const contentBlockEN = htmlToDraft(results.en_content);

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
            thumbnail: results.thumbnail,
            image: results.image,
            pt_intro_text: results.pt_intro_text,
            en_intro_text: results.en_intro_text,
            pt_date: results.pt_date,
            en_date: results.en_date,
            date: formatDate,
            publish: getPublish,
            pt_content: results.pt_content,
            en_content: results.en_content,
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
    const { pt_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStatePT.getCurrentContent()
    );
    const HtmlContentPT = draftToHtml(rawContentState);
    this.setState({ pt_content: HtmlContentPT });
    //console.log('update', pt_content);
  };

  onEditorStateChangeEN = (editorStateEN) => {
    this.setState({ editorStateEN });
    const { en_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorStateEN.getCurrentContent()
    );
    const HtmlContentEN = draftToHtml(rawContentState);
    this.setState({ en_content: HtmlContentEN });
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
      ...article
    } = this.state;
    const { match, history } = this.props;
    const getId = match.params.id;
    
    if (getId) {
      axios.put(`/news/${getId}`, article)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () => {
            setTimeout(
              () => history.push({ pathname: "/backoffice/news/painel" }),
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
      axios.post("/news", article)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () => {
            setTimeout(
              () => history.push({ pathname: "/backoffice/news/painel" }),
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
      pt_intro_text,
      en_intro_text,
      pt_date,
      en_date,
      thumbnail,
      image,
      date,
      publish,
      editorStatePT,
      editorStateEN,
      flash,
      messageStatus,
    } = this.state;

    return (
      <div className="NoticiaInput">
        <div className="NoticiaInput-title">Notícias</div>
        <div className="NoticiaInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.updateField}
                placeholder="Máximo de 80 caracteres"
                maxLength="80"
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
                placeholder="Maximum of 80 characters"
                maxLength="80"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Descrição PT:</div>
              <input
                type="text"
                name="pt_intro_text"
                value={pt_intro_text}
                onChange={this.updateField}
                placeholder="Máximo de 100 caracteres"
                maxLength="100"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Descrição EN:</div>
              <input
                type="text"
                name="en_intro_text"
                value={en_intro_text}
                onChange={this.updateField}
                placeholder="Maximum of 100 characters"
                maxLength="100"
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Data completa:</div>
              <input
                className="label-uppercase"
                type="date"
                name="date"
                value={date}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input-legendas-datas">
              <div className="input">
                <div className="input-section-label">Legenda Data PT:</div>
                <input
                  type="text"
                  name="pt_date"
                  value={pt_date}
                  onChange={this.updateField}
                  placeholder="Ex: ABR 2020"
                  maxLength="8"
                  required
                />
              </div>
              <div className="input">
                <div className="input-section-label">Legenda Data EN:</div>
                <input
                  type="text"
                  name="en_date"
                  value={en_date}
                  onChange={this.updateField}
                  placeholder="Ex: APR 2020"
                  maxLength="8"
                  required
                />
              </div>
            </div>
            <div className="input">
              <div className="input-section-label">Thumbnail:</div>
              <input
                type="text"
                name="thumbnail"
                value={thumbnail}
                onChange={this.updateField}
                placeholder="Link da imagem pequena para a página das notícias"
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
                    "fontSize",
                    "fontFamily",
                    "list",
                    "textAlign",
                    "colorPicker",
                    "link",
                    "embedded" /* , 'emoji' */,
                    "image" /* , 'remove' */,
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
                    "fontSize",
                    "fontFamily",
                    "list",
                    "textAlign",
                    "colorPicker",
                    "link",
                    "embedded" /* , 'emoji' */,
                    "image" /* ,  'remove' */,
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

NoticiaInput.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withRouter(NoticiaInput);
