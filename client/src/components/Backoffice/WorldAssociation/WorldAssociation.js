import React from 'react';
import axios from 'axios';
import './../Noticias/NoticiaInput.css';
import { withRouter } from 'react-router-dom';
import {
    EditorState,
    ContentState,
    convertToRaw,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'rc-datepicker/lib/style.css';
import PopUp from '../PopUp/PopUp';

class WorldAssociation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            banner: '',
            logoWAGGGS: '',
            section1_pt: '',
            section1_en: '',
            section2_pt: '',
            section2_en: '',
            section3_column1_title_pt: '',
            section3_column1_title_en: '',
            section3_column1_text1_pt: '',
            section3_column1_text2_pt: '',
            section3_column1_text3_pt: '',
            section3_column1_text4_pt: '',
            section3_column1_text5_pt: '',
            section3_column1_text1_en: '',
            section3_column1_text2_en: '',
            section3_column1_text3_en: '',
            section3_column1_text4_en: '',
            section3_column1_text5_en: '',
            section3_column2_title_pt: '',
            section3_column2_title_en: '',
            section3_column2_text1_pt: '',
            section3_column2_text2_pt: '',
            section3_column2_text3_pt: '',
            section3_column2_text4_pt: '',
            section3_column2_text5_pt: '',
            section3_column2_text1_en: '',
            section3_column2_text2_en: '',
            section3_column2_text3_en: '',
            section3_column2_text4_en: '',
            section3_column2_text5_en: '',
            section4_pt: '',
            section4_en: '',
            section4_title_pt: '',
            section4_title_en: '',
            section4_thumbnail: '',
            section5_column1_title_pt: '',
            section5_column1_title_en: '',
            section5_column1_thumbnail: '',
            section5_column1_pt: '',
            section5_column1_en: '',
            section5_column2_title_pt: '',
            section5_column2_title_en: '',
            section5_column2_thumbnail: '',
            section5_column2_pt: '',
            section5_column2_en: '',
            messageStatus: '',
            flash: '',
            editorStateSection1_pt: EditorState.createEmpty(),
            editorStateSection1_en: EditorState.createEmpty(),
            editorStateSection4_pt: EditorState.createEmpty(),
            editorStateSection4_en: EditorState.createEmpty(),
            editorSection5_column1_pt: EditorState.createEmpty(),
            editorSection5_column1_en: EditorState.createEmpty(),
            editorSection5_column2_pt: EditorState.createEmpty(),
            editorSection5_column2_en: EditorState.createEmpty()
        }
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        axios
            .get('/worldAssociation')
            .then((results) => {
                return results.data
            })
            .then((dataresult) => {
                const contentBlockPT_section1_pt = htmlToDraft(dataresult[0].section1_pt);
                const contentBlockPT_section1_en = htmlToDraft(dataresult[0].section1_en);
                const contentBlockPT_section4_pt = htmlToDraft(dataresult[0].section4_pt);
                const contentBlockPT_section4_en = htmlToDraft(dataresult[0].section4_en);
                const contentBlockPT_section5_column1_pt = htmlToDraft(dataresult[0].section5_column1_pt);
                const contentBlockPT_section5_column1_en = htmlToDraft(dataresult[0].section5_column1_en);
                const contentBlockPT_section5_column2_pt = htmlToDraft(dataresult[0].section5_column2_pt);
                const contentBlockPT_section5_column2_en = htmlToDraft(dataresult[0].section5_column2_en);


                const contentStatePT_section1_pt = ContentState.createFromBlockArray(
                    contentBlockPT_section1_pt.contentBlocks);
                const contentStatePT_section1_en = ContentState.createFromBlockArray(
                    contentBlockPT_section1_en.contentBlocks);
                const contentStatePT_section4_pt = ContentState.createFromBlockArray(
                    contentBlockPT_section4_pt.contentBlocks);
                const contentStatePT_section4_en = ContentState.createFromBlockArray(
                    contentBlockPT_section4_en.contentBlocks);
                const contentStatePT_section5_column1_pt = ContentState.createFromBlockArray(
                    contentBlockPT_section5_column1_pt.contentBlocks);
                const contentStatePT_section5_column1_en = ContentState.createFromBlockArray(
                    contentBlockPT_section5_column1_en.contentBlocks);
                const contentStatePT_section5_column2_pt = ContentState.createFromBlockArray(
                    contentBlockPT_section5_column2_pt.contentBlocks);
                const contentStatePT_section5_column2_en = ContentState.createFromBlockArray(
                    contentBlockPT_section5_column2_en.contentBlocks);

                const formatContentPT_section1_pt = EditorState.createWithContent(contentStatePT_section1_pt);
                const formatContentPT_section1_en = EditorState.createWithContent(contentStatePT_section1_en);
                const formatContentPT_section4_pt = EditorState.createWithContent(contentStatePT_section4_pt);
                const formatContentPT_section4_en = EditorState.createWithContent(contentStatePT_section4_en);
                const formatContentPT_section5_column1_pt = EditorState.createWithContent(contentStatePT_section5_column1_pt);
                const formatContentPT_section5_column1_en = EditorState.createWithContent(contentStatePT_section5_column1_en);
                const formatContentPT_section5_column2_pt = EditorState.createWithContent(contentStatePT_section5_column2_pt);
                const formatContentPT_section5_column2_en = EditorState.createWithContent(contentStatePT_section5_column2_en);


                this.setState({
                    editorStateSection1_pt: formatContentPT_section1_pt,
                    editorStateSection1_en: formatContentPT_section1_en,
                    editorStateSection4_pt: formatContentPT_section4_pt,
                    editorStateSection4_en: formatContentPT_section4_en,
                    editorSection5_column1_pt: formatContentPT_section5_column1_pt,
                    editorSection5_column1_en: formatContentPT_section5_column1_en,
                    editorSection5_column2_pt: formatContentPT_section5_column2_pt,
                    editorSection5_column2_en: formatContentPT_section5_column2_en,
                    banner: dataresult[0].banner,
                    logoWAGGGS: dataresult[0].logoWAGGGS,
                    section1_pt: dataresult[0].section1_pt,
                    section1_en: dataresult[0].section1_en,
                    section2_pt: dataresult[0].section2_pt,
                    section2_en: dataresult[0].section2_en,
                    section3_column1_title_pt: dataresult[0].section3_column1_title_pt,
                    section3_column1_title_en: dataresult[0].section3_column1_title_en,
                    section3_column1_text1_pt: dataresult[0].section3_column1_text1_pt,
                    section3_column1_text2_pt: dataresult[0].section3_column1_text2_pt,
                    section3_column1_text3_pt: dataresult[0].section3_column1_text3_pt,
                    section3_column1_text4_pt: dataresult[0].section3_column1_text4_pt,
                    section3_column1_text5_pt: dataresult[0].section3_column1_text5_pt,
                    section3_column1_text1_en: dataresult[0].section3_column1_text1_en,
                    section3_column1_text2_en: dataresult[0].section3_column1_text2_en,
                    section3_column1_text3_en: dataresult[0].section3_column1_text3_en,
                    section3_column1_text4_en: dataresult[0].section3_column1_text4_en,
                    section3_column1_text5_en: dataresult[0].section3_column1_text5_en,
                    section3_column2_title_pt: dataresult[0].section3_column2_title_pt,
                    section3_column2_title_en: dataresult[0].section3_column2_title_en,
                    section3_column2_text1_pt: dataresult[0].section3_column2_text1_pt,
                    section3_column2_text2_pt: dataresult[0].section3_column2_text2_pt,
                    section3_column2_text3_pt: dataresult[0].section3_column2_text3_pt,
                    section3_column2_text4_pt: dataresult[0].section3_column2_text4_pt,
                    section3_column2_text5_pt: dataresult[0].section3_column2_text5_pt,
                    section3_column2_text1_en: dataresult[0].section3_column2_text1_en,
                    section3_column2_text2_en: dataresult[0].section3_column2_text2_en,
                    section3_column2_text3_en: dataresult[0].section3_column2_text3_en,
                    section3_column2_text4_en: dataresult[0].section3_column2_text4_en,
                    section3_column2_text5_en: dataresult[0].section3_column2_text5_en,
                    section4_title_pt: dataresult[0].section4_title_pt,
                    section4_title_en: dataresult[0].section4_title_en,
                    section4_pt: dataresult[0].section4_pt,
                    section4_en: dataresult[0].section4_en,
                    section4_thumbnail: dataresult[0].section4_thumbnail,
                    section5_column1_title_pt: dataresult[0].section5_column1_title_pt,
                    section5_column1_title_en: dataresult[0].section5_column1_title_en,
                    section5_column1_thumbnail: dataresult[0].section5_column1_thumbnail,
                    section5_column1_pt: dataresult[0].section5_column1_pt,
                    section5_column1_en: dataresult[0].section5_column1_en,
                    section5_column2_title_pt: dataresult[0].section5_column2_title_pt,
                    section5_column2_title_en: dataresult[0].section5_column2_title_en,
                    section5_column2_thumbnail: dataresult[0].section5_column2_thumbnail,
                    section5_column2_pt: dataresult[0].section5_column2_pt,
                    section5_column2_en: dataresult[0].section5_column2_en
                })
            })
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { history } = this.props;
        const {
            editorStateSection1_pt,
            editorStateSection1_en,
            editorStateSection4_pt,
            editorStateSection4_en,
            editorSection5_column1_pt,
            editorSection5_column1_en,
            editorSection5_column2_pt,
            editorSection5_column2_en,
            flash,
            messageStatus,
            ...WorldAssociationData
        } = this.state

        axios
            .put('/worldAssociation/editWorldAssociation', WorldAssociationData)
            .then((res) => {
                this.setState({ messageStatus: 'success' }, () => {
                  setTimeout(() => history.push({ pathname: '/backoffice/associacaoMundial' }), 1500)
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

    onEditorStateChangeSection1_pt = (editorStateSection1_pt) => {
        this.setState({ editorStateSection1_pt })
        const rawContentState = convertToRaw(
            this.state.editorStateSection1_pt.getCurrentContent())
        const HtmlContent_section1_pt = draftToHtml(rawContentState)
        this.setState({ section1_pt: HtmlContent_section1_pt })
    }

    onEditorStateChangeSection1_en = (editorStateSection1_en) => {
        this.setState({ editorStateSection1_en })
        const rawContentState = convertToRaw(
            this.state.editorStateSection1_en.getCurrentContent())
        const HtmlContent_section1_en = draftToHtml(rawContentState)
        this.setState({ section1_en: HtmlContent_section1_en })
    }

    onEditorStateChangeSection4_pt = (editorStateSection4_pt) => {
        this.setState({ editorStateSection4_pt })
        const rawContentState = convertToRaw(
            this.state.editorStateSection4_pt.getCurrentContent())
        const HtmlContent_section4_pt = draftToHtml(rawContentState)
        this.setState({ section4_pt: HtmlContent_section4_pt })
    }

    onEditorStateChangeSection4_en = (editorStateSection4_en) => {
        this.setState({ editorStateSection4_en })
        const rawContentState = convertToRaw(
            this.state.editorStateSection4_en.getCurrentContent())
        const HtmlContent_section4_en = draftToHtml(rawContentState)
        this.setState({ section4_en: HtmlContent_section4_en })
    }

    onEditorStateChangeSection5_column1_pt = (editorSection5_column1_pt) => {
        this.setState({ editorSection5_column1_pt })
        const rawContentState = convertToRaw(
            this.state.editorSection5_column1_pt.getCurrentContent())
        const HtmlContent_section5_column1_pt = draftToHtml(rawContentState)
        this.setState({ section5_column1_pt: HtmlContent_section5_column1_pt })
    }

    onEditorStateChangeSection5_column1_en = (editorSection5_column1_en) => {
        this.setState({ editorSection5_column1_en })
        const rawContentState = convertToRaw(
            this.state.editorSection5_column1_en.getCurrentContent())
        const HtmlContent_section5_column1_en = draftToHtml(rawContentState)
        this.setState({ section5_column1_en: HtmlContent_section5_column1_en })
    }

    onEditorStateChangeSection5_column2_pt = (editorSection5_column2_pt) => {
        this.setState({ editorSection5_column2_pt })
        const rawContentState = convertToRaw(
            this.state.editorSection5_column2_pt.getCurrentContent())
        const HtmlContent_section5_column2_pt = draftToHtml(rawContentState)
        this.setState({ section5_column2_pt: HtmlContent_section5_column2_pt })
    }

    onEditorStateChangeSection5_column2_en = (editorSection5_column2_en) => {
        this.setState({ editorSection5_column2_en })
        const rawContentState = convertToRaw(
            this.state.editorSection5_column2_en.getCurrentContent())
        const HtmlContent_section5_column2_en = draftToHtml(rawContentState)
        this.setState({ section5_column2_en: HtmlContent_section5_column2_en })
    }


    render() {
        const {
            editorStateSection1_pt,
            editorStateSection1_en,
            editorStateSection4_pt,
            editorStateSection4_en,
            editorSection5_column1_pt,
            editorSection5_column1_en,
            editorSection5_column2_pt,
            editorSection5_column2_en } = this.state
        return (

            <div className="ContatoInput" >
                <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
                    <div className="NoticiaInput-title">Associação Mundial</div>
                    <div className="input">
                        <div className="input-section-label">Imagem Banner</div>
                        <input type="text" name="banner" value={this.state.banner} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Logo WAGGGS</div>
                        <input type="text" name="logoWAGGGS" value={this.state.logoWAGGGS} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Intro Texto PT</div>
                        <Editor
                            editorState={editorStateSection1_pt}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection1_pt}
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
                        <div className="input-section-label">Intro Texto EN</div>
                        <Editor
                            editorState={editorStateSection1_en}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection1_en}
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
                        <div className="input-section-label">Frase Azul PT</div>
                        <input type="text" name="section2_pt" value={this.state.section2_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Frase Azul EN</div>
                        <input type="text" name="section2_en" value={this.state.section2_en} onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="input-section-label-subtitle">Objectivos WAGGGS</div>

                    <div className="input">
                        <div className="input-section-label">Coluna 1 Título PT</div>
                        <input type="text" name="section3_column1_title_pt" value={this.state.section3_column1_title_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Título EN</div>
                        <input type="text" name="section3_column1_title_en" value={this.state.section3_column1_title_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 1 PT</div>
                        <input type="text" name="section3_column1_text1_pt" value={this.state.section3_column1_text1_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 1 EN</div>
                        <input type="text" name="section3_column1_text1_en" value={this.state.section3_column1_text1_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 2 PT</div>
                        <input type="text" name="section3_column1_text2_pt" value={this.state.section3_column1_text2_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 2 EN</div>
                        <input type="text" name="section3_column1_text2_en" value={this.state.section3_column1_text2_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 3 PT</div>
                        <input type="text" name="section3_column1_text3_pt" value={this.state.section3_column1_text3_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 3 EN</div>
                        <input type="text" name="section3_column1_text3_en" value={this.state.section3_column1_text3_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 4 PT</div>
                        <input type="text" name="section3_column1_text4_pt" value={this.state.section3_column1_text4_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 4 EN</div>
                        <input type="text" name="section3_column1_text4_en" value={this.state.section3_column1_text4_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 5 PT</div>
                        <input type="text" name="section3_column1_text5_pt" value={this.state.section3_column1_text5_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 1 Texto 5 EN</div>
                        <input type="text" name="section3_column1_text5_en" value={this.state.section3_column1_text5_en} onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="input-section-label-subtitle">Papel decisivo no desenvolvimento comunitário</div>

                    <div className="input">
                        <div className="input-section-label">Coluna 2 Título PT</div>
                        <input type="text" name="section3_column2_title_pt" value={this.state.section3_column2_title_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Título EN</div>
                        <input type="text" name="section3_column2_title_en" value={this.state.section3_column2_title_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 1 PT</div>
                        <input type="text" name="section3_column2_text1_pt" value={this.state.section3_column2_text1_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 1 EN</div>
                        <input type="text" name="section3_column2_text1_en" value={this.state.section3_column2_text1_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 2 PT</div>
                        <input type="text" name="section3_column2_text2_pt" value={this.state.section3_column2_text2_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 2 EN</div>
                        <input type="text" name="section3_column2_text2_en" value={this.state.section3_column2_text2_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 3 PT</div>
                        <input type="text" name="section3_column2_text3_pt" value={this.state.section3_column2_text3_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 3 EN</div>
                        <input type="text" name="section3_column2_text3_en" value={this.state.section3_column2_text3_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 4 PT</div>
                        <input type="text" name="section3_column2_text4_pt" value={this.state.section3_column2_text4_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 4 EN</div>
                        <input type="text" name="section3_column2_text4_en" value={this.state.section3_column2_text4_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 5 PT</div>
                        <input type="text" name="section3_column2_text5_pt" value={this.state.section3_column2_text5_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Coluna 2 Texto 5 EN</div>
                        <input type="text" name="section3_column2_text5_en" value={this.state.section3_column2_text5_en} onChange={(event) => this.handleChange(event)} />
                    </div>

                    <div className="input-section-label-subtitle">Centros Mundiais</div>

                    <div className="input">
                        <div className="input-section-label">Título PT</div>
                        <input type="text" name="section4_title_pt" value={this.state.section4_title_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Título EN</div>
                        <input type="text" name="section4_title_en" value={this.state.section4_title_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Imagem</div>
                        <input type="text" name="section4_thumbnail" value={this.state.section4_thumbnail} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto PT</div>
                        <Editor
                            editorState={editorStateSection4_pt}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection4_pt}
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
                        <div className="input-section-label">Texto EN</div>
                        <Editor
                            editorState={editorStateSection4_en}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection4_en}
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

                    <div className="input-section-label-subtitle">Dia Mundial do Pensamento</div>

                    <div className="input">
                        <div className="input-section-label">Título PT</div>
                        <input type="text" name="section5_column1_title_pt" value={this.state.section5_column1_title_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto PT</div>
                        <Editor
                            editorState={editorSection5_column1_pt}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection5_column1_pt}
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
                        <div className="input-section-label">Título EN</div>
                        <input type="text" name="section5_column1_title_en" value={this.state.section5_column1_title_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto EN</div>

                        <Editor
                            editorState={editorSection5_column1_en}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection5_column1_en}
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

                    <div className="input-section-label-subtitle">Tostão Mundial</div>

                    <div className="input">
                        <div className="input-section-label">Título PT</div>
                        <input type="text" name="section5_column2_title_pt" value={this.state.section5_column2_title_pt} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto PT</div>

                        <Editor
                            editorState={editorSection5_column2_pt}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection5_column2_pt}
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
                        <div className="input-section-label">Título EN</div>
                        <input type="text" name="section5_column2_title_en" value={this.state.section5_column2_title_en} onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="input input-block">
                        <div className="input-section-label">Texto EN</div>

                        <Editor
                            editorState={editorSection5_column2_en}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="NoticiaInput-editor"
                            onEditorStateChange={this.onEditorStateChangeSection5_column2_en}
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
                        <button className="login-button" type="submit">
                            GRAVAR
                    </button>
                    </div>
                </form>
                <PopUp flashInput={this.state.flash} typeMessage={this.state.messageStatus} />

            </div>
        )
    }

}

export default withRouter(WorldAssociation);