import React, { Component } from "react";
import axios from "axios";
import PopUp from "../PopUp/PopUp";
import PalavraAosPaisPainelCards from "./PalavraAosPaisPainelCards";
import PalavraAosPaisPainelTextoImagem from "./PalavraAosPaisPainelTextoImagem";
import "./PalavraAosPaisInput.css";

class PalavraAosPaisInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      pt_title: "",
      en_title: "",
      pt_text_title: "",
      en_text_title: "",
      pt_title_card: "",
      en_title_card: "",
      pt_text_card: "",
      en_text_card: "",
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios.get("/palavra-aos-pais").then((res) => {
      console.log("data", res);
      const results = res.data[0];
      this.setState({
        image: results.image,
        pt_title: results.pt_title,
        en_title: results.en_title,
        pt_text_title: results.pt_text_title,
        en_text_title: results.en_text_title,
        pt_title_card: results.pt_title_card,
        en_title_card: results.en_title_card,
        pt_text_card: results.pt_text_card,
        en_text_card: results.en_text_card,
      });
    });
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  postData = () => {
    const { messageStatus, flash, ...palavraaospais } = this.state;
    const { history } = this.props;
    
    axios.put("/palavra-aos-pais", palavraaospais)
      .then((res) => {
        this.setState({ messageStatus: "success" }, () => {
          setTimeout(
            () => history.push({ pathname: "/backoffice/palavra-aos-pais" }),
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
      image,
      pt_title,
      en_title,
      pt_text_title,
      en_text_title,
      pt_title_card,
      en_title_card,
      pt_text_card,
      en_text_card,
      messageStatus,
      flash,
    } = this.state;

    return (
      <div className="PalavraAosPaisInput">
        <div className="PalavraAosPaisInput-title">Palavra Aos Pais</div>
        <div className="PalavraAosPaisInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="input">
              <div className="input-section-label">Imagem Banner:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título EN:</div>
              <input
                type="text"
                name="en_title"
                value={en_title}
                onChange={this.updateField}
              />
            </div>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto PT:</div>
              <textarea
                name="pt_text_title"
                value={pt_text_title}
                onChange={this.updateField}
              />
            </div>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto EN:</div>
              <textarea
                name="en_text_title"
                value={en_text_title}
                onChange={this.updateField}
              />
            </div>
            <div className="input-painel">
              <PalavraAosPaisPainelTextoImagem />
            </div>
            <div className="input">
              <div className="input-section-label-subtitle">
                Cards de Depoimento dos Pais
              </div>
              <div className="input-section-label">Título Card PT:</div>
              <input
                type="text"
                name="pt_title_card"
                value={pt_title_card}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Título Card EN:</div>
              <input
                type="text"
                name="en_title_card"
                value={en_title_card}
                onChange={this.updateField}
              />
            </div>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto Card PT:</div>
              <textarea
                name="pt_text_card"
                value={pt_text_card}
                onChange={this.updateField}
              />
            </div>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto Card EN:</div>
              <textarea
                name="en_text_card"
                value={en_text_card}
                onChange={this.updateField}
              />
            </div>
            <div className="input-painel">
              <PalavraAosPaisPainelCards />
            </div>
            <div className="PalavraAosPais-section-main-button">
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

export default PalavraAosPaisInput;
