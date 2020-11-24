import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "./PalavraAosPaisInput.css";

class PalavraAosPaisPainelCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsInput: [],
    };
  }

  getData = () => {
    axios
      .get("/palavra-aos-pais/palavraaospaiscards-withunpublish")
      .then((response) => {
        return response.data;
      })
      .then((dataresult) => {
        this.setState({
          cardsInput: dataresult,
        });
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const { cardsInput } = this.state;

    const columns = [
      {
        dataField: "publish",
        text: "Status",
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
        dataField: "name",
        text: "Nome dos Pais",
        sort: true,
        headerStyle: () => ({ width: "40%" }),
        align: "center",
      },
      {
        dataField: "pt_parents",
        text: "Pais",
        sort: true,
        headerStyle: () => ({ width: "35%" }),
        align: "center",
      },

      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/palavra-aos-pais/card/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "5%" }),
        align: "center",
      },
    ];

    return (
      <div className="PalavraAosPais-Painel-Cards">
        <div className="PalavraAosPais-Painel-Cards-Table">
          <BootstrapTable
            className="BootstrapTable"
            bootstrap4
            keyField="id"
            data={cardsInput}
            columns={columns}
          />
        </div>
      </div>
    );
  }
}
export default PalavraAosPaisPainelCards;
