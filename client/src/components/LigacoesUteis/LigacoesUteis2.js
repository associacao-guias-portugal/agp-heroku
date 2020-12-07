import React, { useEffect, useState } from "react";
import "./LigacoesUteis.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const LigacoesUteis2 = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
  const [usefulLinksData, set_usefulLinksData] = useState([]);
  const [usefulLinksDataHeader, set_usefulLinksDataHeader] = useState([]);


  const getData = () => {
    axios.get("/ligacoes-uteis")
      .then(result => {
        set_usefulLinksData(result.data);
      });
  };

  const getDataHeader = () => {
    axios.get("ligacoes-uteis/header/header")
      .then(result => {
        set_usefulLinksDataHeader(result.data[0])
      })
  };

  useEffect(() => {
    document.title = "Associação Guias de Portugal - Ligações Úteis";
    window.scrollTo(0, 0);
    getData();
    getDataHeader();
  }, []);

  useEffect(() => {
    set_selectedLanguage !== selectedLanguage &&
      set_selectedLanguage(i18n.language);
  }, [i18n.language, selectedLanguage]);

  if (selectedLanguage === 'en') {
    usefulLinksData.sort((a, b) => a.en_text.localeCompare(b.en_text));
  } else {
    usefulLinksData.sort((a, b) => a.pt_text.localeCompare(b.pt_text));
  }

  return (
    <div className="LigacoesUteis">
      <div className="ligacoes-title">{t("ligacoesUteis.title")}</div>

      <div className="ligacoes-text">{usefulLinksDataHeader[`header_${selectedLanguage}`]}</div>

      <div className="ligacoes-list">
        <ul className="ligacoes-items">
          {usefulLinksData.map((link, index) => (
            <li key={index}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link[`${selectedLanguage}_text`]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LigacoesUteis2;
