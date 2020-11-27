import React, { useEffect, useState } from "react";
import SeccoesAssociacao from "./SeccoesAssociacao";
import "./AssociacaoFront.css";
import "../../App.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactHtmlParser from "react-html-parser";

const AssociacaoFront2 = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
  const [seccoes, set_seccoes] = useState([]);
  const [banner, set_banner] = useState([]);
  const [title_pt, set_title_pt] = useState([]);
  const [title_en, set_title_en] = useState([]);
  const [title_sections_pt, set_title_sections_pt] = useState([]);
  const [title_sections_en, set_title_sections_en] = useState([]);
  const [text1_pt, set_text1_pt] = useState([]);
  const [text1_en, set_text1_en] = useState([]);
  const [text2_pt, set_text2_pt] = useState([]);
  const [text2_en, set_text2_en] = useState([]);

  const fetchAssociationSections = () => {
    axios.get("/association").then((res) => {
      set_seccoes(res.data)
    });
  };

  const fetchAssociationHeader = () => {
    axios.get("/association/associationHeader").then((res) => {
      set_banner(res.data[0].banner);
      set_title_pt(res.data[0].title_pt);
      set_title_en(res.data[0].title_en);
      set_title_sections_pt(res.data[0].title_sections_pt);
      set_title_sections_en(res.data[0].title_sections_en);
      set_text1_pt(res.data[0].text1_pt);
      set_text1_en(res.data[0].text1_en);
      set_text2_pt(res.data[0].text2_pt);
      set_text2_en(res.data[0].text2_en);
    });
  };

  useEffect(() => {
    document.title = "Associação Guias de Portugal - A Associação";
    window.scrollTo(0, 0);
    fetchAssociationHeader();
    fetchAssociationSections();
  }, []);

  useEffect(() => {
    set_selectedLanguage !== selectedLanguage &&
      set_selectedLanguage(i18n.language);
  }, [i18n.language, selectedLanguage]);

  return (
    <div className="Body">
      <div className="fotoAssociacao">
        <img src={banner} alt="Guias de Portugal Associação" />
      </div>

      {selectedLanguage === "pt" ? (
        <div>
          <div className="associacao">
            <div className="app-main-title associacao-title">{title_pt}</div>
            <div className="app-main-text-links">{ReactHtmlParser(text1_pt)}</div>
          </div>
          <br />
          <div className="app-blue-banner-text guidismo">
            <p>{text2_pt}</p>
          </div>
          <h2 className="app-second-title historiaGuidismoH2">História do Guidismo em Portugal</h2>
        </div>
      ) : (
          <div>
            <div className="associacao">
              <div className="app-main-title associacao-title">{title_en}</div>
              <div className="app-main-text-links">{ReactHtmlParser(text1_en)}</div>
            </div>
            <br />
            <div className="guidismo">
              <p>{text2_en}</p>
            </div>
            <h2 className="app-second-title historiaGuidismoH2">Girls Guides History in Portugal</h2>
          </div>
        )}
      {seccoes.map((seccao, index) => {
        return (
          seccao.publish === 1 && (
            <SeccoesAssociacao
              index={index}
              position={seccao.position}
              section_text_pt={seccao.section_text_pt}
              section_text_en={seccao.section_text_en}
              thumbnail={seccao.section_thumbnail}
            />
          )
        );
      })}
      <div className="associacao-button-section">
        <Link to="/contactos/formulario">
          <button type="submit" className="ser-guia-button associacao-button">
            {t('buttons.queresSerGuia')}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AssociacaoFront2;
