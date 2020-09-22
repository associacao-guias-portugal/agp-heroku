import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './RamosDirigente.css';

function RamosDirigente(props) {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [branchName, setBranchName] = useState('');
  const [buttonBorder, setButtonBorder] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [branchBanner, setBranchBanner] = useState('');
  const [ptContent, setPTContent] = useState('');
  const [enContent, setENContent] = useState('');

  const { match } = props;
  const getBranch = match.params.tipo;
  let getBranchCapitalize = getBranch.split('-').map((word) => word.substring(0, 1).toUpperCase() + word.substring(1)).join(' ');
  // Define page and colors to show
  const defineRamo = () => {
    if (getBranch !== branchName) {
      window.scrollTo(0, 0);
    }
    setBranchName(getBranch);
    if (getBranch === 'ramo-avezinha') {
      setButtonBorder('blue-border');
    } else {
      setButtonBorder('white-border');
    }
  };

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }

    defineRamo();

    getBranchCapitalize = getBranchCapitalize.split(' ').join('-');

    axios.get(`/ramos/${getBranchCapitalize}`)
      .then((res) => {
        const results = res.data[0];

        setImage1(results.image_1);
        setImage2(results.image_2);
        setImage3(results.image_3);
        setBranchBanner(results.pt_banner);
        setPTContent(results.pt_content);
        setENContent(results.en_content);

        if (selectedLanguage === 'en') {
          setBranchBanner(results.en_banner);
        }
      });
  });

  return (
    <div className="RamosDirigente">
      <div className="ramos-photos-banner">
        <div className="ramos-image">
          <img src={image1} alt={branchName} />
        </div>
        <div className="ramos-image ramos-image-margin">
          <img src={image2} alt={branchName} />
        </div>
        <div className="ramos-image">
          <img src={image3} alt={branchName} />
        </div>
      </div>
      <div className="ramos-sentence">
        <img src={branchBanner} className="banner-sentence" alt="Frase do Ramo" />
      </div>
      <div className={`ramos-section ${branchName}`}>
        { selectedLanguage === 'pt'
          ? (<div className="ramos-text">{ReactHtmlParser(ptContent)}</div>)
          : (<div className="ramos-text">{ReactHtmlParser(enContent)}</div>) }
        <div className="ramos-buttons-section">
          { branchName !== 'dirigente'
            ? (
              <div>
                <Link to="/pedagogia/palavra-pais"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>{t('buttons.palavraAosPais')}</button></Link>
              </div>
            ) : '' }
          <div>
            <Link to="/contactos/formulário"><button type="submit" className={`ramos-button ${branchName} ${buttonBorder}`}>{t('buttons.queresSerGuia')}</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

RamosDirigente.propTypes = {
  match: PropTypes.string.isRequired,
};

export default RamosDirigente;
