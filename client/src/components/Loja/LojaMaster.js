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
  const [titlePT, setTitlePT] = useState('');
  const [titleEN, setTitleEN] = useState('');

  const getData = (category) => {
    axios.get(`/store/${category}`).then((res) => {
      setItems(res.data);
      setItemCategory(category);
      setTitlePT(res.data[0].category_pt);
      setTitleEN(res.data[0].category_en);
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
    document.title = `Associação Guias de Portugal - Loja`;
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
        <h2 className="app-second-title tituloLoja">
          {
            selectedLanguage === 'pt' ?
              <p>{ReactHtmlParser(titlePT)}</p>
              :
              <p>{ReactHtmlParser(titleEN)}</p>
          }
        </h2>
        <p className="app-main-text">
          {
            selectedLanguage === 'pt' ?
              <p>{ReactHtmlParser(header_pt)}</p>
              :
              <p>{ReactHtmlParser(header_en)}</p>
          }
        </p>
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
