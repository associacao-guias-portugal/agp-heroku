import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Journal.css';
import PopUp from '../PopUp/PopUp';

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publish: false,
      id: '',
      edition: '',
      year: '',
      pt_title: '',
      en_title: '',
      thumbnail: '',
      pdf_link: '',
      pdf_link_en: '',
      pt_intro_text_1: '',
      pt_intro_text_2: '',
      pt_intro_text_3: '',
      pt_intro_text_4: '',
      pt_intro_text_5: '',
      en_intro_text_1: '',
      en_intro_text_2: '',
      en_intro_text_3: '',
      en_intro_text_4: '',
      en_intro_text_5: '',
      flash: '',
      messageStatus: '',
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { match } = this.props;
    const getEdition = match.params.edition;
    if (getEdition) {
      axios.get(`/journal/${getEdition}`)
        .then((res) => {
          const results = res.data[0];
          let getPublish = results.publish;
          if (getPublish === 1) {
            getPublish = true;
          } else {
            getPublish = false;
          }
          this.setState({
            id: results.id,
            edition: results.edition,
            year: results.year,
            pt_title: results.pt_title,
            en_title: results.en_title,
            thumbnail: results.thumbnail,
            pdf_link: results.pdf_link,
            pdf_link_en: results.pdf_link_en,
            pt_intro_text_1: results.pt_intro_text_1,
            pt_intro_text_2: results.pt_intro_text_2,
            pt_intro_text_3: results.pt_intro_text_3,
            pt_intro_text_4: results.pt_intro_text_4,
            pt_intro_text_5: results.pt_intro_text_5,
            en_intro_text_1: results.en_intro_text_1,
            en_intro_text_2: results.en_intro_text_2,
            en_intro_text_3: results.en_intro_text_3,
            en_intro_text_4: results.en_intro_text_4,
            en_intro_text_5: results.en_intro_text_5,
            publish: getPublish,
          });
        });
    }
  };

  updateField = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { value } = event.target;
    this.setState({ [name]: value });
  };

  updatePublish = () => {
    const { publish } = this.state;
    this.setState({ publish: !publish });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { flash, messageStatus, ...newEdition } = this.state;
    const { match, history } = this.props;
    const getEdition = match.params.edition;

    getEdition ?
      axios.put('/journal/editPublication', newEdition)
        .then((res) => {
          this.setState({ messageStatus: 'success' }, () => {
            setTimeout(() => history.push({ pathname: '/backoffice/journal/painel' }), 1500)
          });
          this.setState({ flash: 'Guardado com sucesso.' });
        })
        .catch((err) => {
          this.setState({ messageStatus: 'error' });
          this.setState({
            flash: 'Ocorreu um erro, por favor tente outra vez.',
          });
        })
      :
      axios
        .post('/journal/publish', newEdition)
        .then((res) => {
          this.setState({ messageStatus: 'success' }, () => {
            setTimeout(() => history.push({ pathname: '/backoffice/journal/painel' }), 1500)
          });
          this.setState({ flash: 'Guardado com sucesso.' });
        })
        .catch((err) => {
          this.setState({ messageStatus: 'error' });
          this.setState({
            flash: 'Ocorreu um erro, por favor tente outra vez.',
          });
        });

  };

  render() {

    const { match } = this.props;
    const getEdition = match.params.edition;

    return (
      <div className="body">
        <form className="NoticiaInput-section" onSubmit={this.handleSubmit}>
          {getEdition ?
            <div className="NoticiaInput-title">Jornal - alterar dados da {getEdition}ª edição</div>
            :
            <div className="NoticiaInput-title">Jornal - Nova Edição</div>
          }
          <div className="input">
            <div className="input-section-label">Edição:</div>
            <input
              type="text"
              name="edition"
              value={this.state.edition}
              onChange={(event) => this.updateField(event)}
              placeholder="Não repetir número de edições"
              maxLength="20"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título Pt:</div>
            <input
              type="text"
              name="pt_title"
              value={this.state.pt_title}
              onChange={(event) => this.updateField(event)}
              placeholder="Máximo de 85 caracteres"
              maxLength="85"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título En:</div>
            <input
              type="text"
              name="en_title"
              value={this.state.en_title}
              onChange={(event) => this.updateField(event)}
              placeholder="Maximum of 85 characters"
              maxLength="85"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Ano:</div>
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={(event) => this.updateField(event)}
              placeholder="Ex: 2020"
              maxLength="4"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Imagem:</div>
            <input
              type="text"
              name="thumbnail"
              value={this.state.thumbnail}
              onChange={(event) => this.updateField(event)}
              placeholder="Link da imagem da capa da edição"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Pdf:</div>
            <input
              type="text"
              name="pdf_link"
              value={this.state.pdf_link}
              onChange={(event) => this.updateField(event)}
              placeholder="Link do pdf para download da edição"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Pdf En:</div>
            <input
              type="text"
              name="pdf_link_en"
              value={this.state.pdf_link_en}
              onChange={(event) => this.updateField(event)}
              placeholder="Link to the pdf for download of the edition"
              required
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 1 Pt:</div>
            <input
              type="text"
              name="pt_intro_text_1"
              value={this.state.pt_intro_text_1}
              onChange={(event) => this.updateField(event)}
              placeholder="Edição Tema 1, máximo de 250 caracteres"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 2 Pt:</div>
            <input
              type="text"
              name="pt_intro_text_2"
              value={this.state.pt_intro_text_2}
              onChange={(event) => this.updateField(event)}
              placeholder="Edição Tema 2, máximo de 250 caracteres"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 3 Pt:</div>
            <input
              type="text"
              name="pt_intro_text_3"
              value={this.state.pt_intro_text_3}
              onChange={(event) => this.updateField(event)}
              placeholder="Edição Tema 3, máximo de 250 caracteres"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 4 Pt:</div>
            <input
              type="text"
              name="pt_intro_text_4"
              value={this.state.pt_intro_text_4}
              onChange={(event) => this.updateField(event)}
              placeholder="Edição Tema 4, máximo de 250 caracteres"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 5 Pt:</div>
            <input
              type="text"
              name="pt_intro_text_5"
              value={this.state.pt_intro_text_5}
              onChange={(event) => this.updateField(event)}
              placeholder="Edição Tema 5, máximo de 250 caracteres"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 1 En:</div>
            <input
              type="text"
              name="en_intro_text_1"
              value={this.state.en_intro_text_1}
              onChange={(event) => this.updateField(event)}
              placeholder="Edition Subject 1, maximum of 250 characters"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 2 En:</div>
            <input
              type="text"
              name="en_intro_text_2"
              value={this.state.en_intro_text_2}
              onChange={(event) => this.updateField(event)}
              placeholder="Edition Subject 2, maximum of 250 characters"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 3 En:</div>
            <input
              type="text"
              name="en_intro_text_3"
              value={this.state.en_intro_text_3}
              onChange={(event) => this.updateField(event)}
              placeholder="Edition Subject 3, maximum of 250 characters"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 4 En:</div>
            <input
              type="text"
              name="en_intro_text_4"
              value={this.state.en_intro_text_4}
              onChange={(event) => this.updateField(event)}
              placeholder="Edition Subject 4, maximum of 250 characters"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label">Título 5 En:</div>
            <input
              type="text"
              name="en_intro_text_5"
              value={this.state.en_intro_text_5}
              onChange={(event) => this.updateField(event)}
              placeholder="Edition Subject 5, maximum of 250 characters"
              maxLength="250"
            />
          </div>
          <div className="input">
            <div className="input-section-label-publish">Publicar</div>
            <input
              type="checkbox"
              name="publish"
              value={this.state.publish}
              checked={this.state.publish}
              onChange={this.updatePublish}
            />
          </div>
          <div className="NoticiaInput-section-button">
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
        <PopUp flashInput={this.state.flash} typeMessage={this.state.messageStatus} />
      </div>
    );
  }
}

Journal.propTypes = {
  match: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired,
};

export default Journal;
