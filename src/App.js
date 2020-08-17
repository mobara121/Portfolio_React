import React from 'react';
import './App.css';
import Topbar from './components/Nav/Navbar.jsx';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skill/Skills';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin , faGithub} from '@fortawesome/free-brands-svg-icons'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Container = styled.div`
  display: grid;
  max-width: calc(100% - 64px);
  margin: 0px auto 90px;
  @media (max-width: 768px) {
    max-width: calc(100% - 32px);
  }
`;

const StyledH1 = styled.h1`
  color: #fafafa;
  border-color: #292929;
  line-height: 0.75em;
  font-size: 80px;
  font-weight: 900;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  text-transform: uppercase;
  line-height: 0.75em;
  padding: 48px 0 20px 0;
  max-width: 1000px;
  text-align: center;
  margin: 300px auto 0 auto;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const StyledH3 = styled.h3`
  color: #fafafa;
  font-family: "Work Sans", -apple-system, ".SFNSText-Regular", "San Francisco",
    "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif !important;
  font-weight: 800;
  font-size: 50px;
  line-height: 1.45em;
  max-width: 900px;
  text-align: center;
  margin: 0 auto;
`;

const StyledSpan = styled.span`
  margin-left: 15px;
  background-color: transparent;
`;

function App() {
  return (
      <div>
        <Topbar/>
        <Container className="App">
            <StyledH1>MIZUE O'BARA</StyledH1>
            <StyledH3>Front End Developer</StyledH3>
          <AboutMe />
          <Education />
          <Skills />
          <p id="footer">&copy; MIZUE O'BARA 2020
            <StyledSpan><a href="https://www.linkedin.com/in/mizueobara"><FontAwesomeIcon icon={faLinkedin} size='1x' color='#fafafa'/></a></StyledSpan>
            <StyledSpan><a href="https://github.com/mobara121?tab=repositories"><FontAwesomeIcon icon={faGithub} size='1x' color='#fafafa'/></a></StyledSpan>
            {/* <span><FontAwesomeIcon icon={faEnvelope} size='1x' color='#fafafa'/></span> */}
          </p>
          
        </Container>
      </div>
  );
}

export default App;
