import React from 'react';
import AgeCalculator from '../components/AgeCalculator';
import Hr from '../components/Hr';
import IconExtLink from '../components/IconExtLink';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import profileJpg from '../images/profile.jpg';
import { rhythm } from '../utils/typography';

const ProfileSection = () => {
  const styles = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 350px))',
      gridGap: rhythm(2),
      justifyContent: 'center',
    },
    link: {
      color: '#262626',
    },
    whiteBox: {
      height: 'min-content',
      padding: rhythm(1),
      paddingTop: 0,
    },
    whiteBoxKeireki: {
      gridRowStart: 'span 2',
    },
    h3: {
      marginTop: rhythm(2),
      marginBottom: rhythm(1.5),
    },
    gaiyouPictureContainer: {
      marginBottom: rhythm(1.5),
      textAlign: 'center',
    },
    gaiyouPicture: {
      width: '200px',
      borderRadius: '50%',
    },
    gaiyouListItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: rhythm(1),
    },
    gaiyouItemName: {
      flex: 2,
      textAlign: 'right',
      marginRight: '1rem',
    },
    gaiyouItemContent: {
      flex: 3,
    },
    keirekiGray: {
      color: '#999999',
    },
  };

  return (
    <SectionContainer id="profile" colorNumber="2" skew skewReverse>
      <SectionHeader text="About" colorNumber="2" />

      <div css={styles.container}>
        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>Why am I interested in programming?</h3>

          <Hr />
          <p>
            For as long as I can remember I have been interested in computers
            and other technologies. The first memory I have of wanting to get
            into this industry was when I was in elementary school and my dad
            came home with Adobe Creative Suite 2. He showed me Photoshop, and I
            instantly became obsessed with creating different website designs,
            logos, and photo manipulations. At that time, I had no idea what a
            developer was but knew I wanted a career someday in which I could
            create using a computer.
            <br />
            <br />
            As I started learning the technical skills of software development,
            my love for it grew. I became infatuated with the idea of innovation
            and how someone with just a computer can make such a big impact on
            society. In my opinion, computer technology is one of the biggest
            developments in the progression of the human race. The prospect of
            being able to be a part of this progression is why I’m so quick to
            get out of bed every morning.
            <br />
            <br />
            Programming is one of the best ways to satisfy my urge to tinker and
            problem solve. Whether reviewing code to track down the cause of a
            bug, looking of a nonconventional approach to fixing a bug, or just
            running tests to try to break a site and identify new bugs to fix,
            nothing is more satisfying than seeing a dynamic error free code
            run, especially after I’ve been tinkering with it for hours to make
            it just right.
            <br />
            <br />
            I love the development community and participating in the awesome
            culture that comes with it. It is a diverse, accepting community
            that I don’t ever want to leave. Code can help bring people together
            from all different backgrounds. It seems to be one of the only
            places where you will see a military veteran, PC gamer, and skater
            talking, laughing, and getting excited over the same thing. Coding
            is a tremendous way to meet new people and break down traditional
            societal boundaries. Everyone is so willing to help each other and
            share the gift of knowledge. I have yet to meet anyone in the
            industry that isn’t willing to go out of their way to help a fellow
            developer.
            <br />
            <br />
            These are just a few of my many interests in programming. Finding
            this passion has been a great outlet for helping build my
            confidence, logic, and other professional skills for which I will be
            forever grateful.
          </p>

          <Hr />
        </WhiteBox>
        <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>Overview</h3>
          <div css={styles.gaiyouPictureContainer}>
            <img
              src={profileJpg}
              css={styles.gaiyouPicture}
              alt="profile pic"
            />
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Name:</b>
            </div>
            <div css={styles.gaiyouItemContent}>Tanner Seramur</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Age: </b>
            </div>
            <div css={styles.gaiyouItemContent}>
              <AgeCalculator birthday="1995-09-16T15:00+09:00" />
            </div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Location:</b>
            </div>
            <div css={styles.gaiyouItemContent}>Seattle, WA</div>
          </div>

          <div css={styles.gaiyouListItem}>
            <div css={styles.gaiyouItemName}>
              <b>Hobby's:</b>
            </div>
            <div css={styles.gaiyouItemContent}>
              Lacrosse
              <br />
              Snowboarding
              <br />
              Teaching Code
              <br />
              Problem Solving
            </div>
          </div>
        </WhiteBox>

        <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>EXPERIENCE</h3>

          <Hr />

          <p>
            <b>Creative Coding, Seattle - Teacher</b>
            <br />
            <span css={styles.keirekiGray}>(12/17 - )</span>
          </p>
          <p>
            Teaching students ages 7-13 how to program using a visual
            programming language called Scratch. Tasks include: developing
            classroom curriculum, teaching lessons, giving different code
            challenges for students to work on, and working with students to fix
            bugs. Communicating programs with non-technical people is an
            important skill I’ve learned from this position, which any developer
            needs.
          </p>

          <Hr />
          <p>
            <b>
              Code Fellows - Advanced Software Development in Full-Stack
              JavaScript
            </b>
            <br />
            <span css={styles.keirekiGray}>(09/18 - 2/19 )</span>
          </p>
          <p>
            Studied the ins and outs of javascript, and learned the industries
            standard tools, frameworks, and processes in development.
          </p>

          <Hr />

          <p>
            <b>Batteries Plus, Bozeman - Sales Associate</b>
            <br />
            <span css={styles.keirekiGray}>(09/15 - 05/16)</span>
          </p>
          <p>
            Gained customer service skills in a very useful field. Learned about
            different markets and how they apply to the market of customers we
            were assisting.
          </p>
        </WhiteBox>
        {/* <WhiteBox css={{ ...styles.whiteBox, ...styles.whiteBoxKeireki }}>
          <h3 css={styles.h3}>
            What have I done to expose myself to programming so far?
          </h3>

          <Hr />
          <p>
            It has been a long journey to get where I am today in my
            professional career. After graduating high-school, I decided to move
            to Bozeman, Montana, to attend Montana State University in pursuit
            of a degree in graphic design. During my second year at MSU, I
            started to realize that taking classes in fine arts wasn’t
            necessarily for me. The majority of my time was spent sitting 3 to 4
            hours in drawing or sculpture classes while feeling jealous of the
            Computer Science students. I finally took my first Computer Science
            class during the spring semester of my second year. The professor
            paired each design student with a Computer Science student. I
            quickly realized that I preferred being on the other side of things.
            Although I loved designing sites, I had more fun trying to build a
            site. I then decided to move back home to Seattle to avoid the high
            cost of out-of-state tuition. I wasn’t sure how I was going to do
            it, but I knew I wanted to get into software development.
            <br />
            <br />
            At first, I did a lot of self-teaching through different online
            resources in order to gain enough programming skills to do freelance
            work. I enrolled in computer science classes at the local college
            near my home and started going to Round Table Pizza to meet with
            different JR developers to talk about and work on code. Many of
            these developers were going to code bootcamps rather than taking the
            traditional four-year route at a university. They knew much more
            than I knew. While I was in my college classes learning the basics
            in languages such as HTML, C++, and PHP from professors with almost
            no real industry experience, these developers were learning the
            current trending tools and frameworks from top industry
            professionals. So, I decided to enroll at Code Fellows.
            <br />
            <br />
            At Code Fellows my knowledge of development instantly expanded, as
            did my knowledge of the ins and outs of the industry. I learned
            about the application Meetup and the large technology community on
            this platform. It offered different code meetups almost every night.
            They were a great way for me to meet and learn from professionals. I
            found a couple of mentors from some of the top technology companies
            in the country who gave me advice and guidance on my career. I read
            any book and took any course they sent my way and would ask them to
            critique my projects to see where I needed to improve in my skills.
            I would fall asleep almost every night listening to a YouTube video
            or tutorial on code. I also have learned many industry practices
            while at Code Fellows including improving my workflow, participating
            in different collaborative techniques, and gaining a stronger
            understanding on how the Web works.
            <br />
            <br />
            Today I am still trying to stay as involved as possible by teaching
            programming classes to elementary school students throughout Seattle
            area public school districts, exploring different technology
            conferences and meetups, or just helping new developers who want to
            improve their skills. I am always interested in staying active and
            growing as a developer.
          </p>
        </WhiteBox> */}

        {/* <WhiteBox css={styles.whiteBox}>
          <h3 css={styles.h3}>商号の由来</h3>
          <p>
            「ゆうに」という言葉は島根県の石見地方で使われている方言で、以下の二つの意味を持っています。
          </p>
          <p>
            <b>1．いとも簡単に・たやすく</b>
            <br />例）ゆうにできらぁや<br />解）簡単にできますよ
          </p>
          <p>
            <b>2．ゆっくりと・ゆったりと</b>
            <br />例）ゆうに食べちゃんさいね<br />解）ゆっくり召し上がってくださいね
          </p>
          <p>
            Yuuniworksという商号には、「問題をさらっと鮮やかに解決して、のんびりとした人生を送る」という意味を込めています。
          </p>
        </WhiteBox> */}
      </div>
    </SectionContainer>
  );
};

export default ProfileSection;
