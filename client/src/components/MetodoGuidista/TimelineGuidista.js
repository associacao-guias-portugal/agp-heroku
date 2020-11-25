import React, { useState, useEffect } from 'react';
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,
} from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './TimelineGuidista.css';

const TimelineGuidista = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [projetosData, setProjetosData] = useState([]);
  const [windowSize, setWindowSize] = useState(0);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  useEffect(() => {
    axios.get('/metodo-guidista/projetos/all')
      .then((res) => {
        setProjetosData(res.data);
        setDataLength(res.data.length);
      });
  }, []);

  const storageID = (event) => {
    localStorage.setItem('item', event.target.id);
    localStorage.setItem('itemTitle', JSON.stringify(`${event.target.name}`));
  };

  return (
    <div className="TimelineGuidista">
      <Timeline align={windowSize < 1000 ? 'left' : 'alternate'}>
        {projetosData.map((timeline, index) => (
          <TimelineItem key={timeline.id}>
            <TimelineSeparator>
              <TimelineDot>
                <img className="timeline-image" src={timeline.thumbnail} alt={timeline[`${selectedLanguage}_title`]} />
              </TimelineDot>
              <TimelineConnector className={(index === (dataLength - 1)) ? 'timeline-last-connector' : 'timeline-connector'} />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-box">
                <div className="timeline-date">{timeline[`${selectedLanguage}_date`]}</div>
                <div className="timeline-title">
                  { timeline.image
                    ? <Link to={timeline.link} id={timeline.id} name={timeline.pt_title} onClick={storageID}>{timeline[`${selectedLanguage}_title`]}</Link>
                    : `${timeline[`${selectedLanguage}_title`]}` }
                </div>
                <div className="timeline-text">{timeline[`${selectedLanguage}_intro`]}</div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineGuidista;
