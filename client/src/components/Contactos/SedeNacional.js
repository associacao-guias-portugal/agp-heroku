import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './SedeNacional.css';
import sedeIcon from '../../assets/images/Contactos/casa1.png';
import arrobaIcon from '../../assets/images/Contactos/arroba1.png';
import relogioIcon from '../../assets/images/Contactos/relogio1.png';

const SedeNacional = ({ resultsContato, morada }) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="SedeNacional">
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={sedeIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">
            {t('contactos.sedeNacionalTitulo')}
          </div>
          <div className="contactos-text">
            <div className="sede-margin">
              {/* <div className="sede-text-bold-address">{resultsContato[`${selectedLanguage}_endereco`]}</div> */}
              {morada.map((item,index) => {
                if (index === morada.length - 1) {
                  return <div className="sede-text-bold-address" key={index}>{item}</div>
                } else {
                  return <div className="sede-text-bold-address" key={index}>{item},</div>
                }
              })}
            </div>
            <div className="sede-text-bold-address">{resultsContato.telefone}</div>
            <div>
              <u><a href="mailto:geral@guiasdeportugal.org">{resultsContato.email}</a></u>
            </div>
          </div>
        </div>
      </div>
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={relogioIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">{t('contactos.horariosTitulo')}</div>
          <div className="contactos-text">
            <div className="sede-title">
              {t('contactos.secretariadoTitulo')}
            </div>
            <div className="sede-margin">
              {resultsContato[`${selectedLanguage}_secretariado`]}
            </div>
            <div className="sede-title">{t('contactos.lojaTitulo')}</div>
            <div className="sede-margin">{resultsContato[`${selectedLanguage}_deposito`]}</div>
          </div>
        </div>
      </div>
      <div className="sede-section">
        <div className="sede-icon">
          <img className="contactos-icon" src={arrobaIcon} alt="Sede Icon" />
        </div>
        <div className="sede-text">
          <div className="contactos-title">
            {t('contactos.outrosContactosTitulo')}
          </div>
          <div className="contactos-text">
            <div className="sede-title">{t('contactos.presidenteTitulo')}</div>
            <div className="sede-margin">{resultsContato.presidente}</div>
            <div className="sede-title">
              {t('contactos.internationalTitulo')}
            </div>
            <div className="sede-margin">
              {resultsContato.internacional}
            </div>
            <div className="sede-title">{t('contactos.publicacoesTitulo')}</div>
            <div className="sede-margin">{resultsContato.publicacoes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

SedeNacional.propTypes = {
  resultsContato: PropTypes.string.isRequired,
};

export default SedeNacional;
