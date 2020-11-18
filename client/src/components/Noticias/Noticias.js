import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import NoticiasCard from './NoticiasCard';
import './Noticias.css';

const Noticias = () => {
  const { t } = useTranslation();
  const [noticiasData, setNoticiasData] = useState([]);

  const getData = () => {
    axios.get('/news/published')
      .then((response) => {
        return response.data;
      })
      .then((dataresult) => {
        setNoticiasData(dataresult);
      });
  };

  useEffect(() => {
    document.title = "Notícias";
    window.scrollTo(0, 0);
    getData();
  }, []);

  return (
    <div className="Noticias">
      <p className="app-second-title NoticiasTitle">{t('noticias.noticias')}</p>
      <div className="MapNoticias">
        {noticiasData.map((noticia) => (
          noticia.publish === 1
            && <NoticiasCard key={noticia.id} noticia={noticia} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
