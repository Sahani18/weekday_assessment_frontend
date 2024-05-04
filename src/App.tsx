import { useEffect, useState, lazy, Suspense } from "react";
import { getJobs } from "./API/apiCall";
const Jobcard = lazy(() => import("./components/jobcard"));
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "./features/jobSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const job = useSelector((state: any) => state.jobs);
  const [error, setError] = useState<Boolean>(false);

  const getJobDatafromApi = async (offset?: number) => {
    const response = await getJobs(offset);
    if (!response) {
      setError(true);
      console.log(error);
    }
    setError(false);

    dispatch(addJob(response?.jdList));
    console.log("REsponse", offset, response?.jdList);
  };

  const handleLoadMore = (offset: number) => {
    getJobDatafromApi(offset);
  };

  useEffect(() => {
    getJobDatafromApi();
  }, []);
  return (
    <>
      <h1 onClick={() => handleLoadMore(10)}>hello World</h1>
      {error ? (
        <p>No data Available</p>
      ) : (
        // lazy loading component
        <Suspense fallback={<div>Loading...</div>}>
          <div className="grid-container">
            {job.map((item: any) => {
              return <Jobcard item={item} />;
            })}
          </div>
        </Suspense>
      )}
    </>
  );
}

export default App;
