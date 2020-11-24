import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import "./TimelineHistoria.css";

const TimelineHistoriaLady = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [timelineHistoriaOlave, setTimelineHistoriaOlave] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get("/historia-guidismo/timeline-two").then((res) => {
      const resultsTimelineOlave = res.data;
      setTimelineHistoriaOlave(resultsTimelineOlave);
    });
  }, []);

  useEffect(() => {
    if (i18n.language !== selectedLanguage) {
      setSelectedLanguage(i18n.language);
    }
  }, [i18n.language, selectedLanguage]);

  const timelieneAlt = "Linha de tempo Olave";
  const arrayLength = timelineHistoriaOlave.length
  return (
    <div className="TimelineHistoria">
      <Timeline align="left">
        {timelineHistoriaOlave.map((timeline, index) => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                <img
                  className="timeline-hist-image"
                  src={timeline.image}
                  alt={timelieneAlt}
                />
              </TimelineDot>
              <TimelineConnector
                className={
                  index ===  arrayLength - 1
                    ? "timeline-hist-last-connector"
                    : "timeline-hist-connector"
                }
              />
            </TimelineSeparator>
            <TimelineContent>
              <div className="timeline-box">
                <div className="timeline-hist-text">{ReactHtmlParser(timeline[`${selectedLanguage}_text`])}</div>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimelineHistoriaLady;
