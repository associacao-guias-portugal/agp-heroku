import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";
import "./HistoriaGuidismo.css";
import TimelineHistoria from "./TimelineHistoria";
import TimelineHistoriaLady from "./TimelineHistoriaLady";

const HistoriaGuidismo = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [historiaGuidismo, setHistoriaGuidismo] = useState([]);

  useEffect(() => {
    document.title = "Associação Guias de Portugal - História do Guidismo"
    window.scrollTo(0, 0);

    axios.get("/historia-guidismo").then((res) => {
      const resultsHistoriaGuidismo = res.data[0];
      setHistoriaGuidismo(resultsHistoriaGuidismo);
    });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="HistoriaGuidismo">
      <div className="HistoriaGuidismo-banner" style={{ backgroundImage: `url(${historiaGuidismo.image})` }}/>
      <div className="HistoriaGuidismo1">
        <p className="app-main-title ComoTudoComecou">
        {ReactHtmlParser(historiaGuidismo[`${selectedLanguage}_title_text1`])}
        </p>
        <p className="app-main-text MovimentoGuidista">
        {ReactHtmlParser(historiaGuidismo[`${selectedLanguage}_text_text1`])}
        </p>
        <div className="HistoriaFundadores">
          <p className="app-second-title Fundadores">
          {ReactHtmlParser(historiaGuidismo[`${selectedLanguage}_timeline_title`])}
          </p>
        </div>
        <div className="Timeline">
          <div className="TimelineBP">
            <TimelineHistoria />
          </div>
          <div className="TimelineLady">
            <TimelineHistoriaLady />
          </div>
        </div>
        <div className="GuiasPorque">
          <p className="app-second-title GuiasPorqueTitle">
          {ReactHtmlParser(historiaGuidismo[`${selectedLanguage}_title_text2`])}
          </p>
          <div className="GuiasPorqueTextDiv">
            <p className="app-main-text GuiasPorqueText">
            {ReactHtmlParser(historiaGuidismo[`${selectedLanguage}_text_text2`])}
            </p>
          </div>
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

export default HistoriaGuidismo;
