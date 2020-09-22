import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "../Noticias/NoticiasPainel.css";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";

class TableStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeInput: [],
      showModal: false,
      itemId: 0,
    };
  }

  getData = () => {
    axios
      .get("/store")
      .then((response) => response.data)
      .then((dataResult) => {
        console.log(dataResult);
        this.setState({ storeInput: dataResult });
      });
  };

  componentDidMount = () => {
    console.log("mount");
    this.getData();
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
      <div className="NoticiasPainel">
        <div className="NoticiasPainel-title">Quadro Loja</div>
        <div className="JornalPainel-section-button">
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
    );
  }
}

export default TableStore;
