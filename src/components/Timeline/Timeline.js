import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import {
  TimelineContainer,
  Title,
  Subtitle,
  Description,
  IconStyle,
  ContentStyle,
  GlobalTimelineStyles
} from './TimelineStyles';

import 'react-vertical-timeline-component/style.min.css';
import { Section, SectionTitle, SectionDivider, SectionText } from '../../styles/GlobalComponents';
import { WORK_EXPERIENCE } from '../../constants/constants';
const Timeline = () => {
  return (
    <Section nopadding id="experience">
        <SectionDivider />
        <SectionTitle main>Technical Experience</SectionTitle>
        <SectionText>
            View my technical work experience below!
        </SectionText>
        <TimelineContainer>
          <GlobalTimelineStyles /> 
          <VerticalTimeline>
            {WORK_EXPERIENCE.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={ContentStyle}
                contentArrowStyle={{ borderRight: '7px solid  #111' }}
                date={item.date}
                dateClassName="custom-date"
                iconStyle={IconStyle}
                icon={item.icon}
              >
                <Title>{item.title}</Title>
                <Subtitle>{item.subtitle}</Subtitle>
                <ul>
                  {item.description.map((point, index) => (
                    <li key={index}>
                      <Description>• {point}</Description>
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </TimelineContainer>
    </Section>
  );
};

export default Timeline;
