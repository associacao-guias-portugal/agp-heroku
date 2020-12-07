import React, { useEffect, useState } from "react";
import './AssociacaoMundial.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser";

const AssociacaoMundial2 = (props) => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, set_selectedLanguage] = useState(i18n.language);
    const [worldAssociationData, set_worldAssociationData] = useState([]);

    const getData = () => {

        axios
            .get('/worldAssociation')
            .then((result) => {
                return result.data
            })
            .then((dataresult) => {
                set_worldAssociationData(dataresult[0])
            })
    }

    useEffect(() => {
        document.title = "Associação Guias de Portugal - Associação Mundial"
        window.scrollTo(0, 0)
        getData()
    }, [])

    useEffect(() => {
        set_selectedLanguage !== selectedLanguage &&
            set_selectedLanguage(i18n.language)
    }, [i18n.language, selectedLanguage])


    return (
        <div>
            <div className="world-girls-banner">
                <img src={worldAssociationData.banner} alt="picture WAGGGS" />
            </div>
            <div className="AssociacaoMundial">
                <div className="world-association">
                    <img className="world-logo" src={worldAssociationData.logoWAGGGS} alt='World Association Logo' />
                    <p className='app-main-text world-text'>
                        {ReactHtmlParser(worldAssociationData[`section1_${selectedLanguage}`])}
                    </p>
                </div>
                <div className="app-blue-banner-title voice-sentence">
                    {ReactHtmlParser(worldAssociationData[`section2_${selectedLanguage}`])}
                </div>
                <div className="world-objectives">
                    <div className="objectives-side">
                        <div className="objectives-title">
                            {worldAssociationData[`section3_column1_title_${selectedLanguage}`]}
                        </div>
                        <ul className="objectives-text">
                            {
                                worldAssociationData[`section3_column1_text1_${selectedLanguage}`] !== '' &&
                                <li>
                                    {worldAssociationData[`section3_column1_text1_${selectedLanguage}`]}
                                </li>
                            }
                            {
                                worldAssociationData[`section3_column1_text2_${selectedLanguage}`] !== '' &&
                                <li>
                                    {worldAssociationData[`section3_column1_text2_${selectedLanguage}`]}
                                </li>
                            }
                            {
                                worldAssociationData[`section3_column1_text3_${selectedLanguage}`] !== '' &&
                                <li>
                                    {worldAssociationData[`section3_column1_text3_${selectedLanguage}`]}
                                </li>
                            }
                            {
                                worldAssociationData[`section3_column1_text4_${selectedLanguage}`] !== '' &&
                                <li>
                                    {worldAssociationData[`section3_column1_text4_${selectedLanguage}`]}
                                </li>
                            }
                            {
                                worldAssociationData[`section3_column1_text5_${selectedLanguage}`] !== '' &&

                                <li>
                                    {worldAssociationData[`section3_column1_text5_${selectedLanguage}`]}
                                </li>

                            }
                        </ul>
                    </div>
                    <div className="objectives-side">
                        <div className="objectives-title">
                            {worldAssociationData[`section3_column2_title_${selectedLanguage}`]}
                        </div>
                        <ul className="objectives-text">
                            {
                                worldAssociationData[`section3_column2_text1_${selectedLanguage}`] !== '' &&
                                <li>{worldAssociationData[`section3_column2_text1_${selectedLanguage}`]}</li>
                            }
                            {
                                worldAssociationData[`section3_column2_text2_${selectedLanguage}`] !== '' &&
                                <li>{worldAssociationData[`section3_column2_text2_${selectedLanguage}`]}</li>
                            }
                            {
                                worldAssociationData[`section3_column2_text3_${selectedLanguage}`] !== '' &&
                                <li>{worldAssociationData[`section3_column2_text3_${selectedLanguage}`]}</li>
                            }
                            {
                                worldAssociationData[`section3_column2_text4_${selectedLanguage}`] !== '' &&
                                <li>{worldAssociationData[`section3_column2_text4_${selectedLanguage}`]}</li>
                            }
                            {
                                worldAssociationData[`section3_column2_text5_${selectedLanguage}`] !== '' &&
                                <li>{worldAssociationData[`section3_column2_text5_${selectedLanguage}`]}</li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="centers">
                    <div className="centers-side">
                        <div className="centers-left">
                            <div className="app-main-title centers-title">
                                {ReactHtmlParser(worldAssociationData[`section4_title_${selectedLanguage}`])}
                            </div>
                            <div className="centers-text">
                                {ReactHtmlParser(worldAssociationData[`section4_${selectedLanguage}`])}
                            </div>
                        </div>
                    </div>
                    <div className="centers-side">
                        <img className="world-centers" src={worldAssociationData.section4_thumbnail} alt="World Thought" />
                    </div>
                </div>
                <div className="thought-section">
                    <div className="left-section">
                        <div className="clover-section">
                            <img className="clover" src={worldAssociationData.section5_column1_thumbnail} alt="Guias de Portugal World Thought" />
                        </div>
                        <div>
                            <div className="penny-title">
                                {worldAssociationData[`section5_column1_title_${selectedLanguage}`]}
                            </div>
                            <div className="penny-text">
                                <p>{ReactHtmlParser(worldAssociationData[`section5_column1_${selectedLanguage}`])}</p>
                            </div>
                        </div>

                    </div>
                    <div className="right-section">
                        <div className="piggy-section">
                            <img className="piggy" src={worldAssociationData.section5_column2_thumbnail} alt="Guias de Portugal World Penny" />
                        </div>
                        <div>
                            <div className="penny-title">
                                <p>{worldAssociationData[`section5_column2_title_${selectedLanguage}`]}</p>
                            </div>
                            <div className="penny-text">
                                <p>{ReactHtmlParser(worldAssociationData[`section5_column2_${selectedLanguage}`])}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="associacao-button-section">
                    <Link to="/contactos/formulario">
                        <button type="submit" className="ser-guia-button associacao-button">
                            {t('buttons.queresSerGuia')}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AssociacaoMundial2

