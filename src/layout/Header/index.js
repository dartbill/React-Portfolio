import { NavBar } from "../../components";

import styles from "./style.module.css"

export const Header = ({ home, about, contact, portfolio }) => {

  return (
    <>
      <div className="App" id="outer-container">
        <div className={styles.icons}>
          <a className={styles.links} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/billie-dartnell-4608bb156/">
            <i className={styles.imgs} class="devicon-linkedin-plain"></i>
          </a>

          <a className={styles.links} target="_blank" rel="noreferrer" href="https://github.com/dartbill">
            <i className={styles.imgs} class="devicon-github-original"></i>
          </a>

        </div>
        <NavBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}
          home={home}
          about={about}
          contact={contact}
          portfolio={portfolio} />
      </div>
    </>
  );
};
