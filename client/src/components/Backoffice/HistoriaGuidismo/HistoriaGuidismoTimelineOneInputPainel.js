import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import ReactHtmlParser from "react-html-parser";

class HistoriaGuidismoTimelineOneInputPainel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      timeline_id: 0,
      showModal: false,
    };
  }

  getData = () => {
    axios
      .get("/historia-guidismo/timeline-one-withunpublished")
      .then((response) => {
        return response.data;
      })
      .then((dataresult) => {
        this.setState({
          input: dataresult,
        });
      });
  };

  handleModalDelete = () => {
    const { timeline_id } = this.state;
    axios
      .delete(`/historia-guidismo/timeline-one/${timeline_id}`)
      .then((response) => {
        this.setState({
          showModal: false,
        });
      });
    this.getData();
    window.location.reload();
  };

  handleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const { input, showModal } = this.state;
    const link = "/backoffice/historia-guidismo/timeline-one/";

    const columns = [
      {
        dataField: "position",
        text: "Posição",
        sort: true,
        align: "center",
      },
      {
        dataField: "publish",
        text: "Status",
        sort: true,
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return "Publicado";
          }
          return "Não Publicado";
        },
        align: "center",
      },
      {
        dataField: "pt_text",
        text: "Texto Secção",
        sort: true,
        headerStyle: () => ({ width: "50%" }),
        align: "center",
        formatter: (pt_text) => (
          <span className="historia-table-info">{ReactHtmlParser(pt_text)}</span>
        ),
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/historia-guidismo/timeline-one/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        align: "center",
      },
      {
        dataField: "id",
        text: "Eliminar",
        formatter: (id) => (
          <a
            style={{ cursor: "pointer", textDecoration: "none" }}
            onClick={() => this.handleModal()}
          >
            <span role="img" aria-label="trash">
              🗑
            </span>
          </a>
        ),
        align: "center",
      },
    ];

    const rowEvents = {
      onClick: (e, row) => {
        this.setState({ timeline_id: row.id });
      },
    };

    return (
      <div className="PalavraAosPais-Painel-Cards">
        <div className="Historia-section-button main-quadro">
          <div className="main-quadro-title">Timeline Robert Baden-Powell</div>
          <Link to={link}>
            <button className="PalavraAosPais-button Historia-button" type="submit">
              Criar Nova Secção
            </button>
          </Link>
        </div>
        <div className="PalavraAosPais-Painel-Cards-Table HistoriaQuadro">
          <BootstrapTable
            className="BootstrapTable"
            bootstrap4
            keyField="id"
            data={input}
            columns={columns}
            rowEvents={rowEvents}
          />
        </div>
        <div className="PalavraAosPais-Painel-Cards-Modal">
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
export default HistoriaGuidismoTimelineOneInputPainel;
