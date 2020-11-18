import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import JornalCapa from './JornalCapa';
import { useTranslation } from 'react-i18next';
import './Jornal.css';

const Jornal = (props) => {
  const { t } = useTranslation();
  const [edicoes, setEdicoes] = useState([]);

  const fetchJournal = () => {
    axios.get('/journal', {
    })
      .then((res) => {
        setEdicoes(res.data);
      });
  };

  useEffect(() => {
    document.title = "Jornal";
    window.scrollTo(0, 0);
    fetchJournal();
  }, []);

  return (
    <div className="Jornal">
      <h2 className="app-second-title oTrevo">{ReactHtmlParser(t('jornal.TituloHomepage'))}</h2>
      <p className="app-main-text textoIntroducao">
        {ReactHtmlParser(t('jornal.P1Introducao'))}
      </p>
      <p className="app-main-text  textoIntroducao">
        {ReactHtmlParser(t('jornal.P2Introducao'))}
      </p>
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
