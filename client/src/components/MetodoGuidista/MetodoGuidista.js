import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import TimelineGuidista from './TimelineGuidista';
import './MetodoGuidista.css';

const MetodoGuidista = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [mainData, setMainData] = useState([]);
  const [ferramentasData, setFerramentasData] = useState([]);
  const [constantesData, setConstantesData] = useState([]);
  const [atividadeCampo, setAtividadeCampo] = useState([]);
  const [atividadeSede, setAtividadeSede] = useState([]);
  const [atividadeCidade, setAtividadeCidade] = useState([]);
  const [atividadeComunitario, setAtividadeComunitario] = useState([]);
  const [atividadeInternacional, setAtividadeInternacional] = useState([]);

  useEffect(() => {
    document.title = "Método Guidista"
    window.scrollTo(0, 0);

    axios.get('/metodo-guidista')
      .then((res) => {
        setMainData(res.data[0]);
      });

    axios.get('/metodo-guidista/ferramentas/all')
      .then((res) => {
        setFerramentasData(res.data);
      });

    axios.get('/metodo-guidista/constantes/all')
      .then((res) => {
        setConstantesData(res.data);
      });

    axios.get('/metodo-guidista/atividades/all')
      .then((res) => {
        setAtividadeCampo(res.data[0]);
        setAtividadeSede(res.data[1]);
        setAtividadeCidade(res.data[2]);
        setAtividadeComunitario(res.data[3]);
        setAtividadeInternacional(res.data[4]);
      });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  const storageItem = (id) => {
    localStorage.setItem('item', id);
  };

  return (
    <div className="Metodo-Guidista">
      <div className="guidista-banner">
        <img src={mainData.banner} alt="Método Guidista" />
      </div>
      <div className="guidista-intro">
        <div className="app-main-title guidista-intro-title">{mainData[`${selectedLanguage}_main_title`]}</div>
        <div className="app-main-text guidista-intro-text">{mainData[`${selectedLanguage}_main_intro`]}</div>
      </div>
      <div className="guidista-metodos">
        <div className="metodos-title">{mainData[`${selectedLanguage}_ferramentas_title`]}</div>
        <div className="metodo-box-group">
          { ferramentasData.map((ferramenta) => (
            <Link
              to={ferramenta.link}
              key={ferramenta.id}
              onClick={() => storageItem(ferramenta.id)}
            >
              <div className="metodo-box">
                <div className="metodo-box-title">{ferramenta[`${selectedLanguage}_title`]}</div>
                <img className="metodo-box-img" src={ferramenta.icon} alt={ferramenta[`${selectedLanguage}_title`]} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="constantes-intro">
        <div className="app-main-title constantes-intro-title">{mainData[`${selectedLanguage}_constantes_title`]}</div>
        <div className="app-main-text constantes-intro-text">{mainData[`${selectedLanguage}_constantes_intro`]}</div>
      </div>
      <div className="constantes-group">
        { constantesData.map((constante) => (
          <div className="constante-section" key={constante.id}>
            <div className="constante-info">
              <div className="constante-title">{constante[`${selectedLanguage}_title`]}</div>
              <div className="constante-text">{constante[`${selectedLanguage}_legenda1`]}</div>
              <div className="constante-text">{constante[`${selectedLanguage}_legenda2`]}</div>
              <div className="constante-text">{constante[`${selectedLanguage}_legenda3`]}</div>
            </div>
            <div className="constante-img">
              <img src={constante.image} alt={constante.pt_title} />
            </div>
          </div>
        ))}
      </div>
      <div className="atividades-sentence">
        <div className="app-blue-banner-title atividades-sentence-title">{mainData[`${selectedLanguage}_atividades_title`]}</div>
        <div className="app-blue-banner-text atividades-sentence-text">{mainData[`${selectedLanguage}_atividades_intro`]}</div>
      </div>
      <div className="atividades-section-one">
        <div className="atividades-section-text">
          <div className="atividades-title">{atividadeCampo[`${selectedLanguage}_title`]}</div>
          <div className="atividades-text">{ReactHtmlParser(atividadeCampo[`${selectedLanguage}_content`])}</div>
        </div>
        <div className="atividades-section-img" style={{ backgroundImage: `url(${atividadeCampo.image})` }} />
      </div>
      <div className="atividades-section-two">
        <div className="atividades-section-text">
          <div className="atividades-title">{atividadeSede[`${selectedLanguage}_title`]}</div>
          <div className="atividades-text">{ReactHtmlParser(atividadeSede[`${selectedLanguage}_content`])}</div>
        </div>
        <div className="atividades-section-img" style={{ backgroundImage: `url(${atividadeSede.image})` }} />
      </div>
      <div className="atividades-section-one">
        <div className="atividades-section-text">
          <div className="atividades-title">{atividadeCidade[`${selectedLanguage}_title`]}</div>
          <div className="atividades-text">{ReactHtmlParser(atividadeCidade[`${selectedLanguage}_content`])}</div>
        </div>
        <div className="atividades-section-img" style={{ backgroundImage: `url(${atividadeCidade.image})` }} />
      </div>
      <div className="atividades-section-two">
        <div className="atividades-section-text">
          <div className="atividades-title">{atividadeComunitario[`${selectedLanguage}_title`]}</div>
          <div className="atividades-text">{ReactHtmlParser(atividadeComunitario[`${selectedLanguage}_content`])}</div>
        </div>
        <div className="atividades-section-img" style={{ backgroundImage: `url(${atividadeComunitario.image})` }} />
      </div>
      <div className="projetos-section">
        <div className="app-main-title projetos-intro-title">{mainData[`${selectedLanguage}_projetos_title`]}</div>
        <div className="app-main-text projetos-intro-text">{ReactHtmlParser(mainData[`${selectedLanguage}_projetos_intro`])}</div>
      </div>

      <div className="projetos-mapa">
        <TimelineGuidista />
      </div>

      <div className="atividades-section-one">
        <div className="atividades-section-text">
          <div className="atividades-title">{atividadeInternacional[`${selectedLanguage}_title`]}</div>
          <div className="atividades-text">{ReactHtmlParser(atividadeInternacional[`${selectedLanguage}_content`])}</div>
        </div>
        <div className="atividades-section-img" style={{ backgroundImage: `url(${atividadeInternacional.image})` }} />
      </div>
      <div className="associacao-button-section">
        <Link to="/contactos/formulário">
          <button type="submit" className="ser-guia-button associacao-button">{t('buttons.queresSerGuia')}</button>
        </Link>
      </div>
    </div>
  );
};

export default MetodoGuidista;
