import { useEffect, useState } from "react";
import { getJobs } from "./API/apiCall";
import "./App.css";

function App() {
  const [job, setJob] = useState([]);
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <h1>hello World</h1>
    </>
  );
}

export default App;
