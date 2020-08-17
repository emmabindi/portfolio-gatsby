import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typist from 'react-typist';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  // removed subtitle from here while not in use:
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}
            <span className="text-color-main">{name || 'Name Here'}</span>
            <br />
            {/* <Typist>{subtitle || 'Subtitle Here'}</Typist> */}
            <Typist>
              <span> I&apos;m a developer... </span>
              <Typist.Backspace count={16} delay={250} />
              <span> an F1 fanatic... </span>
              <Typist.Backspace count={18} delay={250} />
              <span> a pretty OK cook... </span>
              <Typist.Backspace count={21} delay={250} />
              <span>
                {' '}
                a proud owner of a Lassie dog{' '}
                <span role="img" aria-labelledby="lion emoji to represent my rough collie dog">
                  🦁
                </span>
              </span>
              <Typist.Backspace count={32} delay={270} />
              <span> passionate about lo-fi wines.. </span>
              <Typist.Backspace count={32} delay={250} />
              <span> a lover of sunshine & the great outdoors.. </span>
              <Typist.Backspace count={45} delay={250} />
              <span> a developer. </span>
            </Typist>
          </h1>
        </Fade>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'About Me'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
