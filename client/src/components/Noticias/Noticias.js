import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import NoticiasCard from './NoticiasCard';
import './Noticias.css';

const Noticias = () => {
  const { t } = useTranslation();
  const [noticiasData, setNoticiasData] = useState([]);

  localStorage.setItem('title', JSON.stringify(`Notícias`));

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
    document.title = "Associação Guias de Portugal - Notícias";
    window.scrollTo(0, 0);
    getData();
  }, []);

  const getTitle = (id) => {
    const noticia = noticiasData.filter(noticia => noticia.id === id);
    localStorage.setItem('title', JSON.stringify(`Notícias - ${noticia[0].pt_title}`));
  }

  return (
    <div className="Noticias">
      <p className="app-second-title NoticiasTitle">{t('noticias.noticias')}</p>
      <div className="MapNoticias">
        {noticiasData.map((noticia) => (
          noticia.publish === 1
            && <NoticiasCard key={noticia.id} noticia={noticia} setTitle={()=> getTitle(noticia.id)} />
        ))}
      </div>
    </div>
  );
};

export default Noticias;
