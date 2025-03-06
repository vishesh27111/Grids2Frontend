// import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage.js';
import MatrixPage from './components/MatrixPage.js';

function App() {
  return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/matrix" element={<MatrixPage />} />
        </Routes>
);
}

export default App;
