import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hompage from "./pages/Hompage";
import ScriptRunner from "./pages/ScriptRunner";
import PackerViewer from "./pages/PackerViewer";
import DataExtractor from "./pages/DataExtractor";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";
import CommandSenderPage from "./pages/CommandSenderPage";
import { ToastContainer } from "react-toastify";

function App() {
  const [barClicked, setBarClicked] = useState(false);
  const onBarClicked = () => {
    setBarClicked(!barClicked);
  };
  return (
    <>
      {/* <Sidebar /> */}
      <Navbar onBarClicked={onBarClicked} />
      <div className="bottom-app-wrapper">
        {!barClicked && <Sidebar />}
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="/command-sender" element={<CommandSenderPage />} />
          <Route path="/script-runner" element={<ScriptRunner />} />
          <Route path="/packer-viewer" element={<PackerViewer />} />
          <Route path="/data-extractor" element={<DataExtractor />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000} // 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
