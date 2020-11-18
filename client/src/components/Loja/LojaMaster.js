import React, { useEffect, useState } from 'react';
import Livros from './Livros';
import './LojaMaster.css';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import ReactHtmlParser from "react-html-parser";

const LojaMaster = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const [items, setItems] = useState([]);
  const [itemCategory, setItemCategory] = useState('');
  const [header_pt, set_header_pt] = useState([]);
  const [header_en, set_header_en] = useState([]);


  const getData = (category) => {
    axios.get(`/store/${category}`).then((res) => {
      setItems(res.data);
      setItemCategory(category);
    });
  };

  const getDataHeader = () => {
    axios
      .get("/store/header/header")
      .then((res) => {
        set_header_pt(res.data[0].header_pt);
        set_header_en(res.data[0].header_en)
      })
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const match = props.match;
    let getCategory = match.params.itemCategory;
    getData(getCategory);
    getDataHeader()
  }, []);

  useEffect(() => {
    const match = props.match;
    const getCategory = match.params.itemCategory;
    const title = getCategory.charAt(0).toUpperCase() + getCategory.slice(1);
    document.title = `Loja - ${title}`;
    if (getCategory !== itemCategory) {
      getData(getCategory);
    }
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  });

  return (
    <div className="Body">
      <div className="Body-Loja">
        <h2 className="app-second-title tituloLoja">{itemCategory}</h2>
        {/* <p className="app-main-text">{t('loja.texto1')}</p>
        <p className="app-main-text">
          {t('loja.texto2')}
          <Link to="/contactos/sede" style={{ textDecoration: "none" }}>
            {t('loja.texto3')}
          </Link>
        </p> */}
        {
          selectedLanguage === 'pt' ?
            <p>{ReactHtmlParser(header_pt)}</p>
            :
            <p>{ReactHtmlParser(header_en)}</p>
        }

        <div className="loja">
          {items.map((item) => {
            return item.publish === 1 && <Livros key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LojaMaster;
