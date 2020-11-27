import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  FacebookMessengerShareButton, FacebookMessengerIcon, TwitterShareButton, TwitterIcon,
  PinterestShareButton, PinterestIcon, WhatsappShareButton, WhatsappIcon, EmailShareButton,
  EmailIcon, FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon,
} from 'react-share';
import './MediaShare.css';

const MediaShare = (props) => {
  const { t } = useTranslation();
  const { currentPath } = props;
  const pageURL = window.location.href;
  const mainText = 'Veja esta página da AGP:';
  let pageTitle = 'Associação Guias de Portugal';
  let getTitle = JSON.parse(localStorage.getItem('title'));
  let emailSubject = 'Associação Guias de Portugal';
  // const facebookAppId = '12345';

  // Definição dos titulos de cada página na partilha
  if (window.location.hash.includes("associacao-mundial")) {
    pageTitle = "Associação Mundial";
  } else if (window.location.hash.includes("associacao")) {
    pageTitle = "A Associação"
  } else if (window.location.hash.includes("historia-guidismo")) {
    pageTitle = "História do Guidismo"
  } else if (window.location.hash.includes("metodo-guidista")) {
    pageTitle = `${getTitle}`;
  } else if (window.location.hash.includes("avezinha")) {
    pageTitle = "Ramo Avezinha"
  } else if (window.location.hash.includes("aventura")) {
    pageTitle = "Ramo Aventura"
  } else if (window.location.hash.includes("caravela")) {
    pageTitle = "Ramo Caravela"
  } else if (window.location.hash.includes("moinho")) {
    pageTitle = "Ramo Moinho"
  } else if (window.location.hash.includes("dirigente")) {
    pageTitle = "Dirigente"
  } else if (window.location.hash.includes("palavra-pais")) {
    pageTitle = "Palavra aos Pais"
  } else if (window.location.hash.includes("noticias")) {
    pageTitle = `${getTitle}`;
  } else if (window.location.hash.includes("jornal-trevo")) {
    pageTitle = `Jornal 'O Trevo'`
  } else if (window.location.hash.includes("ligacoes-uteis")) {
    pageTitle = 'Ligações Úteis'
  } else if (window.location.hash.includes("fardas")) {
    pageTitle = 'Loja - Fardas'
  } else if (window.location.hash.includes("diversos")) {
    pageTitle = 'Loja - Diversos'
  } else if (window.location.hash.includes("livros")) {
    pageTitle = 'Loja - Livros'
  } else if (window.location.hash.includes("sede")) {
    pageTitle = 'Contactos'
  } else if (window.location.hash.includes("formulario")) {
    pageTitle = 'Queres ser Guia?'
  } else {
    pageTitle = 'Associação Guias de Portugal'
  }

  console.log(pageTitle);
  if (pageTitle !== "Associação Guias de Portugal") {
    emailSubject = `Associação Guias de Portugal - ${pageTitle}`;
  }

  return (
    <div className="MediaShare">
      <div className="share-text">
        { currentPath ? `${t('media.partilhaHomepageLabel')}` : `${t('media.partilhaPaginaLabel')}`}
      </div>
      <div>
        <FacebookShareButton
          className="share-button"
          url={pageURL}
          title={pageTitle}
        >
          <FacebookIcon className="share-icon" round size={30} />
        </FacebookShareButton>
        <TwitterShareButton
          className="share-button"
          url={pageURL}
          title={pageTitle}
        >
          <TwitterIcon className="share-icon" round size={30} />
        </TwitterShareButton>
        <LinkedinShareButton
          className="share-button"
          url={pageURL}
          title={pageTitle}
        >
          <LinkedinIcon className="share-icon" round size={28} />
        </LinkedinShareButton>
        <PinterestShareButton
          className="share-button"
          url={pageURL}
          media={pageURL}
          title={pageTitle}
        >
          <PinterestIcon className="share-icon" round size={30} />
        </PinterestShareButton>
        <WhatsappShareButton
          className="share-button"
          url={pageURL}
          title={pageTitle}
        >
          <WhatsappIcon className="share-icon" round size={30} />
        </WhatsappShareButton>
        <FacebookMessengerShareButton
          className="share-button"
          url={pageURL}
          title={pageTitle}
          // appId={facebookAppId}
        >
          <FacebookMessengerIcon className="share-icon" round size={30} />
        </FacebookMessengerShareButton>
        <EmailShareButton
          className="share-button"
          url={pageURL}
          subject={emailSubject}
          body={mainText}
        >
          <EmailIcon className="share-icon" round size={30} />
        </EmailShareButton>
      </div>
    </div>
  );
};

// MediaShare.propTypes = {
//   currentPath: PropTypes.string.isRequired,
// };

export default MediaShare;
