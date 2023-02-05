import logo from './logo.svg';
import './App.css';
import TryFrontendMessage from './components/TryFrontendMessage.js'
import TryBackendMessage from './components/TryBackendMessage.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Test communicating with frontend and backend from an iFrame.
        </p>
        <br/>&nbsp;
        <TryFrontendMessage/>

        <br/><br/><br/>&nbsp;

        <TryBackendMessage/>

        &nbsp;

        <br/>
        Test results appear in the console.

      </header>
    </div>
  );
}

export default App;

window.addEventListener("message", (event) => {
  //if (event.origin !== "http://example.org:8080") return;

  const data = event.data
  if (Object.hasOwn(data, 'from') && data.from === "react") {
    console.log("REACT: got message from "+data.from+":", data.content)
  }

}, false);
console.log("REACT: event listener added");