import React from 'react';
import PortfolioContainer from './components/layout/PortfolioContainer';
import Footer from "./components/layout/Footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'


library.add(fas, faFontAwesome)

function App() {
  return (
    <>
    <PortfolioContainer/>
    <Footer/>
    </>
  );
}

export default App;
