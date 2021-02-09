import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "./reducers/reduxStore";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        
      </Provider>
    </BrowserRouter>

  );
}

export default App;
