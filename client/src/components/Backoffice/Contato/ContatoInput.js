import React, { Component } from "react";
import axios from "axios";
import "./ContatoInput.css";
import PopUp from "../PopUp/PopUp";

class ContatoInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_endereco: {},
      en_endereco: {},
      google_maps: "",
      telefone: "",
      email: "",
      pt_secretariado: {},
      en_secretariado: {},
      pt_deposito: {},
      en_deposito: {},
      presidente: "",
      internacional: "",
      publicacoes: "",
      facebook: "",
      instagram: "",
      linkedin:"",
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios
      .get("/contato")
      .then((res) => {
        const results = res.data[0];
        this.setState({
          pt_endereco: results.pt_endereco,
          en_endereco: results.en_endereco,
          google_maps: results.google_maps,
          pt_secretariado: results.pt_secretariado,
          en_secretariado: results.en_secretariado,
          pt_deposito: results.pt_deposito,
          en_deposito: results.en_deposito,
          telefone: results.telefone,
          email: results.email,
          presidente: results.presidente,
          internacional: results.internacional,
          publicacoes: results.publicacoes,
          facebook: results.facebook,
          instagram: results.instagram,
          linkedin: results.linkedin,
        });
      });
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  postData = () => {
    const { messageStatus, flash, ...contato } = this.state;
    const { history } = this.props;
    
    axios.put("/contato", contato)
      .then((res) => {
        this.setState({ messageStatus: "success" }, () => {
          setTimeout(
            () => history.push({ pathname: "/backoffice/contato" }),
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
      pt_endereco,
      en_endereco,
      google_maps,
      telefone,
      email,
      pt_secretariado,
      en_secretariado,
      pt_deposito,
      en_deposito,
      presidente,
      internacional,
      publicacoes,
      facebook,
      instagram,
      linkedin,
      messageStatus,
      flash,
    } = this.state;

    return (
      <div className="ContatoInput">
        <div className="ContatoInput-title">Contactos</div>
        <div className="ContatoInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="back-contato-input-textarea">
              <div className="input-section-label-subtitle">Sede Nacional</div>
              <div className="input-section-label">Endereço PT:</div>
              <textarea
                name="pt_endereco"
                value={pt_endereco}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="back-contato-input-textarea">
              <div className="input-section-label">Endereço EN:</div>
              <textarea
                name="en_endereco"
                value={en_endereco}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Link Google Maps:</div>
              <input
                type="text"
                name="google_maps"
                value={google_maps}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Telefone:</div>
              <input
                type="text"
                name="telefone"
                value={telefone}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">E-mail:</div>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="back-contato-input-textarea">
              <div className="input-section-label-subtitle">Horários</div>
              <div className="input-section-label">
                Secretariado Nacional PT:
              </div>
              <textarea
                name="pt_secretariado"
                value={pt_secretariado}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="back-contato-input-textarea">
              <div className="input-section-label">
                Secretariado Nacional EN:
              </div>
              <textarea
                name="en_secretariado"
                value={en_secretariado}
                onChange={this.updateField}
              />
            </div>
            <div className="back-contato-input-textarea">
              <div className="input-section-label">
                Depósito de material e fardamento (loja) PT:
              </div>
              <textarea
                name="pt_deposito"
                value={pt_deposito}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="back-contato-input-textarea">
              <div className="input-section-label">
                Depósito de material e fardamento (loja) EN: :
              </div>
              <textarea
                name="en_deposito"
                value={en_deposito}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label-subtitle">
                Outros Contactos
              </div>
              <div className="input-section-label">Presidente:</div>
              <input
                type="text"
                name="presidente"
                value={presidente}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Internacional:</div>
              <input
                type="text"
                name="internacional"
                value={internacional}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Publicações:</div>
              <input
                type="text"
                name="publicacoes"
                value={publicacoes}
                onChange={this.updateField}
                required
              />
            </div>
            <div className="input">
              <div className="input-section-label">Facebook:</div>
              <input
                type="text"
                name="facebook"
                value={facebook}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Instagram:</div>
              <input
                type="text"
                name="instagram"
                value={instagram}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Linkedin:</div>
              <input
                type="text"
                name="linkedin"
                value={linkedin}
                onChange={this.updateField}
              />
            </div>
            <div className="ContatoInput-section-button">
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

export default ContatoInput;
