
import React, { useRef } from "react";
import { Layout } from "./layout";
// import { Routes, Route } from "react-router-dom";

import * as Pages from "./pages";



import "./app.css";

function App() {

  const home = useRef(null)
  const about = useRef(null);
  const contact = useRef(null);
  const portfolio = useRef(null);

  return (
    <>

      <div id="page-wrap">
        <Layout
          home={home}
          about={about}
          contact={contact}
          portfolio={portfolio} />

        <Pages.HomePage
          home={home}
          about={about}
          contact={contact}
          portfolio={portfolio} />
      </div>

    </>
  );
}

export default App;

































// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Pages.HomePage />} />
//           {/* <Route path="about" element={<Pages.AboutPage />} /> */}
//           <Route path="contact" element={<Pages.ContactPage />} />
//           <Route path="portfolio" element={<Pages.PortfolioPage />}></Route>
//         </Route>
//       </Routes>
//     </>
//   );
// }
