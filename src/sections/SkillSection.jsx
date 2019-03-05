import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import WhiteBox from '../components/WhiteBox';
import questionSvg from '../icons/question.svg';
import { rhythm } from '../utils/typography';

const SkillSection = props => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: 'auto',
    },
    whiteBox: {
      padding: rhythm(1.5),
    },
    containerKihon: {
      position:
        'relative' /* 親要素をrelativeにしないと子(?マーク)がはみ出すため */,
    },
    helpButton: {
      color: '#999999',
      position: 'absolute',
      right: '5px',
      top: '20px',
      cursor: 'pointer',
      ' img': { width: '1.2rem' },
    },
    sonotaListItem: {
      marginBottom: rhythm(1),
    },
    sonotaTitle: {
      color: '#262626',
      fontWeight: 'bold',
    },
    sonotaContent: {
      marginTop: rhythm(1 / 4),
    },
    caret: {
      marginRight: rhythm(1 / 4),
      opacity: 0.8,
    },
    link: {
      color: '#262626',
      cursor: 'pointer',
      textDecorationLine: 'underline',
    },
  };

  const skills = {
    front: {
      JavaScript: 3,
      'React / React-Native': 3,
      Redux: 3,
      'Flexbox / CSS Grid': 3,
      Jquery: 3,
      'Jest/Enzyme': 3,
      'Material-UI': 3,
      SASS: 3,
      Bootstrap: 3,
      Webpack: 2,
      'Handlebars.js': 2,
      'Nuxt.js / Hugo / Gatsby': 2,
      GraphQL: 2,
      Anguler: 1,
      Vue: 1,
    },
    backend: {
      'Node.js': 3,
      'Express.js': 3,
      SQL: 3,
      Postgresql: 3,
      Mysql: 2,
      noSQL: 3,
      mongoDB: 3,
      Firebase: 2,
      REST: 3,
      graphQL: 2,
      Heroku: 3,
      gulp: 2,
      php: 2,
      aws: 2,
    },
    design: {
      Photoshop: 3,
      Illustrator: 2,
      Sketch: 2,
      'Adobe XD': 2,
      'Cinima 4d': 2,
      git: 3,
      Github: 3,
      Typescript: 2,
      TDD: 2,
      EDD: 2,
      'NPM / Yarn': 3,
      'Unix ES6': 3,
      'Server & Client side rendering': 3,
      Travis: 2,
      'Mocha & Chai': 2,
    },
    other: {
      git: 3,
      Github: 3,
      Typescript: 2,
      TDD: 2,
      EDD: 2,
      'NPM / Yarn': 3,
      'Unix ES6': 3,
      'Server & Client side rendering': 3,
      Travis: 2,
      'Mocha & Chai': 2,
    },
  };

  return (
    <SectionContainer id="skill" colorNumber="2" skew>
      <SectionHeader text="Skills" colorNumber="2" />
      <div css={styles.grid}>
        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Front-End</h3>
            <div
              css={styles.helpButton}
              onClick={() => props.setCurrentModal('SKILL_HELP')}
              onKeyDown={e => {
                if (e.keyCode === 13) props.setCurrentModal('SKILL_HELP');
              }}
              role="button"
              tabIndex={0}
            >
              <img src={questionSvg} alt="hint button" />
            </div>
            {Object.keys(skills.front).map(skill => (
              <Skill
                skillName={skill}
                // skillLevel={skills.front[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Back-End</h3>
            {Object.keys(skills.backend).map(skill => (
              <Skill
                skillName={skill}
                // skillLevel={skills.backend[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Design / Other</h3>
            {Object.keys(skills.design).map(skill => (
              <Skill
                skillName={skill}
                // skillLevel={skills.design[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox>

        {/* <WhiteBox css={styles.whiteBox}>
          <div>
            <h3>Other</h3>
            {Object.keys(skills.other).map(skill => (
              <Skill
                skillName={skill}
                // skillLevel={skills.other[skill]}
                key={skill}
              />
            ))}
          </div>
        </WhiteBox> */}
      </div>
    </SectionContainer>
  );
};

SkillSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default SkillSection;
