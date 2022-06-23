import { NavBar } from "../../components";


export const Header = ({ home, about, contact, portfolio }) => {

  return (
    <>
      <NavBar
        home={home}
        about={about}
        contact={contact}
        portfolio={portfolio} />
    </>
  );
};
