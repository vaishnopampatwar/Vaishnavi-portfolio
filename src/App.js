import React from 'react';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AboutMy from './components/AboutMy';
import Projects from './components/Projects';
import Quote from './components/Quote';
import Footer from './components/Footer';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <AboutMy/>
      <Projects/>
      <Quote/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
