import React from 'react';
import {
  TOP_SECTION,
  SOCIALS,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  FOOTER,
} from './General.js';
import Home from './Home/Home';
import { Faq } from './FAQ/Faq';
import { Social } from './Social/Social';

export default function HomePage(props) {
  return (
    <>
      <div className="home">
        <Home info={TOP_SECTION} />
      </div>
      <div className="social-handles">
        <Social socials={SOCIALS} />
      </div>
      <div className="faq" id="faq">
        <Faq faqs={frequentlyAskedQuestions} />
      </div>
    </>
  );
}
