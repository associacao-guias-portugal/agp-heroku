import React, { Component } from "react";
import axios from "axios";
import "./Files.css";
import PopUp from "../PopUp/PopUp";

class Files extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estatutos: "",
      politica_de_privacidade: "",
      politica_de_dados: "",
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios.get("/files").then((res) => {
      const results = res.data[0];
      this.setState({
        estatutos: results.estatutos,
        politica_de_privacidade: results.politica_de_privacidade,
        politica_de_dados: results.politica_de_dados,
      });
    });
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  postData = () => {
    const { messageStatus, flash, ...files } = this.state;
    const { history } = this.props;
    
    axios.put("/files", files)
      .then((res) => {
        this.setState({ messageStatus: "success" }, () => {
          setTimeout(
            () => history.push({ pathname: "/backoffice/files" }),
            1500
          );
        });
        this.setState({ flash: "Guardado com sucesso." });
      })
      .catch((err) => {
        this.setState({ messageStatus: "error" });
        this.setState({
          flash: "Ocorreu um erro, por favor tente outra vez.",
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postData();
  };

  render() {
    const {
      estatutos,
      politica_de_privacidade,
      politica_de_dados,
      messageStatus,
      flash,
    } = this.state;

    return (
      <div className="FilesInput">
        <div className="FilesInput-title">Outros PDFs</div>
        <div className="FilesInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Estatutos:</div>
              <input
                type="text"
                name="estatutos"
                value={estatutos}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">
                Política de Privacidade:
              </div>
              <input
                type="text"
                name="politica_de_privacidade"
                value={politica_de_privacidade}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">
                Política de Dados Pessoais:
              </div>
              <input
                type="text"
                name="politica_de_dados"
                value={politica_de_dados}
                onChange={this.updateField}
              />
            </div>
            <div className="FilesInput-section-button">
              <button
                className="login-button"
                variant="contained"
                color="primary"
                type="submit"
              >
                GUARDAR
              </button>
            </div>
          </form>
        </div>
        <PopUp flashInput={flash} typeMessage={messageStatus} />
      </div>
    );
  }
}

export default Files;
