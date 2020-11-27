import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import './PalavraAosPais.css';

const PalavraAosPais = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [
    resultsPalavraAosPaisTable1,
    setResultsPalavraAosPaisTable1,
  ] = useState([]);
  const [
    resultsPalavraAosPaisTable2,
    setResultsPalavraAosPaisTable2,
  ] = useState([]);
  const [resultsPalavraAosPaisCards, setResultsPalavraAosPaisCards] = useState(
    []
  );

  useEffect(() => {
    document.title = "Associação Guias de Portugal - Palavra aos Pais";
    window.scrollTo(0, 0);
    axios.get('/palavra-aos-pais').then((res) => {
      const resultsTabele1 = res.data[0];
      setResultsPalavraAosPaisTable1(resultsTabele1);
    });
    axios.get('/palavra-aos-pais/palavraaospais2').then((res) => {
      const resultsTabele2 = res.data;
      setResultsPalavraAosPaisTable2(resultsTabele2);
    });
    axios.get('/palavra-aos-pais/palavraaospaiscards').then((res) => {
      const resultsCards = res.data;
      setResultsPalavraAosPaisCards(resultsCards);
    });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="Palavra-Aos-Pais">
      <div className="palavra-pais-banner">
        <img src={resultsPalavraAosPaisTable1.image} alt="Palavra aos Pais" />
      </div>
      <div className="PalavraAosPais1">
        <p className="app-main-title FilhaGuia">
          {resultsPalavraAosPaisTable1[`${selectedLanguage}_title`]}
        </p>
        <p className="app-second-text FilhaGuiaText">
          {resultsPalavraAosPaisTable1[`${selectedLanguage}_text_title`]}
        </p>
      </div>
      <>
        {resultsPalavraAosPaisTable2.map((item, index) =>
          index % 2 === 0 ? (
            <div className="PalavraAosPais2-section-1" key={index}>
              <div className="PalavraAosPais2-side-text">
                <div className="PalavraAosPais2-info">
                  <div className="app-third-title PalavraAosPais2-title">
                    {ReactHtmlParser(item[`${selectedLanguage}_title`])}
                  </div>
                  <div className="PalavraAosPais2-text">
                    {ReactHtmlParser(item[`${selectedLanguage}_text`])}
                  </div>
                </div>
              </div>
              <div
                className="PalavraAosPais2-side-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          ) : (
            <div className="PalavraAosPais2-section-2" key={index}>
              <div className="PalavraAosPais2-side-text">
                <div className="PalavraAosPais2-info">
                  <div className="app-third-title PalavraAosPais2-title">
                    {ReactHtmlParser(item[`${selectedLanguage}_title`])}
                  </div>
                  <div className="PalavraAosPais2-text">
                    {ReactHtmlParser(item[`${selectedLanguage}_text`])}
                  </div>
                </div>
              </div>
              <div
                className="PalavraAosPais2-side-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          )
        )}
      </>
      <div className="TenhoFilhaGuia">
        <div className="app-second-title FilhaGuia2">
          {ReactHtmlParser(
            resultsPalavraAosPaisTable1[`${selectedLanguage}_title_card`]
          )}
        </div>
        <div className="app-main-text FilhaGuiaText2">
          {ReactHtmlParser(
            resultsPalavraAosPaisTable1[`${selectedLanguage}_text_card`]
          )}
        </div>
        <div className="FilhaGuiaCard">
          {resultsPalavraAosPaisCards.map((card) => (
            <div className="CardFilhaGuiaTestimony" key={card.id}>
              <Card className="CardFilhaGuia" style={{ width: "260px" }}>
                <Card.Text className="CardFilhaGuiaTestimony1">
                  <div className="TextFilhaGuiaTestimony">
                    {ReactHtmlParser(card[`${selectedLanguage}_text`])}
                  </div>
                </Card.Text>
                <Card.Text className="CardFilhaGuiaNames">
                  <div className="TextFilhaGuiaNameParents">
                    {ReactHtmlParser(card.name)}
                  </div>
                  <div className="TextCardFilhaGuiaRelatives">
                    {ReactHtmlParser(card[`${selectedLanguage}_parents`])}
                  </div>
                </Card.Text>
              </Card>
            </div>
          ))}
        </div>
        <div className="PalavraPais-button-section">
          <Link to="/contactos/formulario">
            <button
              type="submit"
              className="ser-guia-button PalavraPais-button"
            >
              {t('buttons.queresSerGuia')}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PalavraAosPais;
