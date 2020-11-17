import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Search.css';

const Search = () => {
  const { t } = useTranslation();
  const search = JSON.parse(localStorage.getItem('searchBy'));
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSearchItem(search);
  }, [search, searchItem]);

  return (
    <div className="Search">
    
      <div className="search-title-section">
        <div className="search-main-title">{t('search.mainTitle')}</div>
        <div className="search-main-input">{search}</div>
      </div>

      <div class="gcse-search"></div>

      {/* <script async src="https://cse.google.com/cse.js?cx=830615148521d9b86" />
      <div class="gcse-searchresults-only" /> */}

    </div>
  );
};

export default Search;
