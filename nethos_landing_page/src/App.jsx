import './App.css';
import {AboutUs, Clients, SectionHeader, SectionHero, SectionProducts, SectionWhy} from './sections/sections.jsx';

function App() {
  return (
    <div className="App">
      <SectionHeader/>
      <SectionHero/>
      <SectionProducts/>
      <SectionWhy/>
      <AboutUs/>
      <Clients/>
    </div>
  );
}

export default App;