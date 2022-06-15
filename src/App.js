import React from 'react';
import { Layout } from './layout';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';


function App() {
  return (
    <>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="about" element={<Pages.AboutPage />} />
        <Route path="contact" element={<Pages.ContactPage />} >
      </Route>
      </Route>
    </Routes>
{/* <Layout />
<Home /> */}
</>
  );
}

export default App;
