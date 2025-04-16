import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, CustomText } from './HeroStyles';

const Hero = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ['Developer', 'Problem Solver', 'Ongoing Learner'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Sean Yoon<br />
          A <CustomText ref={typedEl}></CustomText>
        </SectionTitle>
        <SectionText>
          I am a Full Stack Developer with a passion for creating dynamic and responsive web applications. 
          I have experience in both front-end and back-end development in both educational and professional settings.
          Of course, I am always eager to learn new technologies and improve my craft.
        </SectionText>
        <a href='/documents/Sean_Yoon_Resume.pdf' download> 
          <Button>Download Resume</Button>
        </a>
      </LeftSection>
    </Section>
  );
};

export default Hero;
