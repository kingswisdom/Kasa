/* ############## - Imports - ############# */

import './../styles/About.css';
import Banner from '../components/Banner';
import Collapsible from '../components/Collapsible';
import guidelinesList from '../data/guidelinesList';


/* ############## - Route - ############# */

function About() {
  return (
    <main className='about'>
      <Banner origin="about"></Banner>
      <section className='about__section'>
        {guidelinesList.map((guideline, index) => (
          <Collapsible title={guideline.title} content={guideline.content} key={index}></Collapsible>
        ))}

      </section>
    </main>
  );
}

/* ############## - Exports - ############# */

export default About;