import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { FaReact, FaPython, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiDotNet } from 'react-icons/si';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Technologies = () => (
  <Section nopadding id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world, from both front-end to back-end development.
    </SectionText>
    <List>
      {[{
        icon: <FaReact size="4rem" />,
        title: 'React',
        text: 'Experience with JavaScript, TypeScript, and Component libraries such as DevExtreme'
      },
      {
        icon: <SiDotNet size="4rem" />,
        title: 'ASP.NET',
        text: 'Experience with C#, ASP.NET, ASP.NET Web API, and Entity Framework'
      },
      {
        icon: <FaNodeJs size="4rem" />,
        title: 'Node.js',
        text: 'Experience with Node.js Express, Mongoose, and PostgreSQL'
      },
      {
        icon: <DiFirebase size="4rem" />,
        title: 'SQL',
        text: 'Experience with Microsoft SQL Server, Oracle Database, and Snowflake Data Cloud'
      },
      {
        icon: <FaPython size="4rem" />,
        title: 'Python',
        text: 'Experience with Jupyter, PyTorch, Scikit-learn, NumPy, and Pandas'
      },
      {
        icon: <FaGithub size="4rem" />,
        title: 'Git',
        text: 'Experience with GitHub, Azure DevOps, Azure DevOps Server (TFS)'
      }].map(({ icon, title, text }, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ListItem>
            {icon}
            <br />
            <ListContainer>
              <ListTitle>{title}</ListTitle>
              <ListParagraph>{text}</ListParagraph>
            </ListContainer>
          </ListItem>
        </motion.div>
      ))}
    </List>
  </Section>
);

export default Technologies;
