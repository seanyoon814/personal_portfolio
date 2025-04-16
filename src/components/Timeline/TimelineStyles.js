//TimelineStyles.js

import styled, { createGlobalStyle } from 'styled-components';

export const TimelineContainer = styled.div`
  max-width: 1400px;
  margin: 30px auto;
  padding: 20px;
  color: #1d1836; /* Adjust for your theme */
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 5px;
  font-size: 2.4rem;
  color:rgb(255, 255, 255); /* Adjust for your theme */
`;

export const Subtitle = styled.h4`
  color: #bbb;
  margin-bottom: 5px; 
  font-size: 2rem;
`;

export const Description = styled.p`
  color: #ddd;
  font-size: 1.8rem !important;
`;

export const GlobalTimelineStyles = createGlobalStyle`
  .custom-date {
    font-size: 2rem !important;
    color: #ccc;
    font-weight: 500;
  }
`;
export const IconStyle = {
  background: '#444',
  color: '#fff',
};

export const ContentStyle = {
  background: '#1d1836',
  color: '#eee',
  border: '2px solid rgba(148, 84, 255, 0.3)', // subtle purple outline
  boxShadow: '0 0 20px rgba(148, 84, 255, 0.1)', // soft purple glow
  borderRadius: '12px',
  padding: '2rem',
};
