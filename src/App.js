import './styling/App.scss';
import About from './Components/About';
import ContactBar from './Components/ContactBar';
import Header from './Components/Header';
import Landing from './Components/Landing';
import SkillsExperience from './Components/SkillsExperience';
import ContactBottom from './Components/ContactBottom';
import Footer from './Components/Footer';
import React from 'react';



function App() {

  return (
    <div className="App">
      <Header />
      <ContactBar />
      <Landing />
      <About />
      <SkillsExperience />
      <ContactBottom />
      <Footer />
    </div>
  );
}

export default App;
