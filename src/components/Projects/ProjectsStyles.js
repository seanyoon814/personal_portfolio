import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;
export const BlogCard = styled.div`
  border-radius: 20px;
  padding: 2px; /* border padding for gradient edge */
  background: linear-gradient(145deg, #0fffc1, #7e0fff); /* outer gradient border */
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2), 0 0 15px rgba(126, 15, 255, 0.4); /* glowing shadow */
  width: 400px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  /* Inner content container */
  & > div {
    background-color: #111; /* or your card's background */
    border-radius: 18px;
    padding: 2rem;
    height: 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(126, 15, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.6);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background:rgb(53, 200, 236);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background-color: #5c1b8d;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background-color: #7721b3;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color:rgb(128, 211, 236);
font-size: 1.5rem;
`