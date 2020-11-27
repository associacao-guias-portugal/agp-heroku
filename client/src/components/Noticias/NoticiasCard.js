import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Noticias.css';
import { Link } from 'react-router-dom';

const NoticiasCard = (props) => {
  const { noticia, setTitle } = props;
  const link = `/publicações/noticias/${noticia.id}`;

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  const getTitle = () => {
    setTitle();
  }

  return (
    <div className="CardsNoticias">
      <Card className="CardNoticias" style={{ width: '325px' }}>
        <Card.Title className="TitleCardNoticias">
          {noticia[`${selectedLanguage}_title`]}
        </Card.Title>
        <Card.Img
          className="ImgCardNoticias"
          variant="top"
          src={noticia.thumbnail}
        />
        <Card.Text className="DataCardNoticias">
          {noticia[`${selectedLanguage}_date`]}
        </Card.Text>
        <Card.Text className="TextCardNoticias">
          {noticia[`${selectedLanguage}_intro_text`]}
        </Card.Text>
        <Link to={link}>
          <Button className="ButtonCardNoticias" variant="primary" onClick={getTitle}>
            {t('noticiasCard.lermais')}
          </Button>
        </Link>
      </Card>
    </div>
  );
};

NoticiasCard.propTypes = {
  noticia: PropTypes.string.isRequired,
};

export default NoticiasCard;
