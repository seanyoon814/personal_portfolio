import styled, { createGlobalStyle } from 'styled-components';

export const TimelineContainer = styled.div`
  max-width: 1400px;
  margin: 30px auto;
  padding: 20px;
  color: #1d1836;
`;

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 5px;
  font-size: 2.4rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const Subtitle = styled.h4`
  color: #bbb;
  margin-bottom: 5px;
  font-size: 2rem;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.6rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const Description = styled.p`
  color: #ddd;
  font-size: 1.8rem !important;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.4rem !important;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem !important;
  }
`;

export const GlobalTimelineStyles = createGlobalStyle`
  .custom-date {
    font-size: 2rem !important;
    color: #ccc;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.md} {
      font-size: 1.5rem !important;
    }

    @media ${props => props.theme.breakpoints.sm} {
      font-size: 1.3rem !important;
    }
  }
`;

export const IconStyle = {
  background: '#444',
  color: '#fff',
};

export const ContentStyle = {
  background: '#1d1836',
  color: '#eee',
  border: '2px solid rgba(148, 84, 255, 0.3)',
  boxShadow: '0 0 20px rgba(148, 84, 255, 0.1)',
  borderRadius: '12px',
  padding: '2rem',
};
