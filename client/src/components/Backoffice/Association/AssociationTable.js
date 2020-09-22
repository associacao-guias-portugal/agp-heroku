import React, { Component } from "react";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";
import "../Noticias/NoticiasPainel.css";
import "./../Noticias/NoticiaInput.css";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import PopUp from "../PopUp/PopUp";
import ReactHtmlParser from "react-html-parser";
import {
  EditorState,
  ContentState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "rc-datepicker/lib/style.css";
import './AssociationBack.css';

class AssociationTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seccoes: [],
      showModal: false,
      section_id: 0,
      banner: "",
      title_pt: "",
      title_en: "",
      text1_pt: "",
      text1_en: "",
      text2_pt: "",
      text2_en: "",
      editorState_text1_pt: EditorState.createEmpty(),
      editorState_text1_en: EditorState.createEmpty(),
      title_sections_pt: "",
      title_sections_en: "",
      flash: "",
      messageStatus: "",
    };
  }
  getDataSeccoes = () => {
    axios
      .get("/association")
      .then((response) => {
        return response.data;
      })
      .then((dataResult) => {
        this.setState({ seccoes: dataResult });
      });
  };

  getDataHeader = () => {
    axios.get("/association/associationHeader").then((dataresult) => {
      const headerData = dataresult.data[0];

      const contentBlockPT_text1_pt = htmlToDraft(headerData.text1_pt);
      const contentBlockEN_text1_en = htmlToDraft(headerData.text1_en);

      const contentStatePT_text1_pt = ContentState.createFromBlockArray(
        contentBlockPT_text1_pt.contentBlocks
      );
      const contentStateEN_text1_en = ContentState.createFromBlockArray(
        contentBlockEN_text1_en.contentBlocks
      );

      const formatContentPT_text1_pt = EditorState.createWithContent(
        contentStatePT_text1_pt
      );
      const formatContentPT_text1_en = EditorState.createWithContent(
        contentStateEN_text1_en
      );

      this.setState({
        editorState_text1_pt: formatContentPT_text1_pt,
        editorState_text1_en: formatContentPT_text1_en,
        banner: headerData.banner,
        title_pt: headerData.title_pt,
        title_en: headerData.title_en,
        text1_pt: headerData.text1_pt,
        text1_en: headerData.text1_en,
        text2_pt: headerData.text2_pt,
        text2_en: headerData.text2_en,
        title_sections_pt: headerData.title_sections_pt,
        title_sections_en: headerData.title_sections_en,
      });
    });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getDataSeccoes();
    this.getDataHeader();
  };

  handleModalDelete = () => {
    const section_id = this.state.section_id;
    axios
      .delete(`/association/deleteSection/${section_id}`)
      .then((response) => {
        this.setState({ showModal: false });
      });
    this.getDataSeccoes();
    window.location.reload();
  };

  handleModal = () => {
    const showModal = this.state.showModal;
    this.setState({ showModal: !showModal });
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      seccoes,
      showModal,
      section_id,
      flash,
      messageStatus,
      editorState_text1_pt,
      editorState_text1_en,
      ...headerData
    } = this.state;
    const { history } = this.props;

    console.log("edit!", this.state.text1_pt);
    console.log("edit!", this.state.editorState_text1_pt);
    
    axios.put("/association/editHeader", headerData)
      .then((res) => {
        this.setState({
          banner: this.state.banner,
          title_pt: this.state.title_pt,
          title_en: this.state.title_en,
          text1_pt: this.state.text1_pt,
          text1_en: this.state.text1_en,
          text2_pt: this.state.text2_pt,
          text2_en: this.state.text2_en,
        });
      })
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
  };

  onEditorStateChangetext1_pt = (editorState_text1_pt) => {
    console.log("what", this.state.editorState_text1_pt)
    this.setState({ editorState_text1_pt });
    const rawContentState = convertToRaw(
      this.state.editorState_text1_pt.getCurrentContent()
    );
    const HtmlContent_text1_pt = draftToHtml(rawContentState);
    this.setState({ text1_pt: HtmlContent_text1_pt });
  };

  onEditorStateChangetext1_en = (editorState_text1_en) => {
    this.setState({ editorState_text1_en });
    const rawContentState = convertToRaw(
      this.state.editorState_text1_en.getCurrentContent()
    );
    const HtmlContent_text1_en = draftToHtml(rawContentState);
    this.setState({ text1_en: HtmlContent_text1_en });
  };

  render() {
    const { seccoes, showModal } = this.state;
    const link = "/backoffice/associacao/painel/new";

    const columns = [
      {
        dataField: "publish",
        text: "Status",
        filter: textFilter(),
        sorte: true,
        headerStyle: () => ({ width: "5%" }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return "Publicado";
          } else {
            return "Não Publicado";
          }
        },
        align: "center",
      },
      {
        dataField: "position",
        text: "Posição",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "8%" }),
        align: "center",
      },
      {
        dataField: "section_text_pt",
        text: "Texto da secção",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "20%" }),
        formatter: (section_text_pt) => (
          <span className="association-info">{ReactHtmlParser(section_text_pt)}</span>
        ),
      },
      {
        dataField: "section_id",
        text: "Editar",
        formatter: (section_id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/associacao/painel/${section_id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "5%" }),
        align: "center",
      },
      {
        dataField: "section_id",
        text: "Eliminar",
        formatter: (section_id) => (
          <a
              style={{
              cursor: "pointer",
              textDecoration: "none",
              justifyContent: "center",
            }}
            onClick={() => this.handleModal()}
          >
            <span role="img" aria-label="trash">
              🗑
            </span>
          </a>
        ),
        headerStyle: () => ({ width: "5%" }),
        align: "center",
      },
    ];
    const rowEvents = {
      onClick: (e, row) => {
        this.setState({ section_id: row.section_id });
      },
    };

    return (
      <div>
        <div className="ContatoInput">
          <div className="NoticiasPainel-title">A Associação</div>
          <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Imagem Banner</div>
              <input
                type="text"
                name="banner"
                value={this.state.banner}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título PT</div>
              <input
                type="text"
                name="title_pt"
                value={this.state.title_pt}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN</div>
              <input
                type="text"
                name="title_en"
                value={this.state.title_en}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input-section-label">Intro Texto PT</div>
            <div className="input input-block">
              <Editor
                editorState={this.state.editorState_text1_pt}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangetext1_pt}
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
                    colors: ['rgb(0, 73, 130)', 'rgb(26, 163, 219)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                        'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
                        'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                        'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                        'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                        'rgb(163,143,132)']
                },

                }}
              />
            </div>
            <div className="input-section-label">Intro Texto EN</div>
            <div className="input input-block">
              <Editor
                editorState={this.state.editorState_text1_en}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangetext1_en}
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
                    colors: ['rgb(0, 73, 130)', 'rgb(26, 163, 219)', 'rgb(97,189,109)', 'rgb(26,188,156)',
                        'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(204,204,204)', 'rgb(65,168,95)',
                        'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(0,168,133)', 'rgb(61,142,185)',
                        'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
                        'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)',
                        'rgb(163,143,132)']
                },
                }}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Frase Azul PT</div>
              <input
                type="text"
                name="text2_pt"
                value={this.state.text2_pt}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Frase Azul EN</div>
              <input
                type="text"
                name="text2_en"
                value={this.state.text2_en}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Cronologia Título PT</div>
              <input
                type="text"
                name="title_sections_pt"
                value={this.state.title_sections_pt}
                onChange={(event) => this.handleChange(event)}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Cronologia Título EN</div>
              <input
                type="text"
                name="title_sections_en"
                value={this.state.title_sections_en}
                onChange={(event) => this.handleChange(event)}
              />
            </div>

            <div className="NoticiaInput-section-button">
              <button className="login-button" type="submit">
                GRAVAR
              </button>
            </div>
          </form>
          <PopUp
            flashInput={this.state.flash}
            typeMessage={this.state.messageStatus}
          />
        </div>

        <div className="NoticiasPainel">
          <div className="NoticiasPainel-title">Quadro Secções Associação</div>
          <div className="JornalPainel-section-button">
            <Link to={link}>
              <button className="NoticiasPainel-button" type="submit">
                Criar secção
              </button>
            </Link>
          </div>
          <div className="AssociacaoPainel-Table">
            <BootstrapTable
              className="BootstrapTable"
              bootstrap4
              keyField="position"
              data={seccoes}
              columns={columns}
              pagination={paginationFactory()}
              filter={filterFactory()}
              filterPosition="top"
              rowEvents={rowEvents}
            />
          </div>
          <ModalPopup
            show={showModal}
            handleDelete={this.handleModalDelete}
            handleClose={this.handleModal}
          />
        </div>
      </div>
    );
  }
}

export default AssociationTable;
