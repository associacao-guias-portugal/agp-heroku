import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import PopUp from "../PopUp/PopUp";
import "./PalavraAosPaisInput.css";

class PalavraAosPaisCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt_text: "",
      en_text: "",
      pt_parents: "",
      en_parents: "",
      name: "",
      publish: false,
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    const { match } = this.props;
    const getId = match.params.id;

    axios.get(`/palavra-aos-pais/palavraaospaiscards/${getId}`).then((res) => {
      console.log("data", res);
      const results = res.data[0];
      this.setState({
        pt_text: results.pt_text,
        en_text: results.en_text,
        pt_parents: results.pt_parents,
        en_parents: results.en_parents,
        name: results.name,
        publish: results.publish,
      });
    });
  };

  updateField = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    this.setState({ [name]: value });
  };

  postData = () => {
    const { messageStatus, flash, ...palavraaospaiscard } = this.state;
    const { match, history } = this.props;
    const getId = match.params.id;
    
    axios.put(`/palavra-aos-pais/palavraaospaiscards/${getId}`, palavraaospaiscard)
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

  handleCheckboxChange = () => {
    const { publish } = this.state;
    this.setState({ publish: !publish });
  };

  render() {
    const {
      pt_text,
      en_text,
      pt_parents,
      en_parents,
      name,
      publish,
      messageStatus,
      flash,
    } = this.state;

    return (
      <div className="PalavraAosPaisInput">
        <div className="PalavraAosPaisInput-title">Palavra Aos Pais Card</div>
        <div className="PalavraAosPaisInput-section">
          <form onSubmit={this.handleSubmit}>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto PT:</div>
              <textarea
                name="pt_text"
                value={pt_text}
                onChange={this.updateField}
              />
            </div>
            <div className="back-PalavraAosPais-input-textarea">
              <div className="input-section-label">Texto EN:</div>
              <textarea
                name="en_text"
                value={en_text}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Nome:</div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Pais PT:</div>
              <input
                type="text"
                name="pt_parents"
                value={pt_parents}
                onChange={this.updateField}
              />
            </div>
            <div className="input">
              <div className="input-section-label">Pais PT:</div>
              <input
                type="text"
                name="en_parents"
                value={en_parents}
                onChange={this.updateField}
              />
            </div>
            <div className="input-section-checkbox">
              <div className="input-section-label-checkbox">Publicar:</div>
              <input
                className="input-checkbox"
                type="checkbox"
                value={publish}
                checked={publish}
                onChange={this.handleCheckboxChange}
              />
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

PalavraAosPaisCard.propTypes = {
  match: PropTypes.string.isRequired,
};

export default withRouter(PalavraAosPaisCard);
