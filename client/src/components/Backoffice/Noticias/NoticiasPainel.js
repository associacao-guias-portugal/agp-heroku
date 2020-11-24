import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
// import moment from "react-moment";
import "./NoticiasPainel.css";
import ModalPopup from "./PopUpDeleteNoticias";

class NoticiaPainel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noticiasInput: [],
      showModal: false,
      noticiaId: 0,
    };
  }

  getData = () => {
    axios
      .get("/news")
      .then((response) => {
        return response.data;
      })
      .then((dataresult) => {
        this.setState({
          noticiasInput: dataresult,
        });
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  handleModalDelete = () => {
    const { noticiaId } = this.state;

    axios.delete(`/news/${noticiaId}`).then((response) => {
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

  render() {
    const { noticiasInput, showModal } = this.state;
    const link = "/backoffice/news/painel/new";

    const columns = [
      {
        dataField: "publish",
        text: "Status",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "15%" }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return "Publicado";
          }
          return "Não Publicado";
        },
        align: "center",
      },
      {
        dataField: "pt_date",
        text: "Publicação",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "15%" }),
        align: "center",
      },
      {
        dataField: "pt_title",
        text: "Título Notícia",
        filter: textFilter(),
        sort: true,
        headerStyle: () => ({ width: "40%" }),
      },

      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            to={`/backoffice/news/painel/${id}`}
            style={{ cursor: "pointer", textDecoration: "none" }}
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
            style={{ cursor: "pointer", textDecoration: "none" }}
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
        this.setState({ noticiaId: row.id });
      },
    };

    return (
      <div className="NoticiasPainel">
        <div className="NoticiasPainel-title">Quadro Notícias</div>
        <div className="NoticiasPainel-section-button">
          <Link to={link}>
            <button className="NoticiasPainel-button" type="submit">
              Criar Notícia
            </button>
          </Link>
        </div>
        <div className="NoticiasPainel-Table">
          <BootstrapTable
            className="BootstrapTable"
            bootstrap4
            keyField="id"
            data={noticiasInput}
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
export default NoticiaPainel;
