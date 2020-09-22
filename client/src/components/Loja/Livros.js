import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LojaMaster.css';


function Livros(props) {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        i18n.language !== selectedLanguage &&
            setSelectedLanguage(i18n.language)
    })

    return (
        <div>
            <div class="artigosLoja">
                <img className="fotoArtigos"
                    alt={props.item[`${selectedLanguage}_description`]}
                    src={props.item['thumbnail']}
                />

                <div className="descricaoArtigos">
                    <p>{props.item[`${selectedLanguage}_description`]}<br />

                        <b>{props.item['price']}</b></p>
                </div>

                <div className="descricaoArtigos-mobile">
                    <p>{props.item[`${selectedLanguage}_description`]}<br />
                        <b>{props.item['price']}</b></p>
                </div>
            </div>
        </div>

    )
}

export default Livros;