import React from 'react';
import { TOP_SECTION, SOCIALS, TEAM_INFO, FAQ, FOOTER } from './General.js';
import Home from './Home/Home';
import Faq from './FAQ/Faq';
import Social from './Social/Social';
import Team from './Team/Team.jsx';

const HomePage = (props) => {
  return (
    <>
      <div className="home">
        <Home info={TOP_SECTION} />
      </div>
      <div className="social-handles">
        <Social socials={SOCIALS} />
      </div>
      <div className="faq" id="faq">
        <Faq faqs={FAQ} />
      </div>
      <div className="team" id="team">
        <Team team={TEAM_INFO} />
      </div>
    </>
  );
};
export default HomePage;
