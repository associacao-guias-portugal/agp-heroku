import React from 'react';
import './LanguageSelector.css';
import { useTranslation } from 'react-i18next';
import flagPT from '../../assets/images/LanguageTranslator/pt_flag.png';
import flagEN from '../../assets/images/LanguageTranslator/en_flag.png';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-selector" onChange={changeLanguage}>
      <input type="radio" value="pt" name="language" defaultChecked />
      <img src={flagPT} className="lang-icon" alt="Bandeira Portuguesa" />
      <input type="radio" value="en" name="language" />
      <img src={flagEN} className="lang-icon" alt="Bandeira Portuguesa" />
    </div>
  );
};

export default LanguageSelector;
