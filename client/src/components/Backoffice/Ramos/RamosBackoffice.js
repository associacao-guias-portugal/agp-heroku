import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp/PopUp';
import './RamosBackoffice.css';

class RamosBackoffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      image_1: '',
      image_2: '',
      image_3: '',
      pt_banner: '',
      en_banner: '',
      pt_content: {},
      en_content: {},
      editorPT: EditorState.createEmpty(),
      editorEN: EditorState.createEmpty(),
      ramos: [],
      flash: '',
      messageStatus: ''
    }
  }

  componentDidMount = () => {    
    window.scrollTo(0, 0);
    axios.get(`/ramos`)
      .then((res) => {
        const ramosTypes = [];
        const types = res.data.map( ramo => {
          ramosTypes.push(ramo.type)
        })
        this.setState({ ramos: ramosTypes})
      })
  }

  handleSelectRamo = (event) => {

    this.setState({ type: event.target.value });

    if (event.target.value === '') {
      this.setState({
        image_1: '',
        image_2: '',
        image_3: '',
        pt_banner: '',
        en_banner: '',
        pt_content: {},
        en_content: {},
        editorPT: EditorState.createEmpty(),
        editorEN: EditorState.createEmpty(),
      })
    } else {
      const getRamo = event.target.value.split(' ').join('-');
      
      axios.get(`/ramos/${getRamo}`)
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
          image_1: results.image_1,
          image_2: results.image_2,
          image_3: results.image_3,
          pt_banner: results.pt_banner,
          en_banner: results.en_banner,
          pt_content: results.pt_content,
          en_content: results.en_content,
          editorPT: formatContentPT,
          editorEN: formatContentEN
        })
      })
    }
  }
  
  handleInfoChange = (event) => {
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
    const { history } = this.props;
    const ramoType = this.state.type.split(' ').join('-');
    const { ramos, editorPT, editorEN, messageStatus, flash, ...data } = this.state;

    axios.put(`/ramos/${ramoType}`, data)
    .then((res) => {
      this.setState({ messageStatus: 'success' }, () => {
        setTimeout(() => history.push({ pathname: '/backoffice/ramos' }), 1500)
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
    const { type, image_1, image_2, image_3, pt_banner, en_banner, editorEN, editorPT, flash, messageStatus } = this.state;

    return (
      <div className="BackRamos">
        <div className="back-ramos-title">Ramos / Dirigente</div>
        <div className="back-ramos-section">
          <div className="back-ramos-select">
            <div className="back-ramos-select-label">Mostrar conteúdo:</div>
            <select name="ramos" value={type} onChange={this.handleSelectRamo}>
              <option value={''}>Escolher Ramo...</option>
              {this.state.ramos.map((type) => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          { type ? 
            <div className="back-ramos-select-info">
              <div className="back-ramos-select-title">{type}</div>
              <form onSubmit={this.handleSubmit}>
                <div className="back-ramos-input">
                  <div className="back-ramos-label">Imagem 1:</div>
                  <input
                    type="text"
                    name="image_1"
                    value={image_1}
                    onChange={this.handleInfoChange}
                    placeholder="Link da primeira imagem da série de três"
                    required
                  />
                </div>
                <div className="back-ramos-input">
                  <div className="back-ramos-label">Imagem 2:</div>
                  <input
                    type="text"
                    name="image_2"
                    value={image_2}
                    onChange={this.handleInfoChange}
                    placeholder="Link da segunda imagem da série de três"
                    required
                  />
                </div>
                <div className="back-ramos-input">
                  <div className="back-ramos-label">Imagem 3:</div>
                  <input
                    type="text"
                    name="image_3"
                    value={image_3}
                    onChange={this.handleInfoChange}
                    placeholder="Link da terceira imagem da série de três"
                    required
                  />
                </div>
                <div className="back-ramos-input">
                  <div className="back-ramos-label">Imagem Frase PT:</div>
                  <input
                    type="text"
                    name="pt_banner"
                    value={pt_banner}
                    onChange={this.handleInfoChange}
                    placeholder="Link da imagem com frase do respectivo Ramo/Dirigente"
                    required
                  />
                </div>
                <div className="back-ramos-input">
                  <div className="back-ramos-label">Imagem Frase EN:</div>
                  <input
                    type="text"
                    name="en_banner"
                    value={en_banner}
                    onChange={this.handleInfoChange}
                    placeholder="Link da imagem com frase do respectivo Ramo/Dirigente"
                    required
                  />
                </div>
                <div className="back-ramos-editor">
                  <div className="back-ramos-label">Conteúdo PT:</div>
                  <Editor
                    editorState={editorPT}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="back-ramos-editor-input"
                    onEditorStateChange={this.handleEditorPT}
                    stripPastedStyles={true}
                    required
                    toolbar={{
                      options: [
                        'inline',
                        'fontSize',
                        'fontFamily',
                        'colorPicker',
                        'list',
                        'textAlign',
                        'link',
                        'embedded',
                      ],
                      textAlign: {
                        none: 'center',
                      },
                      image: {
                        defaultAligh: 'center',
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
                <div className="back-ramos-editor">
                  <div className="back-ramos-label">Conteúdo EN:</div>
                  <Editor
                    editorState={editorEN}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="back-ramos-editor-input"
                    onEditorStateChange={this.handleEditorEN}
                    stripPastedStyles={true}
                    required
                    toolbar={{
                      options: [
                        'inline',
                        'fontSize',
                        'fontFamily',
                        'colorPicker',
                        'list',
                        'textAlign',
                        'link',
                        'embedded',
                      ],
                      textAlign: {
                        none: 'center',
                      },
                      image: {
                        defaultAligh: 'center',
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
                      },
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
              <PopUp flashInput={flash} typeMessage={messageStatus} />
            </div>
            : ''
          }
        </div>
      </div>
    )
  };
}
 
export default withRouter(RamosBackoffice);