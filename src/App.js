import './App.css';
import Navbar from './Components/Navbar';
import NewsContainer from './Components/NewsContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';
function App() {
  const pageSize = 12;
  const [progress, setProgress] = useState(0);
  function settingProgress(value){
    setProgress(value);
  }
  return (
    <Router>

      <Navbar title="NewsMonkey" />
        <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/Business" element={<NewsContainer settingProgress={settingProgress} key="business" pageSize={pageSize} category="business" />} />
        <Route path="/Entertainment" element={<NewsContainer settingProgress={settingProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
        <Route path="/Health" element={<NewsContainer settingProgress={settingProgress} key="health" pageSize={pageSize} category="health" />} />
        <Route path="/Science" element={<NewsContainer settingProgress={settingProgress} key="science" pageSize={pageSize} category="science" />} />
        <Route path="/Sports" element={<NewsContainer settingProgress={settingProgress} key="sports" pageSize={pageSize} category="sports" />} />
        <Route path="/Technology" element={<NewsContainer settingProgress={settingProgress} key="technology" pageSize={pageSize} category="technology" />} />
        <Route path="/" element={<NewsContainer settingProgress={settingProgress} key="general" pageSize={pageSize} category="general" />} />
      </Routes>
    </Router>
  )
}

export default App;
