import { NavBar } from "../../components";

import styles from "./style.module.css"

export const Header = ({ home, about, contact, portfolio }) => {

  return (
    <>
      <div className={styles.icons}>
        <a class="navbar-brand" target="_blank" href="https://www.linkedin.com/in/billie-dartnell-4608bb156/">
          <i class="devicon-linkedin-plain"></i>
        </a>

        <a class="navbar-brand" target="_blank" href="https://github.com/dartbill">
          <i class="devicon-github-original"></i>
        </a>
      </div>
      <NavBar
        home={home}
        about={about}
        contact={contact}
        portfolio={portfolio} />
    </>
  );
};
