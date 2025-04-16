import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 120%;
  @media ${(props) => props.theme.breakpoints.sm} {
    height:50vh;
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const CustomText = styled.span`
  background: linear-gradient(90deg, #a855f7, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;
