import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import PopUp from "../PopUp/PopUp";
import ModalPopup from "../Noticias/PopUpDeleteNoticias";
import "./MetodoBackoffice.css";

class MetodoBackoffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: "",
      pt_main_title: "",
      en_main_title: "",
      pt_main_intro: "",
      en_main_intro: "",
      pt_ferramentas_title: "",
      en_ferramentas_title: "",
      pt_constantes_title: "",
      en_constantes_title: "",
      pt_constantes_intro: "",
      en_constantes_intro: "",
      pt_atividades_title: "",
      en_atividades_title: "",
      pt_atividades_intro: "",
      en_atividades_intro: "",
      pt_projetos_title: "",
      en_projetos_title: "",
      pt_projetos_intro: "",
      en_projetos_intro: "",
      ferramentasData: [],
      atividadesData: [],
      projetosData: [],
      constantesData: [],
      flash: "",
      messageStatus: "",
      projetoId: 0,
      showModal: false,
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    axios.get(`/metodo-guidista/projetos`).then((res) => {
      this.setState({ projetosData: res.data });
    });

    axios.get(`/metodo-guidista/ferramentas`).then((res) => {
      this.setState({ ferramentasData: res.data });
    });

    axios.get(`/metodo-guidista/atividades`).then((res) => {
      this.setState({ atividadesData: res.data });
    });

    axios.get(`/metodo-guidista/constantes`).then((res) => {
      this.setState({ constantesData: res.data });
    });

    axios.get(`/metodo-guidista`).then((res) => {
      const results = res.data[0];
      this.setState({
        banner: results.banner,
        pt_main_title: results.pt_main_title,
        en_main_title: results.en_main_title,
        pt_main_intro: results.pt_main_intro,
        en_main_intro: results.en_main_intro,
        pt_ferramentas_title: results.pt_ferramentas_title,
        en_ferramentas_title: results.en_ferramentas_title,
        pt_constantes_title: results.pt_constantes_title,
        en_constantes_title: results.en_constantes_title,
        pt_constantes_intro: results.pt_constantes_intro,
        en_constantes_intro: results.en_constantes_intro,
        pt_atividades_title: results.pt_atividades_title,
        en_atividades_title: results.en_atividades_title,
        pt_atividades_intro: results.pt_atividades_intro,
        en_atividades_intro: results.en_atividades_intro,
        pt_projetos_title: results.pt_projetos_title,
        en_projetos_title: results.en_projetos_title,
        pt_projetos_intro: results.pt_projetos_intro,
        en_projetos_intro: results.en_projetos_intro,
      });
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const {
      projetoId,
      constantesData,
      ferramentasData,
      atividadesData,
      projetosData,
      flash,
      messageStatus,
      showModal,
      ...data
    } = this.state;
    
    axios.put(`/metodo-guidista`, data)
      .then((res) => {
        this.setState({ messageStatus: "success" }, () => {
          setTimeout(
            () => history.push({ pathname: "/backoffice/metodo-guidista" }),
            1500
          );
        });
        this.setState({ flash: "Guardado com sucesso." });
      })
      .catch((err) => {
        this.setState({
          messageStatus: "error",
          flash: "Ocorreu um erro, por favor tente outra vez.",
        });
      });
  };

  handleModalDelete = () => {
    const { projetoId } = this.state;
    axios.delete(`/metodo-guidista/projetos/${projetoId}`).then((res) => {
      this.setState({
        showModal: false,
      });
    });
    window.location.reload();
  };

  handleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const {
      banner,
      pt_main_title,
      en_main_title,
      pt_main_intro,
      en_main_intro,
      pt_ferramentas_title,
      en_ferramentas_title,
      pt_constantes_title,
      en_constantes_title,
      pt_constantes_intro,
      en_constantes_intro,
      pt_atividades_title,
      en_atividades_title,
      pt_atividades_intro,
      en_atividades_intro,
      pt_projetos_title,
      en_projetos_title,
      pt_projetos_intro,
      en_projetos_intro,
      constantesData,
      ferramentasData,
      atividadesData,
      projetosData,
      flash,
      showModal,
      messageStatus,
    } = this.state;

    const ferramentasColumns = [
      {
        dataField: "pt_title",
        text: "Ferramenta",
        headerStyle: () => ({ width: "400px" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/metodo-guidista/ferramentas/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "150px" }),
        align: "center",
      },
    ];

    const constantesColumns = [
      {
        dataField: "pt_title",
        text: "Constante",
        headerStyle: () => ({ width: "300px" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/metodo-guidista/constantes/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "100px" }),
        align: "center",
      },
    ];

    const atividadesColumns = [
      {
        dataField: "pt_title",
        text: "Atividade",
        headerStyle: () => ({ width: "300px" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/metodo-guidista/atividades/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "100px" }),
        align: "center",
      },
    ];

    const projetosColumns = [
      {
        dataField: "publish",
        text: "Status",
        headerStyle: () => ({ width: "200px" }),
        formatter: function dateFormatter(publish) {
          if (publish === 1) {
            return "Publicado";
          }
          return "Não Publicado";
        },
        align: "center",
      },
      {
        dataField: "position",
        text: "Posição",
        align: "center",
      },
      {
        dataField: "pt_date",
        text: "Anos",
        headerStyle: () => ({ width: "300px" }),
        align: "center",
      },
      {
        dataField: "pt_title",
        text: "Projeto",
        headerStyle: () => ({ width: "450px" }),
        align: "center",
      },
      {
        dataField: "id",
        text: "Editar",
        formatter: (id) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/backoffice/metodo-guidista/projetos/${id}`}
          >
            <span role="img" aria-label="edit">
              📝
            </span>
          </Link>
        ),
        headerStyle: () => ({ width: "100px" }),
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
        this.setState({ projetoId: row.id });
      },
    };

    return (
      <div className="MetodoBackoffice">
        <div className="back-metodo-title">Método Guidista</div>
        <div className="back-metodo-section">
          <form onSubmit={this.handleSubmit}>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Página PT:</div>
              <input
                type="text"
                name="pt_main_title"
                value={pt_main_title}
                onChange={this.handleChange}
                placeholder="Título principal da página"
                maxLength="40"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Página EN:</div>
              <input
                type="text"
                name="en_main_title"
                value={en_main_title}
                onChange={this.handleChange}
                placeholder="Título principal em inglês da página"
                maxLength="40"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Imagem Banner:</div>
              <input
                type="text"
                name="banner"
                value={banner}
                onChange={this.handleChange}
                placeholder="Link da imagem do banner"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro Texto PT:</div>
              <textarea
                name="pt_main_intro"
                value={pt_main_intro}
                onChange={this.handleChange}
                placeholder="Texto de Intodução Método Guidista"
                maxLength="300"
                rows="4"
                required
              />
            </div>
            <div className="back-metodo-input-textarea metodo-seccao-margin">
              <div className="back-metodo-label">Intro Texto EN:</div>
              <textarea
                name="en_main_intro"
                value={en_main_intro}
                onChange={this.handleChange}
                placeholder="Introduction Text for Método Guidista"
                maxLength="300"
                rows="4"
                required
              />
            </div>

            {/* Oito Ferramentas  */}

            <div className="back-metodo-input-table">
              <div className="back-metodo-label-title">
                As Oito Ferramentas do Método Guidista
              </div>
              <div className="back-metodo-input">
                <div className="back-metodo-label">Título Secção PT:</div>
                <input
                  type="text"
                  name="pt_ferramentas_title"
                  value={pt_ferramentas_title}
                  onChange={this.handleChange}
                  placeholder="Título da secção Ferramentas"
                  maxLength="100"
                  required
                />
              </div>
              <div className="back-metodo-input metodo-bottom-margin">
                <div className="back-metodo-label">Título Secção EN:</div>
                <input
                  type="text"
                  name="en_ferramentas_title"
                  value={en_ferramentas_title}
                  onChange={this.handleChange}
                  placeholder="Título em inglês da secção Ferramentas"
                  maxLength="100"
                  required
                />
              </div>
              <div className="metodo-table metodo-seccao-margin">
                <BootstrapTable
                  className="BootstrapTable"
                  bootstrap4
                  keyField="ferramenta"
                  data={ferramentasData}
                  columns={ferramentasColumns}
                />
              </div>
            </div>

            {/* Quatro Constantes  */}

            <div className="back-metodo-label-title">As Quatro Constantes</div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção PT:</div>
              <input
                type="text"
                name="pt_constantes_title"
                value={pt_constantes_title}
                onChange={this.handleChange}
                placeholder="Título da secção Constantes"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção EN:</div>
              <input
                type="text"
                name="en_constantes_title"
                value={en_constantes_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção Constantes"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Constantes Texto PT:</div>
              <textarea
                name="pt_constantes_intro"
                value={pt_constantes_intro}
                onChange={this.handleChange}
                placeholder="Texto de Introdução da secção Constantes"
                maxLength="300"
                rows="4"
                required
              />
            </div>
            <div className="back-metodo-input-textarea metodo-bottom-margin">
              <div className="back-metodo-label">Constantes Texto EN:</div>
              <textarea
                name="en_constantes_intro"
                value={en_constantes_intro}
                onChange={this.handleChange}
                placeholder="Introduction Text for Constants section"
                maxLength="300"
                rows="4"
                required
              />
            </div>
            <div className="back-metodo-input-table metodo-seccao-margin">
              <div className="metodo-table">
                <BootstrapTable
                  className="BootstrapTable"
                  bootstrap4
                  keyField="constante"
                  data={constantesData}
                  columns={constantesColumns}
                />
              </div>
            </div>

            {/* Atividades  */}

            <div className="back-metodo-label-title">Atividades</div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção PT:</div>
              <input
                type="text"
                name="pt_atividades_title"
                value={pt_atividades_title}
                onChange={this.handleChange}
                placeholder="Título da secção Atividades"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção EN:</div>
              <input
                type="text"
                name="en_atividades_title"
                value={en_atividades_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção Atividades"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro Texto PT:</div>
              <textarea
                name="pt_atividades_intro"
                value={pt_atividades_intro}
                onChange={this.handleChange}
                placeholder="Texto de Introdução da secção Atividades"
                maxLength="300"
                rows="4"
                required
              />
            </div>
            <div className="back-metodo-input-textarea metodo-bottom-margin">
              <div className="back-metodo-label">Intro Texto EN:</div>
              <textarea
                name="en_atividades_intro"
                value={en_atividades_intro}
                onChange={this.handleChange}
                placeholder="Introduction text of the Ativities section"
                maxLength="300"
                rows="4"
                required
              />
            </div>
            <div className="back-metodo-input-table metodo-seccao-margin">
              <div className="metodo-table">
                <BootstrapTable
                  className="BootstrapTable"
                  bootstrap4
                  keyField="atividade"
                  data={atividadesData}
                  columns={atividadesColumns}
                />
              </div>
            </div>

            {/* Projetos  */}

            <div className="back-metodo-label-title">
              Projetos realizados a nível nacional
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção PT:</div>
              <input
                type="text"
                name="pt_projetos_title"
                value={pt_projetos_title}
                onChange={this.handleChange}
                placeholder="Título da secção Projetos"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label">Título Secção EN:</div>
              <input
                type="text"
                name="en_projetos_title"
                value={en_projetos_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção Projetos"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro Texto PT:</div>
              <textarea
                name="pt_projetos_intro"
                value={pt_projetos_intro}
                onChange={this.handleChange}
                placeholder="Texto de Introdução da secção Projetos"
                maxLength="500"
                rows="6"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro Texto EN:</div>
              <textarea
                name="en_projetos_intro"
                value={en_projetos_intro}
                onChange={this.handleChange}
                placeholder="Introduction text of the Projects section"
                maxLength="500"
                rows="6"
                required
              />
            </div>
            <div className="back-metodo-input-table">
              <div className="back-metodo-inline">
                <div className="back-metodo-label-title">Timeline Projetos</div>
                <Link to="/backoffice/metodo-guidista/projetos/new">
                  <button
                    className="login-button metodo-new-button"
                    variant="contained"
                    color="primary"
                  >
                    Novo Projeto
                  </button>
                </Link>
              </div>
              <div className="metodo-table">
                <BootstrapTable
                  className="BootstrapTable"
                  bootstrap4
                  keyField="projeto"
                  data={projetosData}
                  columns={projetosColumns}
                  rowEvents={rowEvents}
                />
              </div>
            </div>

            {/* Save Button */}

            <div className="back-metodo-button">
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
          <ModalPopup
            show={showModal}
            handleDelete={this.handleModalDelete}
            handleClose={this.handleModal}
          />
          <PopUp flashInput={flash} typeMessage={messageStatus} />
        </div>
      </div>
    );
  }
}

export default MetodoBackoffice;
