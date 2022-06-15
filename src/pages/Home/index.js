import React, { useEffect, useState } from 'react';

import * as Components from '../../components'

export const HomePage = () => {

  return (
    <main>
      <title>Billie Dartnell</title> 
      <Components.Title/>
      <Components.PortfolioCard/>
      <Components.ShortAboutMe/>
      <Components.ContactMeBtn/>
    </main>
  );
}

