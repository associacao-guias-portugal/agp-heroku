import React from 'react';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';
import './MetodoBackoffice.css';

class MetodoConstantesBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      pt_title: '',
      en_title: '',
      pt_legenda1: '',
      en_legenda1: '',
      pt_legenda2: '',
      en_legenda2: '',
      pt_legenda3: '',
      en_legenda3: '',
      flash: '',
      messageStatus: '',
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({ [name]: value });
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
  
    axios.get(`/metodo-guidista/constantes/${match.params.item}`)
      .then((res) => {
        const results = res.data[0];  
        this.setState({ 
          image: results.image,
          pt_title: results.pt_title,
          en_title: results.en_title,
          pt_legenda1: results.pt_legenda1,
          en_legenda1: results.en_legenda1,
          pt_legenda2: results.pt_legenda2,
          en_legenda2: results.en_legenda2,
          pt_legenda3: results.pt_legenda3,
          en_legenda3: results.en_legenda3,
        });
      });
  }

  handleChange = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { match, history } = this.props;
    const id = match.params.item;
    const { messageStatus, flash, ...data } = this.state;

    axios.put(`/metodo-guidista/constantes/${id}`, data)
      .then((res) => {
        this.setState({ messageStatus: 'success' }, () => {
          setTimeout(() => history.push({ pathname: '/backoffice/metodo-guidista' }), 1500)
        });
        this.setState({ flash: 'Guardado com sucesso.' })
      })
      .catch((err) => {
        this.setState({
          messageStatus: 'error',
          flash: 'Ocorreu um erro, por favor tente outra vez.',
        });
      });
  };  


  render() {
    const { image, pt_title, en_title, pt_legenda1, en_legenda1, pt_legenda2, en_legenda2, pt_legenda3, en_legenda3,  flash, messageStatus } = this.state;

    return (
      <div className="MetodoConstantesBack">
        <div className="back-metodo-title">Método Guidista - As Quatro Constantes</div>
        <div className="back-metodo-subtitle">{pt_title}</div>
        <div className="back-metodo-section">
          <form onSubmit={this.handleSubmit}>

            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Título Constante PT:</div>
              <input
                type="text"
                name="pt_title"
                value={pt_title}
                onChange={this.handleChange}
                placeholder="Título da Constante"
                maxLength="40"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Título Constante EN:</div>
              <input
                type="text"
                name="en_title"
                value={en_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da Constante"
                maxLength="40"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Imagem:</div>
              <input
                type="text"
                name="image"
                value={image}
                onChange={this.handleChange}
                placeholder="Link da imagem"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 1 PT:</div>
              <input
                type="text"
                name="pt_legenda1"
                value={pt_legenda1}
                onChange={this.handleChange}
                placeholder="Legenda 1"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 1 EN:</div>
              <input
                type="text"
                name="en_legenda1"
                value={en_legenda1}
                onChange={this.handleChange}
                placeholder="Legenda 1 em Inglês"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 2 PT:</div>
              <input
                type="text"
                name="pt_legenda2"
                value={pt_legenda2}
                onChange={this.handleChange}
                placeholder="Legenda 2"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 2 EN:</div>
              <input
                type="text"
                name="en_legenda2"
                value={en_legenda2}
                onChange={this.handleChange}
                placeholder="Legenda 2 em Inglês"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 3 PT:</div>
              <input
                type="text"
                name="pt_legenda3"
                value={pt_legenda3}
                onChange={this.handleChange}
                placeholder="Legenda 3"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="back-metodo-label constantes-label">Legenda 3 EN:</div>
              <input
                type="text"
                name="en_legenda3"
                value={en_legenda3}
                onChange={this.handleChange}
                placeholder="Legenda 3 em Inglês"
                maxLength="100"
                required
              />
            </div>

            <div className="back-ramos-button">
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
 
export default MetodoConstantesBack;