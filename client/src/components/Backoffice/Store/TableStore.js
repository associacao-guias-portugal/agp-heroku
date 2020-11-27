import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "../Noticias/NoticiasPainel.css";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import PopUp from "../PopUp/PopUp";
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
import './Store.css';

class TableStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeInput: [],
      showModal: false,
      itemId: 0,
      header_pt: '',
      header_en: '',
      editorState_header_pt: EditorState.createEmpty(),
      editorState_header_en: EditorState.createEmpty(),
      flash: '',
      messageStatus: ''
    };
  }

  getData = () => {
    axios
      .get("/store")
      .then((response) => response.data)
      .then((dataResult) => {
        this.setState({ storeInput: dataResult });
      });
  };

  getDataHeader = () => {
    axios.get("/store/header/header").then((dataresult) => {
      const headerData = dataresult.data[0];

      const contentBlockPT_header_pt = htmlToDraft(headerData.header_pt);
      const contentBlockEN_header_en = htmlToDraft(headerData.header_en);

      const contentStatePT_header_pt = ContentState.createFromBlockArray(
        contentBlockPT_header_pt.contentBlocks
      );
      const contentStateEN_header_en = ContentState.createFromBlockArray(
        contentBlockEN_header_en.contentBlocks
      );

      const formatContentPT_header_pt = EditorState.createWithContent(
        contentStatePT_header_pt
      );
      const formatContentPT_header_en = EditorState.createWithContent(
        contentStateEN_header_en
      );

      this.setState({
        editorState_header_pt: formatContentPT_header_pt,
        editorState_header_en: formatContentPT_header_en,
        header_pt: headerData.header_pt,
        header_en: headerData.header_en,
      });
    });
  };


  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.getData();
    this.getDataHeader();
  };

  handleModalDelete = () => {
    const { itemId } = this.state;
    axios.delete(`/store/deleteItem/${itemId}`).then((resp) => {
      this.setState({
        showModal: false,
      });
    });
    this.getData();
    window.location.reload();
  };

  handleModal = () => {
    const showModal = this.state.showModal;
    this.setState({ showModal: !showModal });
  };

  onEditorStateChangeheader_pt = (editorState_header_pt) => {
    this.setState({ editorState_header_pt });
    const rawContentState = convertToRaw(
      this.state.editorState_header_pt.getCurrentContent()
    );
    const HtmlContent_header_pt = draftToHtml(rawContentState);
    this.setState({ header_pt: HtmlContent_header_pt });
  };

  onEditorStateChangeheader_en = (editorState_header_en) => {
    this.setState({ editorState_header_en });
    const rawContentState = convertToRaw(
      this.state.editorState_header_en.getCurrentContent()
    );
    const HtmlContent_header_en = draftToHtml(rawContentState);
    this.setState({ header_en: HtmlContent_header_en });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      storeInput,
      showModal,
      itemId,
      flash,
      messageStatus,
      editorState_header_pt,
      editorState_header_en,
      ...headerData
    } = this.state;
    const { history } = this.props;

    axios.put("/store/header/header_edit", headerData)
      .then((res) => {
        this.setState({
          banner: this.state.banner,
          header_pt: this.state.header_pt,
          header_en: this.state.header_en,
        });
      })
      .then((res) => {
        this.setState({ messageStatus: 'success' }, () => {
          setTimeout(() => history.push({ pathname: '/backoffice/loja/painel' }), 1500)
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
    const { storeInput, showModal } = this.state;
    const link = "/backoffice/loja/painel/new";

    const columns = [
      {
        dataField: "publish",
        text: "Status",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "20%" }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return "Publicado";
          }
          return "Não Publicado";
        },
        align: "center",
      },
      // {
      //   dataField: "id",
      //   text: "ID",
      //   filter: textFilter(),
      //   sort: true,
      //   headerStyle: () => ({ width: "10%" }),
      //   align: "center",
      // },
      {
        dataField: "category_pt",
        text: "Categoria",
        filter: textFilter(),
        sort: true,
        align: "center",
      },
      {
        dataField: "pt_description",
        text: "Descrição Artigo",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "55%" }),
      },
      {
        dataField: "price",
        text: "Preço",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "15%" }),
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (edition) => (
          <Link
            to={`/backoffice/loja/painel/${edition}`}
            style={{ textDecoration: "none" }}
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
        dataField: "id",
        text: "Eliminar",
        formatter: (edition) => (
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
        this.setState({ itemId: row.id });
      },
    };

    return (
      <div>
        <div className="ContatoInput">
        <div className="NoticiasPainel-title">Loja</div>
          <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
            <div className="input-section-label">Intro Texto PT</div>
            <div className="input input-block">
              <Editor
                editorState={this.state.editorState_header_pt}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeheader_pt}
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
                  fontSize: {
                    options: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '28', '30', '32', '40', '52']
                  }
                }}
              />
            </div>
            <div className="input-section-label">Intro Texto EN</div>
            <div className="input input-block">
              <Editor
                editorState={this.state.editorState_header_en}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="NoticiaInput-editor"
                onEditorStateChange={this.onEditorStateChangeheader_en}
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
                  fontSize: {
                    options: ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '28', '30', '32', '40', '52']
                  }
                }}
              />
            </div>
            <div className="NoticiaInput-section-button loja-save">
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
          <div className="JornalPainel-section-button loja-quadro">
            <div className="loja-quadro-title">
              Artigos da Loja
            </div>
            <Link to={link}>
              <button className="NoticiasPainel-button" type="submit">
                Criar Artigo
              </button>
            </Link>
          </div>
          <div className="NoticiasPainel-Table">
            <BootstrapTable
              className="BootstrapTable"
              bootstrap4
              keyField="id"
              data={storeInput}
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

export default TableStore;
