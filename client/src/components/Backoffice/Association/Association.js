import React, { Component } from 'react';
import axios from 'axios';
import './../Noticias/NoticiaInput.css';
import { withRouter } from 'react-router-dom';
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp/PopUp';

class Association extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section_id: '',
            position: '',
            editorStatePT: EditorState.createEmpty(),
            editorStateEN: EditorState.createEmpty(),
            section_text_pt: {},
            section_text_en: {},
            section_thumbnail: '',
            publish: false,
            messageStatus: '',
            flash: ''
        }
    }

    getAssotiationDataSection = () => {
        const match = this.props.match;
        const getSection_id = match.params.section_id;

        getSection_id !== 'new' &&
            axios
                .get(`/association/${getSection_id}`)
                .then((res) => {
                    const results = res.data[0]

                    let getPublish = results.publish

                    getPublish === 1 ?
                        getPublish = true
                        :
                        getPublish = false

                    const contentBlockPT = htmlToDraft(results.section_text_pt);
                    const contentBlockEN = htmlToDraft(results.section_text_en);

                    const contentStatePT = ContentState.createFromBlockArray(
                        contentBlockPT.contentBlocks,
                    );
                    const contentStateEN = ContentState.createFromBlockArray(
                        contentBlockEN.contentBlocks,
                    );

                    const formatContentPT = EditorState.createWithContent(contentStatePT);
                    const formatContentEN = EditorState.createWithContent(contentStateEN);


                    this.setState({
                        section_id: results.section_id,
                        position: results.position,
                        section_thumbnail: results.section_thumbnail,
                        publish: getPublish,
                        section_text_pt: results.section_text_pt,
                        section_text_en: results.section_text_en,
                        editorStatePT: formatContentPT,
                        editorStateEN: formatContentEN
                    })
                })

    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        this.getAssotiationDataSection()

    }

    handleChange = (event) => {
        const { name } = event.target;
        const { value } = event.target;
        this.setState({ [name]: value });
    }

    updatePublish = () => {
        const { publish } = this.state;
        this.setState({ publish: !publish })
    }

    onEditorStateChangePT = (editorStatePT) => {
        this.setState({ editorStatePT });
        const rawContentState = convertToRaw(
            this.state.editorStatePT.getCurrentContent(),
        );
        const HtmlContentPT = draftToHtml(rawContentState);
        this.setState({ section_text_pt: HtmlContentPT });
    };

    onEditorStateChangeEN = (editorStateEN) => {
        this.setState({ editorStateEN });
        const rawContentState = convertToRaw(
            this.state.editorStateEN.getCurrentContent(),
        );
        const HtmlContentEN = draftToHtml(rawContentState);
        this.setState({ section_text_en: HtmlContentEN });
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const { history, match } = this.props
        const getSection_id = match.params.section_id


        const {
            editorStatePT,
            editorStateEN,
            messageStatus,
            flash,
            ...section
        } = this.state

        getSection_id !== 'new' ?
            axios.put('/association/editSection', section)
                .then((res) => {
                    this.setState({ messageStatus: 'success' }, () => {
                        setTimeout(() => history.push({ pathname: '/backoffice/associacao/painel' }), 1500)
                    });
                    this.setState({ flash: 'Guardado com sucesso.' })
                })
                .catch((err) => {
                    this.setState({
                        messageStatus: 'error',
                        flash: 'Ocorreu um erro, por favor tente outra vez.',
                    });
                })
            :
            axios.post('/association/newSection', section)
                .then((res) => {
                    this.setState({ messageStatus: 'success' }, () => {
                        setTimeout(() => history.push({ pathname: '/backoffice/associacao/painel' }), 1500)
                    });
                    this.setState({ flash: 'Guardado com sucesso.' })
                })
                .catch((err) => {
                    this.setState({
                        messageStatus: 'error',
                        flash: 'Ocorreu um erro, por favor tente outra vez.',
                    });
                });
    }


    render() {
        const match = this.props.match;
        const getSection_id = match.params.section_id;
        const { editorStatePT, editorStateEN } = this.state

        return (
            <div className="ContatoInput" >
                <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
                    {getSection_id !== 'new' ?
                        <div className="NoticiaInput-title">Associação - Edição de secção</div>
                        :
                        <div className="NoticiaInput-title">Associação - Nova Secção </div>
                    }

                    <div className="input">
                        <div className="input-section-label">Imagem</div>
                        <input type='text' name='section_thumbnail' value={this.state.section_thumbnail} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Posição de renderização da secção</div>
                        <input type='text' name='position' value={this.state.position} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto PT</div>
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
                                    'inline',
                                    'blockType',
                                    'fontSize',
                                    'fontFamily',
                                    'list',
                                    'textAlign',
                                    'colorPicker',
                                    'link',
                                    'embedded' /* , 'emoji' */,
                                    'image' /* , 'remove' */,
                                    'history',
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
                                    colors: ['rgb(0, 73, 130)', 'rgb(26, 163, 219)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                                        'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
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
                        <div className="input-section-label">Texto EN</div>
                        <Editor
                            editorState={editorStateEN}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeEN}
                            stripPastedStyles={true}
                            required
                            toolbar={{
                                options: [
                                    'inline',
                                    'blockType',
                                    'fontSize',
                                    'fontFamily',
                                    'list',
                                    'textAlign',
                                    'colorPicker',
                                    'link',
                                    'embedded' /* , 'emoji' */,
                                    'image' /* , 'remove' */,
                                    'history',
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
                                    colors: ['rgb(26, 163, 219)', 'rgb(0, 73, 130)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                                        'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
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
                        <div className="input-section-label-publish">Publicar</div>
                        <input type='checkbox' name='publish' value={this.state.publish} checked={this.state.publish} onChange={this.updatePublish} />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" type='submit'>
                            GRAVAR
                        </button>
                    </div>
                </form>
                <PopUp flashInput={this.state.flash} typeMessage={this.state.messageStatus} />
            </div>
        )
    }
}

export default withRouter(Association);