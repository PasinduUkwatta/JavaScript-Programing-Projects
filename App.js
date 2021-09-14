import logo from './logo.svg';
import './App.css';
import Hero from "./Hero";
// import ErrorBoundry from "./ErrorBoundry";
// import Graph from "./Graph/graph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pasindu Thiwanka</p>
        <p>Deshan Ukwatta</p>
        <p>😎😋😁</p>

        {/*<ErrorBoundry>*/}
        {/*  <Hero heroname="batman"></Hero>*/}
        {/*  <Hero heroname="superman"></Hero>*/}
        {/*  <Hero heroname="Joker"></Hero>*/}
        {/*</ErrorBoundry>*/}



      </header>
    </div>
  );
}

export default App;
