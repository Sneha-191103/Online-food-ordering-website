import { BrowserRouter as Router, Routes } from "react-router-dom";
import { UserProvider } from "./component/Context/usercontext";
import Routing from "./routing";

import './App.css'

function App() {
  return (
    <div className="App">
      <UserProvider>
            <Routing/>
      </UserProvider>
    </div>
  );
}

export default App;