import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Contactos.css';
import SedeNacional from './SedeNacional';
import QueresSerGuia from './QueresSerGuia';

const Contactos = (props) => {
  const [showSedeNacional, setShowSedeNacional] = useState(false);
  const [resultsFile, setResultsFile] = useState(false);
  const [resultsContato, setResultsContato] = useState(false);
  const [morada, setMorada] = useState([]);
  
  const { match } = props;
  const mode = match.params.modo;

  useEffect(() => {
    document.title = "Associação Guias de Portugal - Contactos";
    window.scrollTo(0, 0);
    if (mode !== 'sede') {
      setShowSedeNacional(false);
    } else {
      setShowSedeNacional(true);
    }
  }, [showSedeNacional, mode]);

  useEffect(() => {
    axios
      .get('/files')
      .then((res) => {
        const file = res.data[0];
        setResultsFile(file);
      });
    axios
      .get('/contato')
      .then((res) => {
        const contato = res.data[0];
        setResultsContato(contato);
        setMorada(contato.pt_endereco.split(","));
      });
  }, []);

  return (
    <div className="Contactos">
      {showSedeNacional
        ? <SedeNacional resultsContato={resultsContato} morada={morada}/>
        : '' }
      <QueresSerGuia
        politicaDeDados={resultsFile.politica_de_dados}
        email={resultsContato.email}
      />
    </div>
  );
};

Contactos.propTypes = {
  match: PropTypes.string.isRequired,
};

export default Contactos;
