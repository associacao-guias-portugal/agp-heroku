import React, { useState } from 'react';
import './QueresSerGuia.css';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ReactHtmlParser from 'react-html-parser';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import PropTypes from 'prop-types';
import megafone from '../../assets/images/Contactos/megafone.png';

const QueresSerGuia = ({ politicaDeDados, email }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, errors } = useForm();

  const [showEmailAlert, setShowEmailAlert] = useState(false);
  const [emailTypeAlert, setEmailTypeAlert] = useState('success');
  const [messageIcon, setMessageIcon] = useState(faCheck);

  const onSubmit = (data) => {
    axios.post('/email', data)
      .then((response) => {
        if (response.data.code !== 200) {
          setEmailTypeAlert('danger');
          setMessageIcon(faTimes);
        }
        setShowEmailAlert(true);
        window.setTimeout(() => setShowEmailAlert(false), 4000);
      });
  };

  return (
    <div className="QueresSerGuia">
      <div className="guia-text-section">
        <img src={megafone} className="guia-megafone" alt="Megafone" />
        <div className="app-main-title guia-title">{t('contactosForm.queresSerGuiaTexto')}</div>
      </div>
      <div className="guia-form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="guia-label">{t('contactosForm.idade')}</div>
          <input
            type="text"
            name="idade"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 1 })}
          />
          {errors.idade && <div className="form-error">{errors.idade.message}</div>}
          <div className="guia-label">{t('contactosForm.concelho')}</div>
          <input
            type="text"
            name="concelho"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 1 })}
          />
          {errors.concelho && <div className="form-error">{errors.concelho.message}</div>}
          <div className="guia-label">{t('contactosForm.freguesia')}</div>
          <input
            type="text"
            name="freguesia"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 1 })}
          />
          {errors.freguesia && <div className="form-error">{errors.freguesia.message}</div>}
          <div className="guia-label">{t('contactosForm.email')}</div>
          <input
            type="email"
            name="email"
            className="form-control"
            ref={register({
              required: `*${t('contactosForm.campoObrigatorio')}`,
              minLeght: 2,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: t('contactosForm.erroEmailInvalido'),
              },
            })}
          />
          {errors.email && <div className="form-error">{errors.email.message}</div>}
          <div className="guia-label">{t('contactosForm.telefone')}</div>
          <input
            type="text"
            name="telefone"
            className="form-control"
            ref={register({ required: `*${t('contactosForm.campoObrigatorio')}`, minLeght: 1 })}
          />
          {errors.telefone && <div className="form-error">{errors.telefone.message}</div>}
          <div className="recolha-dados-text">
            {ReactHtmlParser(t('contactosForm.recolhaDadosTexto'))}
            <span>
              {email}
              .
            </span>
            <p>
              {ReactHtmlParser(t('contactosForm.recolhaDadosTexto2'))}
              <a href={politicaDeDados} target="_blank" rel="noopener noreferrer">{t('contactosForm.politicaDadosPessoais')}</a>
            </p>
          </div>
          <div className="form-button-section">
            <button className="guia-form-button" type="submit">{t('contactosForm.botaoEnviar')}</button>
          </div>
          <div className="alert-section">
            <Alert className="form-alert" show={showEmailAlert} variant={emailTypeAlert}>
              <FontAwesomeIcon icon={messageIcon} className="message-icon" />
              { emailTypeAlert === 'success' ? t('contactosForm.envioSucesso') : t('contactosForm.envioErro') }
            </Alert>
          </div>
        </form>
      </div>
    </div>
  );
};

QueresSerGuia.propTypes = {
  politicaDeDados: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default QueresSerGuia;
