// import logo from './logo.svg';
import Component1 from "./components/Component1";
import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header branding="Contact Manager" />
        <Contact
          name="Raviteja"
          email="ravitejauppulapu@gmail.com"
          phone="6300454715"
        />
        <Contact
          name="Uppulapu"
          email="ravitejauppulapu@gmail.com"
          phone="6300454715"
        />
        <Contact
          name="Raviteja"
          email="ravitejauppulapu@gmail.com"
          phone="6300454715"
        />
        <Component1 />
      </header>
    </div>
  );
}

export default App;
