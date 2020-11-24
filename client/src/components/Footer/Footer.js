import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import facebookImage from "../../assets/images/SocialMedia/facebook_white_round.png";
import instagramImage from "../../assets/images/SocialMedia/instagram_white_round.png";
import linkedinImage from "../../assets/images/SocialMedia/linkedin_white_round.png";
import ReactHtmlParser from "react-html-parser";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [resultsContato, setResultsContato] = useState([]);
  const [resultsFiles, setResultsFiles] = useState([]);
  const [morada, setMorada] = useState([]);
  const date = new Date();

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  useEffect(() => {
    axios.get("/files").then((res) => {
      const resultsFiles = res.data[0];
      setResultsFiles(resultsFiles);
    });
    axios.get("/contato").then((res) => {
      const resultsContatos = res.data[0];
      setResultsContato(resultsContatos);
      const moradaDivs = resultsContatos.pt_endereco.split(',');
      setMorada(moradaDivs);
    });
  }, []);

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="col-sm-3">
          <h5>{t("footer.sedeNacional")}</h5>
          <ul>
              <li>
                <a
                  className="address_footer"
                  href={resultsContato.google_maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {morada.map((item, index) => {
                    if (index === morada.length - 1) {
                      return <div key={index}>{item}</div>
                    } else {
                      return <div key={index}>{item},</div>
                    }
                  })}
                </a>
              </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>{t("footer.contactos")}</h5>
          <ul>
            <li>
              <span className="footer-contactos">
                {resultsContato.telefone}
              </span>
            </li>
            <li>
              <span className="footer-contactos">
                <a href="mailto:geral@guiasdeportugal.org">{resultsContato.email}</a>
              </span>
            </li>
          </ul>
          <div className="footer-social">
            <a
              href={resultsContato.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebookImage}
                className="footer-social-icon"
                alt="Facebook Link"
              />
            </a>
            <a
              href={resultsContato.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagramImage}
                className="footer-social-icon"
                alt="Instagram Link"
              />
            </a>
            <a
              href={resultsContato.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinImage}
                className="footer-social-icon"
                alt="Linkedin Link"
              />
            </a>
          </div>
        </div>
        <div className="col-sm-3">
          <h5>
            {t("footer.associaçãoMundial")} <br />
            {t("footer.WAGGGS")}
          </h5>
          <ul>
            <li>
              <a href="https://www.wagggs.org">https://www.wagggs.org/</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-3">
          <h5>{t("footer.legal")}</h5>
          <ul>
            <li>
              <a
                href={resultsFiles.politica_de_privacidade}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.legal3")}
              </a>
            </li>
            <li>
              <a
                href={resultsFiles.politica_de_dados}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.dados")}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© {date.getFullYear()} Copyright Associação Guias de Portugal</p>
      </div>
    </footer>
  );
};
export default Footer;
