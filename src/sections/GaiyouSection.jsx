import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import { rhythm } from '../utils/typography';
import Link from 'gatsby-link';

const GaiyouSection = props => {
  const articles = [
    [
      'What I do?',
      'Developing APIs, SPAs, Databases, & Mobile Apps with a variety of javascript technologies. <br /><br /><a href="https://github.com/TannerSeramur" target="_blank">My Github</a>',
    ],
    [
      'What I want?',
      'My goal is to strengthen my software development skills by working in an environment that is just as creative as my front end skills. I have a strong work ethic and am confident in my ability to grow within a company that is ready to grow with me.',
    ],
    [
      'Can you stay resident?',
      'Although I am currently pursuing a career in the greater Seattle area I am open to relocating depending of the opportunity.',
    ],
    [
      'Can you work now?',
      'I am always looking for new projects to work on, feel free to reach out',
    ],
  ];

  const styles = {
    container: {
      display: 'grid',
      gridGap: rhythm(1.5),
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      margin: 'auto',
      maxWidth: '700px',
      padding: rhythm(1.5),
    },
    caret: {
      color: '#6292F1',
      marginRight: rhythm(1 / 8),
      width: '0.875em',
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="gaiyou">
      <SectionHeader text="Overview" colorNumber="1" />

      <WhiteBox css={styles.container}>
        {articles.map(article => (
          <li key={article[0]}>
            <div css={styles.title}>
              <FontAwesomeIcon icon="caret-square-right" style={styles.caret} />
              {article[0]}
            </div>
            {/* eslint-disable-next-line */}
            <div dangerouslySetInnerHTML={{ __html: article[1] }} />
          </li>
        ))}
      </WhiteBox>

      <button css={styles.button}>
        <Link to="/#contact">Contact</Link>
      </button>
    </SectionContainer>
  );
};

GaiyouSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default GaiyouSection;
