import React from "react";
//import PropTypes from 'prop-types';
import "./../Journal/Journal.css";
import PopUp from "../PopUp/PopUp";
import axios from "axios";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      category_pt: "",
      category_en: "",
      pt_description: "",
      en_description: "",
      thumbnail: "",
      price: "",
      publish: false,
      messageStatus: "",
      flash: "",
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
    const getId = match.params.id;

    getId !== 'new' &&
      axios.get(`/store/id/${getId}`).then((res) => {
        let getPublish = res.data[0].publish;
        getPublish === 1 ? (getPublish = true) : (getPublish = false);
        this.setState({
          id: res.data[0].id,
          category_pt: res.data[0].category_pt,
          category_en: res.data[0].category_en,
          pt_description: res.data[0].pt_description,
          en_description: res.data[0].en_description,
          thumbnail: res.data[0].thumbnail,
          price: res.data[0].price,
          publish: getPublish,
        });
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleChangeDropdown = (event) => {
    event.preventDefault();
    let value = event.target.value;
    this.setState({ category_pt: value });
    if (value === "Fardas") {
      this.setState({ category_en: "Uniforms" });
    }
    if (value === "Livros") {
      this.setState({ category_en: "Books" });
    }
    if (value === "Diversos") {
      this.setState({ category_en: "Others" });
    }
  };

  updatePublish = () => {
    let publish = this.state.publish;
    this.setState({ publish: !publish });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { flash, messageStatus, ...newItem } = this.state;
    const { match, history } = this.props;
    const getId = match.params.id;

    getId !== 'new' ?
      axios.put(`/store/editItem`, newItem)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () => {
            setTimeout(
              () => history.push({ pathname: "/backoffice/loja/painel" }),
              1500
            );
          });
          this.setState({ flash: "Guardado com sucesso" });
        })
        .catch((err) => {
          this.setState({ messageStatus: "error" });
          this.setState({
            flash: "Ocorreu um erro, por favor tente de novo",
          });
        })
      : axios.post("/store/newItem", newItem)
        .then((res) => {
          this.setState({ messageStatus: "success" }, () =>
            setTimeout(
              () => history.push({ pathname: "/backoffice/loja/painel" }),
              1500
            )
          );
          this.setState({ flash: "Criado com sucesso" });
        })
        .catch((err) => {
          this.setState({ messageStatus: "Error" });
          this.setState({
            flash: "Ocorreu um erro, por favor volte a tentar",
          });
        });
  };

  render() {
    const { match } = this.props;
    const getId = match.params.id;

    return (
      <div className="body">
        <form
          className="NoticiaInput-section"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <div className="NoticiaInput-title">Loja</div>
          <div>
            {getId !== 'new' &&
              <div className="input-section-label-edicao">
                ID do Artigo: {getId}
              </div>
            }
          </div>
          <div className="input">
            <label for="category_pt" className="input-section-label">
              Categoria Pt:
            </label>
            <select
              className="input"
              name="category_pt"
              onChange={(event) => this.handleChangeDropdown(event)}
            >
              <option disabled selected value>
                {" "}
                {this.state.category_pt === ""
                  ? "Selecione uma opção"
                  : `Categoria atual: ${this.state.category_pt}`}{" "}
              </option>
              <option name="Fardas" type="text" value="Fardas">
                Fardas
              </option>
              <option name="Livros" type="text" value="Livros">
                Livros
              </option>
              <option name="Diversos" type="text" value="Diversos">
                Diversos
              </option>
            </select>
          </div>
          <div className="input">
            <div className="input-section-label">Categoria EN:</div>
            <div>{this.state.category_en}</div>
          </div>
          <div className="input">
            <div className="input-section-label">Descrição PT:</div>
            <input
              name="pt_description"
              type="text"
              value={this.state.pt_description}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="input">
            <div className="input-section-label">Descrição EN:</div>
            <input
              name="en_description"
              type="text"
              value={this.state.en_description}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="input">
            <div className="input-section-label">Imagem:</div>
            <input
              name="thumbnail"
              type="text"
              value={this.state.thumbnail}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="input">
            <div className="input-section-label">Preço:</div>
            <input
              name="price"
              type="text"
              value={this.state.price}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <div className="input">
            <div className="input-section-label-publish">Publicar</div>
            <input
              name="publish"
              type="checkbox"
              value={this.state.publish}
              checked={this.state.publish}
              onChange={() => this.updatePublish()}
            />
          </div>
          <div className="NoticiaInput-section-button">
            <button className="login-button" type="submit">
              GUARDAR
            </button>
          </div>
        </form>
        <PopUp
          flashInput={this.state.flash}
          typeMessage={this.state.messageStatus}
        />
      </div>
    );
  }
}

export default Store;
