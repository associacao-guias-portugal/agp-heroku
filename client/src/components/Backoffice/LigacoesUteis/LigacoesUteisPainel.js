import React from "react";
import axios from "axios";
import "../Noticias/NoticiasPainel.css";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import PopUp from '../PopUp/PopUp';


class LigacoesUteis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ligacoesUteisData: [],
      showModal: false,
      id: 0,
      header_pt: '',
      header_en: '',
      flash: '',
      messageStatus: ''
    };
  }
  getData = () => {
    axios
      .get("/ligacoes-uteis")
      .then((result) => result.data)
      .then((dataresult) =>
        this.setState({
          ligacoesUteisData: dataresult,
        })
      );
  };

  getDataHeader = () => {
    axios

      .get("/ligacoes-uteis/header/header")
      .then((res) => {
        let results = res.data[0]
        this.setState({ header_pt: results.header_pt, header_en: results.header_en })
      })
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getData();
    this.getDataHeader();
  };

  handleModalDelete = () => {
    const { itemId } = this.state;
    axios.delete(`/ligacoes-uteis/deleteLink/${itemId}`).then((resp) => {
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

  eventHandler = (event) => {
    event.preventDefault();
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { ligacoesUteisData, showModal, id, flash, messageStatus, ...newLigacoesUteis } = this.state
    axios
      .put('/ligacoes-uteis/header/header_edit', newLigacoesUteis)
      .then((res) => {
        this.setState({ flash: 'Guardado com sucesso', messageStatus: 'Success' })
      })
  }

  render() {
    const { ligacoesUteisData, showModal } = this.state;
    const link = "/backoffice/ligacoesUteis/painel/new";

    const columns = [
      {
        dataField: "pt_text",
        text: "Descrição Links",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "700px" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/ligacoesUteis/painel/${id}`}
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
        formatter: (id) => (
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
        <div className='body'>
          <div className="NoticiaInput-title">Edição texto Ligações Úteis</div>
          <form className="NoticiaInput-section" onSubmit={event => this.handleSubmit(event)}>
            <div className="input">
              <div className="input-section-label">Título PT</div>
              <input type='text' value={this.state.header_pt} name='header_pt' onChange={event => this.eventHandler(event)} />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN</div>
              <input type='text' value={this.state.header_en} name='header_en' onChange={event => this.eventHandler(event)} />
            </div>
            <div className="NoticiaInput-section-button">
              <button className="login-button" type='submit'>Submeter</button>
            </div>
          </form>
          <PopUp flashInput={this.state.flash} typeMessage={this.state.messageStatus} />
        </div>
        <div className="NoticiasPainel">
          <div className="NoticiasPainel-title">Quadro Ligações Úteis</div>
          <div className="JornalPainel-section-button">
            <Link to={link}>
              <button className="NoticiasPainel-button" type="submit">
                Criar Link
            </button>
            </Link>
          </div>
          <div className="NoticiasPainel-Table">
            <BootstrapTable
              className="BootstrapTable"
              bootstrap4
              keyField="id"
              data={ligacoesUteisData}
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

export default LigacoesUteis;
