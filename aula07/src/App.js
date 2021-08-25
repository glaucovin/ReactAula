import logo from './logo512.png';
import logo2 from './bigbang.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
        Escolha entre:
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=WOao-H3Nbok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Natal
        </a>

        <a
          className="App-link"
          href="https://pt.wikipedia.org/wiki/Albert_Einstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          Einstein
        </a>

        <a
          className="App-link"
          href="https://globoplay.globo.com/the-big-bang-theory/t/fhmwKtSNxG/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Big Bang Theory
        </a>

      </header>
    </div>
  );
}

export default App;
