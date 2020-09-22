import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './AssociacaoFront.css';
import ReactHtmlParser from "react-html-parser";

function SeccoesAssociacao(props) {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        if (i18n.language !== selectedLanguage) {
            setSelectedLanguage(i18n.language);
        }
    }, [i18n.language, selectedLanguage]);

    return (

        <span className={props.index % 2 ? "fotosHistoriaReverse" : "fotosHistoria"}>
            {
                selectedLanguage === 'pt' ?
                    <div className="fotosHistoria-texto">{ReactHtmlParser(props.section_text_pt)}</div>
                    :
                    <div className="fotosHistoria-texto">{ReactHtmlParser(props.section_text_en)}</div>
            }
            <div className='imageDiv'>
                <img src={props.thumbnail} alt={'Associação Guias de Portugal'} />
            </div>
        </span>

    )
}


export default SeccoesAssociacao