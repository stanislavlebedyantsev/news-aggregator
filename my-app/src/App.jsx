import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/reduxStore";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
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
        </div>
      </Provider>
    </BrowserRouter>

  );
}

export default App;
