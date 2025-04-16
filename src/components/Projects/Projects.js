import React from 'react';
import { motion } from 'framer-motion';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { PROJECTS } from '../../constants/constants';

const fadeInUp = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" // Optional easing function for smoother animation
    },
  },
};
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionText>
      Here are some of my projects that I have worked on. I have included a brief description of each project, as well as the technologies used.
    </SectionText>
    <GridContainer>
      {PROJECTS.map((project) => (
        <motion.div  
          key={project.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <BlogCard>
            <div>
              <Img src={project.image} />
              <TitleContent>
                <HeaderThree>{project.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo>{project.description}</CardInfo>
              <div>
                <TagList>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={project.visit} target="_blank">
                  Code
                </ExternalLinks>
              </UtilityList>
              <CardInfo>{project.info}</CardInfo>
            </div>
          </BlogCard>
        </motion.div>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;