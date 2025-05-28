
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/projects/Project';
import Contact from './components/contact/contact';
function App() {
  return (
    <div>
      <div id="sperator"></div>
      <div id="backgroundwhitebox"></div>
      <div id="backgroundblackbox"></div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>

    </div>

  );
}

export default App;
