import logo from "./logo.svg";
import "./App.css";
import { Button } from "dribbble-app";
import { Callout } from "dribbble-app";
import { Hero } from "dribbble-app";
import { Footer } from "dribbble-app";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Button</h2>
      <Button label="This is a Button" />
      <hr />
      <h2>Callout</h2>
      <Callout
        heading="This is a Callout"
        blurb="This is blurb text"
        linkDescription="This is a Link NOW"
      />
      <hr />
      <h2>Hero</h2>
      <Hero
        heading="This is a Hero"
        blurb="This is a blurb"
        linkDescription="This is a link"
      />
      <hr />
      <h2>Footer</h2>
      <Footer label="This is a Footer" />
    </div>
  );
}

export default App;
