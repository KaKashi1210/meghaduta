import Dashboard from "./page/Dashboard";
import Home from "./page/Home"
import { Routes, Route } from 'react-router-dom';
import Map from "./page/Map";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  )
}

export default App
