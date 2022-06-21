import { NavBar } from "../../components";


export const Header = ({ about, contact, portfolio }) => {

  return (
    <>
      <NavBar
        about={about}
        contact={contact}
        portfolio={portfolio} />
    </>
  );
};
