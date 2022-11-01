import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Four from './components/Four';
import Hello from './components/Hello';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/4" element={<Four />} />
          <Route path="/4/:number" element={<Four />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/hello/:word" element={<Hello />} />
          <Route path="/hello/:word/:color/:bgColor" element={<Hello />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
