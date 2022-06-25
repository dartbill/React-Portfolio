import * as Components from "../../components";
import styles from "./style.module.css";

import pic from './smallTalk.png'
import rabbit from './something.png'

export const HomePage = ({ home, about, contact, portfolio }) => {

  // const handleScroll = () => {
  //   function isInViewport(element) {
  //     const rect = element.current.getBoundingClientRect();
  //     // console.log(rect)
  //     // console.log('this is the height ' + window.innerHeight)
  //     // console.log('this is the width ' + window.innerWidth)
  //     return (
  //       rect.y < 100 && rect.y >= 0
  //     );
  //   }
  //   console.log(about.current)

  //   if (isInViewport(home)) {
  //     console.log('this is home')
  //   } else if (isInViewport(about)) {
  //     about.current.className = styles.scrollSection_animation
  //     console.log(about.current.className)
  //     console.log('this is about')
  //   } else if (isInViewport(contact)) {
  //     console.log('this is contact')
  //   } else if (isInViewport(portfolio)) {
  //     console.log('this is portfolio')
  //   } else {
  //   }
  // }





  return (
    <>

      <div className={styles.snapContainer}>
        <title>Billie Dartnell</title>

        <section id='something' ref={home} className={styles.scrollSection}>
          <Components.Title />
        </section>

        <section ref={about} className={styles.scrollSection} >
          <Components.ShortAboutMe />
        </section>

        <section ref={portfolio} className={styles.scrollSection}>
          <div className={styles.titlecontainer}>
            <h2 className={styles.text}>projects</h2>
          </div>
          <div className={styles.cardContainer}>
            <Components.PortfolioCard img={pic} website="https://smalltalkapp.netlify.app/" link="https://github.com/dartbill/smallTalk_Client" title="SmallTalk" info="A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project" programs="This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)" />
            <Components.PortfolioCard img={rabbit} website="https://rabbit-habits.netlify.app/" link="https://github.com/Aaron-Marsh/Lap2_project_client" title="Rabbit Habits" info="A habit tracker" programs="This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)" />
            <Components.PortfolioCard />
          </div>
        </section>

        {/* <section className={styles.scrollSection}>
          <Components.MoreProjectsBtn />
        </section> */}


        <section ref={contact} className={styles.scrollSection}>
          <Components.ContactMeBtn />
          {/* <Components.ContactForm /> */}
        </section>
      </div>
    </>
  );
};
