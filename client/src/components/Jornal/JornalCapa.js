import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Jornal.css'
import New from '../../assets/images/Outros/new.png';
import downLoad from '../../assets/images/Outros/download.png';


const JornalCapa = (props) => {

    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    useEffect(() => {
        if (i18n.language !== selectedLanguage) {
            setSelectedLanguage(i18n.language);
        }
    }, [i18n.language, selectedLanguage]);

    return (

        selectedLanguage === 'pt' ?
            <div className='cardJornal'>
                <h4 className='titulo'>{props.titulo_pt}</h4>
                <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}ª edição`}</h4>
                <div className='capaDownload'>
                    <img className='capa' alt={props.alt} src={props.src}/>
                    <a className='download' href={props.pdf_pt} target="_blank" download title={props.titulo_pt} rel="noopener noreferrer">
                        <img className='downloadImage' alt={'download Jornal O Trevo Guias de Portugal'}
                            src={props.index === 0 ? New : downLoad} />
                    </a>
                </div>
                <div className='temasBox'>
                    <p className='temas'>{props.temas1_pt && `-${props.temas1_pt}`}</p>
                    <p className='temas'>{props.temas2_pt && `-${props.temas2_pt}`}</p>
                    <p className='temas'>{props.temas3_pt && `-${props.temas3_pt}`}</p>
                    <p className='temas'>{props.temas4_pt && `-${props.temas4_pt}`}</p>
                    <p className='temas'>{props.temas5_pt && `-${props.temas5_pt}`}</p>
                </div>
            </div>
            :
            <div className='cardJornal'>
                <h4 className='titulo'>{props.titulo_en}</h4>
                {
                    props.edicao === 1 || props.edicao % 10 === 1 ?
                        <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}st edition`}</h4>
                        :
                        props.edicao === 2 || props.edicao % 10 === 2 ?
                            <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}nd edition`}</h4>
                            :
                            <h4 className='anoEdicao'>{`${props.ano} - ${props.edicao}th edition`}</h4>
                }

                <div className='capaDownload'>
                    <img className='capa' alt={props.alt} src={props.src} />
                    <a className='download' href={props.pdf_en} target="_blank" download title={props.titulo_en} rel="noopener noreferrer">
                        <img className='downloadImage' alt={'download Jornal O Trevo Guias de Portugal'}
                            src={props.index === 0 ? New : downLoad} />
                    </a>
                </div>

                <div className='temasBox'>
                    <p className='temas'>{props.temas1_en && `-${props.temas1_en}`}</p>
                    <p className='temas'>{props.temas2_en && `-${props.temas2_en}`}</p>
                    <p className='temas'>{props.temas3_en && `-${props.temas3_en}`}</p>
                    <p className='temas'>{props.temas4_en && `-${props.temas4_en}`}</p>
                    <p className='temas'>{props.temas5_en && `-${props.temas5_en}`}</p>
                </div>
            </div>

    )
}


export default JornalCapa;
