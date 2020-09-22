import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import "./PalavraAosPaisInput.css";

class PalavraAosPaisPainelTextoImagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      texto_imagem_id: 0,
      showModal: false,
    };
  }

  getData = () => {
    axios
      .get("/palavra-aos-pais/palavraaospais2-withunpublish")
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((dataresult) => {
        this.setState({
          input: dataresult,
        });
      });
  };

  handleModalDelete = () => {
    const { texto_imagem_id } = this.state;
    axios
      .delete(`/palavra-aos-pais/palavraaospais2/${texto_imagem_id}`)
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
    const link = "/backoffice/palavra-aos-pais/text-image";

    const columns = [
      {
        dataField: "position",
        text: "Posição",
        sort: true,
        headerStyle: () => ({ width: "15%" }),
        align: "center",
      },
      {
        dataField: "publish",
        text: "Status",
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
        dataField: "pt_title",
        text: "Título Secção",
        sort: true,
        headerStyle: () => ({ width: "50%" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            to={`/backoffice/palavra-aos-pais/text-image/${id}`}
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
        console.log(row.id);
        this.setState({ texto_imagem_id: row.id });
      },
    };

    return (
      <div className="PalavraAosPais-Painel-Cards">
        <div className="PalavraAosPais-section-button">
          <Link to={link}>
            <button className="PalavraAosPais-button" type="submit">
              Criar Nova Secção
            </button>
          </Link>
        </div>
        <div className="PalavraAosPais-Painel-Cards-Table">
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
export default PalavraAosPaisPainelTextoImagem;
