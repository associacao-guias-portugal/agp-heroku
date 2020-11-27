import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import './Homepage.css';
import avezinhaLogo from '../../assets/images/Homepage/avezinha_white-8.png';
import aventuraLogo from '../../assets/images/Homepage/aventura_white-8.png';
import caravelaLogo from '../../assets/images/Homepage/caravela_white-8.png';
import moinhoLogo from '../../assets/images/Homepage/moinho_white-8.png';

const Homepage = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [showNoticias, setShowNoticias] = useState(false);
  const [homepageData, setHomepageData] = useState([]);
  const [jornalData, setJornalData] = useState([]);
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  useEffect(() => {
    document.title = "Associação Guias de Portugal - Home";
    localStorage.setItem('title', JSON.stringify(`Home`));

    // GCSE - Se vier da página pesquisa tem que se apagar a search query do url
    if (window.location.search && !window.location.hash.includes("search")) {
      const query = window.location.search;
      let href = window.location.href;
      href = href.replaceAll(query, '');    
      window.location.href = href;
    }

    window.scrollTo(0, 0);
    axios.get('/homepage/all')
      .then((res) => {
        setHomepageData(res.data[0]);
      });

    axios.get('/homepage/journal')
      .then((res) => {
        setJornalData(res.data[0]);
      });

    axios.get('/homepage/news')
      .then((res) => {
        setArticlesData(res.data);
        const newsLength = Object.keys(res.data).length;
        if (newsLength !== 0) {
          setShowNoticias(true);
        }
      });
  }, []);

  const openNoticia = (event) => {
    const newsId = event.target.id;
    props.history.push({ pathname: `/publicações/noticias/${newsId}` });
  };

  return (
    <div className="Homepage">
      <span className="home-video-section">
        <div className="home-video">
          <video src={homepageData.teaser} type="video/mp4" controls controlsList="nodownload" autoPlay muted loop width="100%" height="100%" />
        </div>
      </span>

      <div className="home-ramos">
        <div className="home-section-title home-modelo-title">{homepageData[`${selectedLanguage}_modelo_title`]}</div>
        <div className="home-ramos-section">
          <Link to="/pedagogia/ramo-avezinha">
            <div className="home-ramos-card">
              <img src={homepageData.ramo1_image} className="home-ramos-img" alt="Ramo Avezinha" />
              <div className="home-ramos-card-info avezinha-card">
                <img src={avezinhaLogo} className="home-ramos-card-logo" alt="Ramo Avezinha Símbolo" />
                <div className="home-ramos-card-title">{t('homepage.tituloAvezinha')}</div>
                <div className="home-ramos-card-text">{t('homepage.idadesAvezinha')}</div>
              </div>
            </div>
          </Link>
          <Link to="/pedagogia/ramo-aventura">
            <div className="home-ramos-card">
              <img src={homepageData.ramo2_image} className="home-ramos-img" alt="Ramo Aventura" />
              <div className="home-ramos-card-info aventura-card">
                <img src={aventuraLogo} className="home-ramos-card-logo" alt="Ramo Aventura Símbolo" />
                <div className="home-ramos-card-title">{t('homepage.tituloAventura')}</div>
                <div className="home-ramos-card-text">{t('homepage.idadesAventura')}</div>
              </div>
            </div>
          </Link>
          <Link to="/pedagogia/ramo-caravela">
            <div className="home-ramos-card">
              <img src={homepageData.ramo3_image} className="home-ramos-img" alt="Ramo Caravela" />
              <div className="home-ramos-card-info caravela-card">
                <img src={caravelaLogo} className="home-ramos-card-logo" alt="Ramo Caravela Símbolo" />
                <div className="home-ramos-card-title">{t('homepage.tituloCaravela')}</div>
                <div className="home-ramos-card-text">{t('homepage.idadesCaravela')}</div>
              </div>
            </div>
          </Link>
          <Link to="/pedagogia/ramo-moinho">
            <div className="home-ramos-card">
              <img src={homepageData.ramo4_image} className="home-ramos-img" alt="Ramo Moinho" />
              <div className="home-ramos-card-info moinho-card">
                <img src={moinhoLogo} className="home-ramos-card-moinho" alt="Ramo Moinho Símbolo" />
                <div className="home-ramos-card-title">{t('homepage.tituloMoinho')}</div>
                <div className="home-ramos-card-text">{t('homepage.idadesMoinho')}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="home-section-palavras">
        <div className="home-section-side">
          <div className="home-section-center">
            <div className="home-section-title">{homepageData[`${selectedLanguage}_pais_title`]}</div>
            <div className="home-section-subtitle">{homepageData[`${selectedLanguage}_pais_subtitle`]}</div>
            <div className="home-section-text">{homepageData[`${selectedLanguage}_pais_intro`]}</div>
            <div>
              <Link to="/pedagogia/palavra-pais">
                <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-section-side homepage-image" style={{ backgroundImage: `url(${homepageData.pais_image})` }} />
      </div>
      <div className="home-section-jornal">
        <div className="home-section-side homepage-image" style={{ backgroundImage: `url(${homepageData.jornal_image})` }} />
        <div className="home-section-side">
          <div className="home-section-center">
            <div className="home-section-title">{homepageData[`${selectedLanguage}_jornal_title`]}</div>
            <div className="home-section-subtitle">
              &quot;
              {jornalData[`${selectedLanguage}_title`]}
              &quot;
            </div>
            <div className="home-section-text">
              {t('homepage.infoJornal')}
              <br />
              O Trevo - {jornalData.edition} {t('homepage.edicaoJornal')} - {jornalData.year}
            </div>
            <div>
              <Link to="/publicações/jornal-trevo">
                <button type="submit" className="home-button">{t('buttons.lerMais')}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      { showNoticias
        ? (
          <div className="home-noticias">
            {articlesData.map((article) => (
              <div key={article.id} className="home-noticia-card">
                <div className="home-noticia-title">{article[`${selectedLanguage}_title`]}</div>
                <div className="home-noticia-text">{article[`${selectedLanguage}_intro_text`]}</div>
                <button type="submit" id={article.id} className="home-button" onClick={openNoticia}>{t('buttons.lerMais')}</button>
              </div>
            ))}
          </div>
        ) : ''}
    </div>
  );
};

// Homepage.propTypes = {
//   history: PropTypes.string.isRequired,
// };

export default withRouter(Homepage);
