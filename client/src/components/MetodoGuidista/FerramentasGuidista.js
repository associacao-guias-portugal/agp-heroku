import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import './FerramentasGuidista.css';

const FerramentasGuidista = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [ferramenta, setFerramenta] = useState([]);

  let itemTitle = JSON.parse(localStorage.getItem('itemTitle'));
  localStorage.setItem('title', JSON.stringify(`Ferramenta ${itemTitle}`));

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = localStorage.getItem('item');
    axios.get(`/metodo-guidista/ferramentas/${id}`)
      .then((res) => {
        setFerramenta(res.data[0]);
        document.title = `Associação Guias de Portugal - ${res.data[0].pt_title}`;
      });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="FerramentasGuidista">
      <div className="ferramenta-section">
        <div className="ferramenta-info-section">
          <div className="ferramenta-title">{ferramenta[`${selectedLanguage}_title`]}</div>
          <div className="ferramenta-text">{ReactHtmlParser(ferramenta[`${selectedLanguage}_content`])}</div>
          <div className="ferramenta-back">
            <Link to="/pedagogia/metodo-guidista">{t('metodoGuidista.voltar')}</Link>
          </div>
        </div>
        <div className="ferramenta-image">
          <img src={ferramenta.image} alt={ferramenta[`${selectedLanguage}_title`]} />
        </div>
      </div>
    </div>
  );
};

export default FerramentasGuidista;
