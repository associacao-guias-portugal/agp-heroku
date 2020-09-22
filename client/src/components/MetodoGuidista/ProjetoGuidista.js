import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import './ProjetoGuidista.css';

const ProjetoGuidista = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [projeto, setProjeto] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = localStorage.getItem('item');
    axios.get(`/metodo-guidista/projetos/${id}`)
      .then((res) => {
        setProjeto(res.data[0]);
      });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="ProjetoGuidista">
      <div className="projeto-post-box">
        <div className="projeto-post-image">
          <img src={projeto.image} alt={projeto[`${selectedLanguage}_title`]} />
        </div>
        <div className="projeto-post-info">
          <div className="app-main-title projeto-post-title">{projeto[`${selectedLanguage}_title`]}</div>
          <div className="projeto-post-text">{ReactHtmlParser(projeto[`${selectedLanguage}_content`])}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoGuidista;
