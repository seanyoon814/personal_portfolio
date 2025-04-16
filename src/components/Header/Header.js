import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons, CustomLi } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
          <DiCssdeck size="3rem" style={{marginTop:'2rem'}}/> <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <CustomLi>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </CustomLi>
      <CustomLi>
        <Link href="#experience">
          <NavLink>Work</NavLink>
        </Link>
      </CustomLi>
      <CustomLi>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </CustomLi>
      <CustomLi>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </CustomLi>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/seanyoon814?tab=repositories" target='_blank'>
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/seann-yoon/" target='_blank'>
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/seanyoon__/" target='_blank'>
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
