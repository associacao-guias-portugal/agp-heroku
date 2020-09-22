import React from "react";
import axios from "axios";
import "../Noticias/NoticiasPainel.css";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";

class LigacoesUteis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ligacoesUteisData: [],
      showModal: false,
      id: 0,
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

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getData();
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
    );
  }
}

export default LigacoesUteis;
