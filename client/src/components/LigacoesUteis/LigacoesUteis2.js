import React, { useEffect, useState } from "react";
import "./LigacoesUteis.css";
import axios from "axios";
import { useTranslation } from "react-i18next";

const LigacoesUteis2 = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
  const [usefulLinksData_pt, set_usefulLinksData_pt] = useState([]);
  const [usefulLinksData_en, set_usefulLinksData_en] = useState([]);
  const [usefulLinksDataHeader, set_usefulLinksDataHeader] = useState([]);


  const getData = () => {
    axios
      .get("/ligacoes-uteis")
      .then((result) => {
        return result.data;
      })

      .then((dataresult) => {
        console.log(dataresult)
        let ptOrdered = dataresult.sort((a, b) => a.pt_text.localeCompare(b.pt_text))
        let enOrdered = dataresult.sort((a, b) => a.en_text.localeCompare(b.en_text))
        console.log(ptOrdered)
        console.log(enOrdered)
        set_usefulLinksData_pt(ptOrdered);
        set_usefulLinksData_en(enOrdered);
      });
  };

  const getDataHeader = () => {
    axios
      .get("ligacoes-uteis/header/header")
      .then((result => {
        return result.data[0]
      }))
      .then((dataresult) => {
        set_usefulLinksDataHeader(dataresult)
      })
      console.log(usefulLinksData_pt)

  }

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

  return (
    <div className="LigacoesUteis">
      <div className="ligacoes-title">{t("ligacoesUteis.title")}</div>
      {
        selectedLanguage === 'pt' ?
          <div className="ligacoes-text">{usefulLinksDataHeader.header_pt}</div>
          :
          <div className="ligacoes-text">{usefulLinksDataHeader.header_en}</div>
      }
      <div className="ligacoes-list">
        <ul className='ligacoes-uteis'>
          {
            selectedLanguage === 'pt' ?
              usefulLinksData_pt.map((ptOrder) => {
                return (
                  <li><a href={ptOrder.link} target='_blank' rel='noopener noreferrer'></a></li>
                )
              })
              :
              usefulLinksData_en.map((enOrder) => {
                return (
                  <li><a href={enOrder.link} target='_blank' rel='noopener noreferrer'></a></li>
                )
              })
          }

        </ul>
      </div>
    </div>
  );
};

export default LigacoesUteis2;
