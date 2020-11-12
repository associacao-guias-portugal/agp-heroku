import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import PopUp from '../PopUp/PopUp';
import './MetodoBackoffice.css';

class MetodoAtividadeBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_title: '',
      en_title: '',
      image: '',
      editorPT: EditorState.createEmpty(),
      editorEN: EditorState.createEmpty(),
      flash: '',
      messageStatus: '',
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
  
    axios.get(`/metodo-guidista/atividades/${match.params.item}`)
      .then((res) => {
        const results = res.data[0];
        const contentBlockPT = htmlToDraft(results.pt_content);
        const contentBlockEN = htmlToDraft(results.en_content);
        const contentStatePT = ContentState.createFromBlockArray(
          contentBlockPT.contentBlocks,
        );
        const contentStateEN = ContentState.createFromBlockArray(
          contentBlockEN.contentBlocks,
        );
        const formatContentPT = EditorState.createWithContent(contentStatePT);
        const formatContentEN = EditorState.createWithContent(contentStateEN);
  
        this.setState({ 
          pt_title: results.pt_title,
          en_title: results.en_title,
          image: results.image,
          pt_content: results.pt_content,
          en_content: results.en_content,
          editorPT: formatContentPT,
          editorEN: formatContentEN
        });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({ [name]: value });
  }

  handleEditorPT = (editorPT) => {
    this.setState({ editorPT });
    const { pt_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorPT.getCurrentContent(),
    );
    const HtmlContentPT = draftToHtml(rawContentState);
    this.setState({ pt_content: HtmlContentPT });
  };

  handleEditorEN = (editorEN) => {
    this.setState({ editorEN });
    const { en_content } = this.state;
    const rawContentState = convertToRaw(
      this.state.editorEN.getCurrentContent(),
    );
    const HtmlContentEN = draftToHtml(rawContentState);
    this.setState({ en_content: HtmlContentEN });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { match, history } = this.props;
    const id = match.params.item;
    const { editorPT, editorEN, messageStatus, flash, ...data } = this.state;

    axios.put(`/metodo-guidista/atividades/${id}`, data)
      .then((res) => {
        this.setState({ messageStatus: 'success' }, () => {
          setTimeout(() => history.push({ pathname: '/backoffice/metodo-guidista' }), 1500)
        });
        this.setState({ flash: 'Guardado com sucesso.' })
      })
      .catch((err) => {
        this.setState({
          messageStatus: 'error',
          flash: 'Ocorreu um erro, por favor tente outra vez.',
        });
      });
  };  


  render() {
    const { pt_title, en_title, image, editorPT, editorEN, flash, messageStatus } = this.state;

    return (
      <div className="MetodoAtividadeBack">
        <div className="back-metodo-title">Método Guidista - Atividades</div>
        <div className="back-metodo-subtitle">{pt_title}</div>
        <div className="back-metodo-section">
          <form onSubmit={this.handleSubmit}>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.handleChange}
                placeholder="Título do Ferramenta"
                maxLength="50"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título EN:</div>
              <input
                type="text"
                name="en_title"
                value={en_title}
                onChange={this.handleChange}
                placeholder="Título do Ferramenta em Inglês"
                maxLength="50"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Imagem Conteúdo:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.handleChange}
                placeholder="Link da imagem do conteúdo da Ferramenta"
                required
              />
            </div>
            <div className="back-metodo-editor">
              <div className="back-metodo-label">Texto Conteúdo PT:</div>
              <Editor
                editorState={editorPT}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="back-metodo-editor-input"
                onEditorStateChange={this.handleEditorPT}
                stripPastedStyles={true}
                toolbar={{
                  options: [
                    'inline',
                    'fontSize',
                    'fontFamily',
                    'colorPicker',
                    'list',
                    'textAlign',
                    'link',
                  ],
                  textAlign: {
                    none: 'center',
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
            <div className="back-metodo-editor">
              <div className="back-metodo-label">Texto Conteúdo EN:</div>
              <Editor
                editorState={editorEN}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="back-metodo-editor-input"
                onEditorStateChange={this.handleEditorEN}
                stripPastedStyles={true}
                toolbar={{
                  options: [
                    'inline',
                    'fontSize',
                    'fontFamily',
                    'colorPicker',
                    'list',
                    'textAlign',
                    'link',
                  ],
                  textAlign: {
                    none: 'center',
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
            <div className="back-ramos-button">
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

MetodoAtividadeBack.propTypes = {
  match: PropTypes.string.isRequired,
};
 
 
export default MetodoAtividadeBack;