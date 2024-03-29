import * as Components from "../../components";
import styles from "./style.module.css";

import pic from './smalltalk.png'
import rabbit from './something.png'
import logo from './logoNoText.png'
import sooki from './sookiText.png'

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
            <Components.PortfolioCard
              img={pic}
              website="https://smalltalkapp.netlify.app/"
              link="https://github.com/dartbill/smallTalk_Client"
              title="SmallTalk"
              info="A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project"
              programs="JavaScript | HTML | CSS | Jest | Express | Heroku | Netlify " />

            <Components.PortfolioCard
              img={rabbit} website="https://rabbit-habits.netlify.app/"
              link="https://github.com/dartbill/Lap2_project_client"
              title="Rabbit Habits"
              info="A fun habit tracker made for mobiles where the user can keep track of multiple custom habits anda how frequently they would like to track the habit. There is also a feature to track the streak of the current habit."
              programs="JavaScript | HTML | CSS | Jest | Bootstrap | Sass | Express | MongoDB | Docker | Heroku | Netlify" />

            <Components.PortfolioCard website="https://quiznado.netlify.app/"
              img={logo}
              link="https://github.com/dartbill/react-quiz"
              title="Quiz-Nado"
              info="A quiz game created with React that you can play by yourself or with someone. It stores highscores and displays the top 5 players"
              programs="JavaScript | HTML | CSS | Jest | Express | React | Redux | PostSQL | Docker | Heroku | Netlify" />
            <Components.PortfolioCard website="https://digerati-meal-planner.netlify.app/"
              img={sooki}
              link="https://github.com/dartbill/meal_planner_backend"
              title="Sooki"
              info="A meal planner app that generates a random weekly meal plan based on user input. This website uses Spoonacular's API"
              programs="JavaScript | HTML | CSS | Jest | Django | React | Redux | PostSQL | Docker | Heroku | Netlify" />
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
