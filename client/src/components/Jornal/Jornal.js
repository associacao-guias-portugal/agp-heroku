import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import JornalCapa from './JornalCapa';
import { useTranslation } from 'react-i18next';
import './Jornal.css';

const Jornal = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
  const [edicoes, setEdicoes] = useState([]);
  const [journalDataHeader, set_journalDataHeader] = useState([]);

  const fetchJournal = () => {
    axios.get('/journal', {
    })
      .then((res) => {
        setEdicoes(res.data);
      });
  };

  const getDataHeader = () => {
    axios.get('/journal/headers/headers', {
    })
      .then((res) => {
        set_journalDataHeader(res.data[0]);
      });
  }

  useEffect(() => {
    document.title = "Associação Guias de Portugal - Jornal";
    window.scrollTo(0, 0);
    fetchJournal();
    getDataHeader();
  }, []);

  useEffect(() => {
    set_selectedLanguage !== selectedLanguage &&
      set_selectedLanguage(i18n.language);
  }, [i18n.language, selectedLanguage]);


  return (
    <div className="Jornal">
      <h2 className="app-second-title oTrevo">{ReactHtmlParser(t('jornal.TituloHomepage'))}</h2>
      {selectedLanguage === 'pt' ?
        <div>
          <p className="app-main-text textoIntroducao">
            {journalDataHeader.header1_pt}
          </p>
          <p className="app-main-text  textoIntroducao">
            {journalDataHeader.header2_pt}
          </p>
        </div>
        :
        <div>
          <p className="app-main-text textoIntroducao">
            {journalDataHeader.header1_en}
          </p>
          <p className="app-main-text  textoIntroducao">
            {journalDataHeader.header2_en}
          </p>
        </div>
      }
      <div className="edicoesJornal">
        {edicoes.map((edicao, index) => (
          <>
            {" "}
            {edicao.publish === 1 && (
              <JornalCapa
                titulo_pt={edicao.pt_title}
                titulo_en={edicao.en_title}
                ano={edicao.year}
                edicao={edicao.edition}
                src={edicao.thumbnail}
                pdf_pt={edicao.pdf_link}
                pdf_en={edicao.pdf_lin_en}
                temas1_pt={edicao.pt_intro_text_1}
                temas2_pt={edicao.pt_intro_text_2}
                temas3_pt={edicao.pt_intro_text_3}
                temas4_pt={edicao.pt_intro_text_4}
                temas5_pt={edicao.pt_intro_text_5}
                temas1_en={edicao.en_intro_text_1}
                temas2_en={edicao.en_intro_text_2}
                temas3_en={edicao.en_intro_text_3}
                temas4_en={edicao.en_intro_text_4}
                temas5_en={edicao.en_intro_text_5}
                index={index}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Jornal;
