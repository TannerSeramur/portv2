import Link from 'gatsby-link';
import React from 'react';
import ReactTooltip from 'react-tooltip';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import img1 from '../images/portImg1.png';
import img2 from '../images/portImg2.png';
import img3 from '../images/portImg3.png';
import img4 from '../images/portImg4.png';
import img5 from '../images/portImg5.png';
import img6 from '../images/portImg6.png';
import img7 from '../images/portImg7.png';
import img8 from '../images/portImg8.png';
import img9 from '../images/portImg9.png';
import { rhythm } from '../utils/typography';

const PerformanceSection = () => {
  const performances = [
    {
      name: 'SportsDB',
      description:
        'Statistics platform for sports league, manages team & player registration, player statistics, league schedule, league news, and standings',
      techStack: [
        { name: 'React' },
        { name: 'Redux' },
        { name: 'REST' },
        { name: 'Postgresql' },
        { name: 'Stripe' },
      ],
      webpageURL: 'https://github.com/keithj0nes/hockeydb',
      githubURL: 'https://github.com/keithj0nes/hockeydb',
      imgPath: img9,
    },
    {
      name: 'Perfect Pet App',
      description:
        'This tinder style app that helps get dogs in local shelters adopted. You swipe right to save a dog and then can go to your saved dogs and view more info about them and even message the shelter. ',
      techStack: [
        { name: 'React-Native' },
        { name: 'Redux' },
        { name: 'REST' },
      ],
      webpageURL: 'https://github.com/TannerSeramur/pet-finder',
      githubURL: 'https://github.com/TannerSeramur/pet-finder',
      imgPath: img1,
    },
    {
      name: 'Secret Santa Helper',
      description:
        'Inspired by the holidays, and my familys struggle to figure out how to draw names anonymously from different locations for our annual Secret Santa. I built a little app using react and node.js to help us.',
      techStack: [
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'NodeMailer' },
      ],
      webpageURL: 'https://secretsantahelper.herokuapp.com/',
      githubURL: 'https://github.com/TannerSeramur/secret-santa',
      imgPath: img2,
    },
    {
      name: 'Basic CMS',
      description:
        'User Auth using login & password pairs such as admin : ADMIN, editor : EDITOR, and user : USER to login to site and gives different privileges based off role.',
      techStack: [
        { name: 'React' },
        { name: 'Redux' },
        { name: 'AWS' },
        { name: 'JWT' },
      ],
      webpageURL: 'http://ts-basic-cms.s3-website-us-west-2.amazonaws.com/',
      githubURL: 'https://github.com/TannerSeramur/35-project-cms',
      imgPath: img3,
    },
    {
      name: 'cf-quick-start',
      description:
        'Open source project I started for Code Fellows that quick starts a variety of projects including templates for api, sockets server, express server, and react app.',
      techStack: [
        { name: 'node' },
        { name: 'NPM package' },
        { name: 'Github API' },
        { name: 'Symlink' },
      ],
      webpageURL: 'https://www.npmjs.com/package/cf-quick-start',
      githubURL: 'https://github.com/TannerSeramur/cf-quick-start',
      imgPath: img4,
    },
    {
      name: 'Halfway',
      description:
        'Mobile site for find a place to meet up halfway between two people',
      techStack: [
        { name: 'JavaScript' },
        { name: 'node.js' },
        { name: 'EJS' },
        { name: 'Postquesql' },
      ],
      webpageURL: 'https://github.com/TannerSeramur/301-final-halfwaythere',
      githubURL: 'https://github.com/TannerSeramur/301-final-halfwaythere',
      imgPath: img5,
    },
    {
      name: 'Basic Sockets ChatRoom',
      description:
        'Basic chat room that allows multiple users to connect to and chat',
      techStack: [
        { name: 'JavaScript' },
        { name: 'sockets.io' },
        { name: 'SASS' },
      ],
      webpageURL: 'https://l55ml6w809.codesandbox.io/',
      githubURL: 'https://github.com/TannerSeramur/Code-38-Socket.io-backend',
      imgPath: img6,
    },
    {
      name: 'NSBA Site',
      description: 'Static Mock-Up for North Shore Business aliance ',
      techStack: [{ name: 'HTML 5' }, { name: 'CSS' }, { name: 'Jquery' }],
      webpageURL: 'https://tannerseramur.github.io/NSBAsite/',
      githubURL: 'https://github.com/TannerSeramur/NSBAsite',
      imgPath: img7,
    },
    {
      name: 'Bazaar Fellows E-Commerce Store Template',
      description:
        'E-Commerce store template I built with a team for a 4-day school Project, uses gatsby to improve SEO and has a intuitive CMS system for users',
      techStack: [
        { name: 'React' },
        { name: 'Gatsby' },
        { name: 'GraphQL' },
        { name: 'Redux' },
        { name: 'PayPal API' },
        { name: 'MongoDB' },
      ],
      webpageURL: 'https://github.com/bazaar-fellows',
      githubURL: 'https://github.com/bazaar-fellows',
      imgPath: img8,
    },
  ];

  const styles = {
    grid: {
      display: 'grid',
      gridGap: rhythm(2),
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      justifyContent: 'center',
      margin: 'auto',
      maxWidth: 1200,
    },
    whiteBox: {
      padding: rhythm(1),
    },
    itemImage: {
      border: '1px solid #aaa',
      objectFit: 'cover',
      height: '160px',
      width: '100%',
    },
    itemTitle: {
      color: '#262626',
      display: 'block',
      fontWeight: 'bold',
      margin: '1rem 0',
      textDecoration: 'none',
    },
    description: {
      fontSize: '0.8rem',
      marginBottom: '0.8rem',
    },
    externalLink: {
      color: '#999',
      fontSize: '0.8rem',
      textDecoration: 'none',
      marginRight: '1rem',
      ':hover': {
        background: '#eee',
      },
    },
    techStackGrid: {
      borderTop: '1px dotted #999',
      display: 'grid',
      fontSize: '0.8rem',
      gridGap: '0.4rem',
      gridTemplateColumns: '1fr 1fr',
      marginTop: '0.8rem',
      paddingTop: '1rem',
      ' > span': {
        cursor: 'default',
      },
      ' > span::before': {
        content: '- ',
      },
    },
  };

  return (
    <SectionContainer id="performance">
      <SectionHeader text="Portfolio" colorNumber="1" />

      {/* グリッド始点 */}
      <div css={styles.grid}>
        {performances.map(performance => (
          <WhiteBox key={performance.name} css={styles.whiteBox}>
            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ objectFit: 'contain', border: 'none' }}
                src={performance.imgPath}
                css={styles.itemImage}
                alt={performance.name}
              />
            </a>

            <a
              href={performance.webpageURL}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.itemTitle}
            >
              {performance.name}
              <IconExtLink />
            </a>

            <p css={styles.description}>{performance.description}</p>

            {performance.githubURL ? (
              <a
                href={performance.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                css={styles.externalLink}
              >
                Source Code
              </a>
            ) : (
              <div style={{ color: 'transparent' }}>_</div>
            )}

            {performance.blogPath && (
              <Link
                to={performance.blogPath}
                target="_blank"
                css={styles.externalLink}
              >
                関連ブログ
              </Link>
            )}

            <ul css={styles.techStackGrid}>
              {performance.techStack.map(tech => (
                <span
                  data-for={tech.name + tech.description}
                  data-tip
                  key={tech.name}
                >
                  {tech.name}
                  <ReactTooltip
                    id={tech.name + tech.description}
                    effect="solid"
                  >
                    {tech.description}
                  </ReactTooltip>
                </span>
              ))}
            </ul>
          </WhiteBox>
        ))}
      </div>
    </SectionContainer>
  );
};

export default PerformanceSection;
