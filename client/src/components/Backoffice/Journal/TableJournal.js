import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "../Noticias/NoticiasPainel.css";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import PopUp from '../PopUp/PopUp';

class TableJournal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalInput: [],
      showModal: false,
      editionId: 0,
      header1_pt: '',
      header1_en: '',
      header2_pt: '',
      header1_en: '',
      flash: '',
      messageStatus: ''
    };
  }

  getData = () => {
    axios
      .get("/journal/all")
      .then((response) => {
        return response.data;
      })
      .then((dataresult) => {
        console.log(dataresult);
        this.setState({ journalInput: dataresult });
      });
  };

  getDataHeaders = () => {
    axios
      .get('/journal/headers/headers')
      .then((res) => {
        let results = res.data[0]
        this.setState({
          header1_pt: results.header1_pt,
          header1_en: results.header1_en,
          header2_pt: results.header2_pt,
          header2_en: results.header2_en,
        })
      })


  }

  componentDidMount = () => {
    this.getData();
    this.getDataHeaders();
  };

  handleModalDelete = () => {
    const { editionId } = this.state;
    console.log("publicação", editionId);

    axios.delete(`/journal/${editionId}`).then((response) => {
      this.setState({
        showModal: false,
      });
    });
    this.getData();
    window.location.reload();
  };

  handleModal = () => {
    console.log("handleModal");
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  handleChange = (event) => {
    event.preventDefault()
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { journalInput, showModal, editionId, flash, messageStatus, ...newJournalHeader } = this.state
    axios
      .put('/journal/headers/headers_edit', newJournalHeader)
      .then((res) => {
        this.setState({ flash: 'Guardado com sucesso', messageStatus: 'Success' })
      })
  }

  render() {
    const { journalInput, showModal } = this.state;
    const link = "/backoffice/journal/painel/new";

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
      {
        dataField: "edition",
        text: "Edição",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "15%" }),
        align: "center",
      },
      {
        dataField: "pt_title",
        text: "Título",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "55%" }),
      },

      {
        dataField: "edition",
        text: "Editar",
        formatter: (edition) => (
          <Link
            to={`/backoffice/journal/painel/${edition}`}
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
        dataField: "edition",
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
        console.log(row.edition);
        this.setState({ editionId: row.edition });
        console.log(this.state.editionId);
      },
    };
    return (
      <div className="NoticiasPainel">
        <form className="NoticiaInput-section" onSubmit={event => this.handleSubmit(event)}>
          <div className="NoticiaInput-title">Jornal "O Trevo"</div>
          <div className="input">
            <div className="input-section-label">Intro 1 PT </div>
            <input type='text' name='header1_pt' value={this.state.header1_pt} onChange={event => this.handleChange(event)} />
          </div>
          <div className="input">
            <div className="input-section-label">Intro 1 EN </div>
            <input type='text' name='header1_en' value={this.state.header1_en} onChange={event => this.handleChange(event)} />
          </div>
          <div className="input">
            <div className="input-section-label">Intro 2 PT </div>
            <input type='text' name='header2_pt' value={this.state.header2_pt} onChange={event => this.handleChange(event)} />
          </div>
          <div className="input">
            <div className="input-section-label">Intro 2 EN </div>
            <input type='text' name='header2_en' value={this.state.header2_en} onChange={event => this.handleChange(event)} />
          </div>
          <div className="NoticiaInput-section-button">
            <button className="login-button" type='submit'>GUARDAR</button>
          </div>
        </form>
        <PopUp flashInput={this.state.flash} typeMessage={this.state.messageStatus} />
        <div className="NoticiasPainel">
          <div className="JornalPainel-section-button loja-quadro">
            <div className="loja-quadro-title">Edições do Jornal</div>
            <Link to={link}>
              <button className="NoticiasPainel-button" type="submit">
                Criar Edição
            </button>
            </Link>
          </div>
          <div className="NoticiasPainel-Table">
            <BootstrapTable
              className="BootstrapTable"
              bootstrap4
              keyField="edition"
              data={journalInput}
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
export default TableJournal;
