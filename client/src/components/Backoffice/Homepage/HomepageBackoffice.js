import React from 'react';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';
import './HomepageBackoffice.css';

class HomepageBackoffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teaser: '',
      journal_edition: 0,
      article_1: 0, 
      article_2: 0, 
      article_3: 0, 
      pt_modelo_title: '',	
      en_modelo_title: '',	
      ramo1_image: '',	
      ramo2_image: '',	
      ramo3_image: '',	
      ramo4_image: '',	
      pt_pais_title: '',	
      en_pais_title: '',	
      pt_pais_subtitle: '',	
      en_pais_subtitle: '',	
      pt_pais_intro: '',	
      en_pais_intro: '',	
      pais_image: '',	
      pt_jornal_title: '',	
      en_jornal_title: '',	
      jornal_image: '',	
      journalData: [],
      newsData: [],
      flash: '',
      messageStatus: ''
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    axios.get('/news/published')
      .then((res) => {
        this.setState({ newsData: res.data })
      });
    axios.get('/journal')
      .then((res) => {
        this.setState({ journalData: res.data })
      });

    axios.get('/homepage')
      .then((res) => {
        const results = res.data[0];
        this.setState({
          teaser: results.teaser,
          journal_edition: results.journal_edition,
          article_1: results.article_1, 
          article_2: results.article_2, 
          article_3: results.article_3,
          pt_modelo_title: results.pt_modelo_title,	
          en_modelo_title: results.en_modelo_title,
          ramo1_image: results.ramo1_image,	
          ramo2_image: results.ramo2_image,	
          ramo3_image: results.ramo3_image,	
          ramo4_image: results.ramo4_image,	
          pt_pais_title: results.pt_pais_title,	
          en_pais_title: results.en_pais_title,	
          pt_pais_subtitle: results.pt_pais_subtitle,	
          en_pais_subtitle: results.en_pais_subtitle,	
          pt_pais_intro: results.pt_pais_intro,	
          en_pais_intro: results.en_pais_intro,	
          pais_image: results.pais_image,
          pt_jornal_title: results.pt_jornal_title,
          en_jornal_title: results.en_jornal_title,
          jornal_image: results.jornal_image,
        })
      });
  };

  handleChange = (event) => {
    event.preventDefault();
    let { value, name } = event.target;
    if (name === 'journal_edition' || name === 'article_1' || name === 'article_2' || name === 'article_3') {
      value = Number(value);
    }
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { flash, messageStatus, journalData, newsData, ...homepageData } = this.state;
    
    axios.put('/homepage', homepageData)
      .then((res) => {
        this.setState({ messageStatus: 'success' }, () => {
          setTimeout(() => history.push({ pathname: '/backoffice/homepage' }), 1500)
        });
        this.setState({ flash: 'Guardado com sucesso.' })
      })
      .catch((err) => {
        this.setState({ messageStatus: 'error' }, () => {
          setTimeout(() => history.push({ pathname: '/backoffice/homepage' }), 1500)
        });
        this.setState({ flash: 'Ocorreu um erro, por favor tente outra vez.' })
      });
  };

  render() {
    const { journalData, flash, messageStatus, newsData, 
      teaser,
      article_1, 
      article_2, 
      article_3, 
      journal_edition, 
      pt_modelo_title,	
      en_modelo_title,	
      ramo1_image,	
      ramo2_image,	
      ramo3_image,	
      ramo4_image,	
      pt_pais_title,	
      en_pais_title,	
      pt_pais_subtitle,	
      en_pais_subtitle,	
      pt_pais_intro,	
      en_pais_intro,	
      pais_image,	
      pt_jornal_title,	
      en_jornal_title,	
      jornal_image
    } = this.state;

    return (
      <div className="HomepageBackoffice">
        <div className="homepage-title">Homepage</div>
        <div className="homepage-section">
          <form onSubmit={this.handleSubmit}>
            <div className="homepage-section-title">Teaser</div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Video Link:</div>
              <input
                type="text"
                name="teaser"
                value={teaser}
                onChange={this.handleChange}
                placeholder="Link do video/teaser"
                required
              />
            </div>
            <div className="homepage-section-title">Modelo Pedagógico</div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_modelo_title"
                value={pt_modelo_title}
                onChange={this.handleChange}
                placeholder="Título da secção do Modelo Pedagógico"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título EN:</div>
              <input
                type="text"
                name="en_modelo_title"
                value={en_modelo_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção do Modelo Pedagógico"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Imagem Avezinha:</div>
              <input
                type="text"
                name="ramo1_image"
                value={ramo1_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Ramo Avezinha"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Imagem Aventura:</div>
              <input
                type="text"
                name="ramo2_image"
                value={ramo2_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Ramo Aventura"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Imagem Caravela:</div>
              <input
                type="text"
                name="ramo3_image"
                value={ramo3_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Ramo Caravela"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Imagem Moinho:</div>
              <input
                type="text"
                name="ramo4_image"
                value={ramo4_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Ramo Moinho"
                required
              />
            </div>
            <div className="homepage-section-title">Palavra aos Pais</div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_pais_title"
                value={pt_pais_title}
                onChange={this.handleChange}
                placeholder="Título da secção Palavra aos Pais"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título EN:</div>
              <input
                type="text"
                name="en_pais_title"
                value={en_pais_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção Palavra aos Pais"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Subtítulo PT:</div>
              <input
                type="text"
                name="pt_pais_subtitle"
                value={pt_pais_subtitle}
                onChange={this.handleChange}
                placeholder="Subtítulo da secção Palavra aos Pais"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Subtítulo EN:</div>
              <input
                type="text"
                name="en_pais_subtitle"
                value={en_pais_subtitle}
                onChange={this.handleChange}
                placeholder="Subtítulo em inglês da secção Palavra aos Paiso"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro PT:</div>
              <textarea
                name="pt_pais_intro"
                value={pt_pais_intro}
                onChange={this.handleChange}
                placeholder="Texto Introdução for Palavra aos Pais"
                maxLength="200"
                rows="2"
                required
              />
            </div>
            <div className="back-metodo-input-textarea">
              <div className="back-metodo-label">Intro EN:</div>
              <textarea
                name="en_pais_intro"
                value={en_pais_intro}
                onChange={this.handleChange}
                placeholder="Introduction Text for Palavra aos Pais"
                maxLength="200"
                rows="2"
                required
              />
            </div>
            <div className="back-metodo-input homepage-margin-top">
              <div className="homepage-section-label">Imagem:</div>
              <input
                type="text"
                name="pais_image"
                value={pais_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Palavra aos Pais"
                required
              />
            </div>
            <div className="homepage-section-title">Jornal</div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_jornal_title"
                value={pt_jornal_title}
                onChange={this.handleChange}
                placeholder="Título da secção Palavra aos Pais"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título EN:</div>
              <input
                type="text"
                name="en_jornal_title"
                value={en_jornal_title}
                onChange={this.handleChange}
                placeholder="Título em inglês da secção Palavra aos Pais"
                maxLength="100"
                required
              />
            </div>
            <div className="homepage-section-input">
              <div className="homepage-select-label">Edição Jornal:</div>
              <select name="journal_edition" value={journal_edition} onChange={this.handleChange}>
                <option value={0}>Escolher edição a publicar....</option>
                {journalData.map((journal) => (
                  <option className="option" key={journal.edition} value={journal.edition}>
                    {`Edição ${journal.edition} - ${journal.pt_title}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Imagem Jornal:</div>
              <input
                type="text"
                name="jornal_image"
                value={jornal_image}
                onChange={this.handleChange}
                placeholder="Link da imagem Jornal"
                required
              />
            </div>
            <div className="homepage-section-title">Notícias</div>
            <div className="homepage-section-news">
              <div className="homepage-section-input">
                <div className="homepage-select-label">Notícia 1:</div>
                <select name="article_1" value={article_1} onChange={this.handleChange}>
                  <option value={0}>Nenhuma</option>
                  {newsData.map((news) => (
                    <option key={news.id} value={news.id}>
                      {(news.date.substr(0,10))} - {news.pt_title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="homepage-section-input">
                <div className="homepage-select-label">Notícia 2:</div>
                <select name="article_2" value={article_2} onChange={this.handleChange}>
                  <option className="option-one" value={0}>Nenhuma</option>
                  {newsData.map((news) => (
                    <option className="option-more" key={news.id} value={news.id}>
                      {news.date.substr(0,10)} - {news.pt_title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="homepage-section-input margin-space">
                <div className="homepage-select-label">Notícia 3:</div>
                <select name="article_3" value={article_3} onChange={this.handleChange}>
                  <option value={0}>Nenhuma</option>
                  {newsData.map((news) => (
                    <option key={news.id} value={news.id}>
                      {news.date.substr(0,10)} - {news.pt_title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="homepage-section-button">
              <button className="login-button" type="submit">GUARDAR</button>
            </div>
          </form>
        </div>
        <PopUp flashInput={flash} typeMessage={messageStatus} />
      </div>
    );
  }
};

export default HomepageBackoffice;
