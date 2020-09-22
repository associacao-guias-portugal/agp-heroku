import React, { useEffect, useState } from "react";
import "./LigacoesUteis.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const LigacoesUteis2 = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
  const [usefulLinksData, set_usefulLinksData] = useState([]);

  const getData = () => {
    axios
      .get("/ligacoes-uteis")
      .then((result) => {
        return result.data;
      })

      .then((dataresult) => {
        set_usefulLinksData(dataresult);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getData();
  }, []);

  useEffect(() => {
    set_selectedLanguage !== selectedLanguage &&
      set_selectedLanguage(i18n.language);
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="LigacoesUteis">
      <div className="ligacoes-title">{t("ligacoesUteis.title")}</div>
      <div className="ligacoes-text">{t("ligacoesUteis.intro")}</div>
      <div className="ligacoes-list">
        <ul className="ligacoes-items">
          {usefulLinksData.map((link) => (
            <li>
              {" "}
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {selectedLanguage === "pt" ? link.pt_text : link.en_text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LigacoesUteis2;
