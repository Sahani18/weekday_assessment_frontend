import { useEffect, useState, lazy, Suspense, useMemo } from "react";
import { getJobs } from "./API/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { addJob } from "./features/jobSlice";
const Jobcard = lazy(() => import("./components/jobcard"));
import "./App.css";
import Container from "./components/container";
import Filter from "./components/filter";
import AllFilterComponent from "./components/allFilterComponent";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const job = useSelector((state: any) => state.jobs);
  const [errors, setErrors] = useState<Boolean>(false);

  // api call to get data and fill in store
  const getJobDatafromApi = async (offset?: number) => {
    console.log("Fetching job data...");
    try {
      const response = await getJobs(offset);
      if (!response) {
        setErrors(true);
        console.log(errors);
      } else {
        setErrors(false);
        dispatch(addJob(response?.jdList));
        console.log("Response", offset, response?.jdList);
      }
    } catch (error) {
      console.error("Error fetching job data:", error);
      setErrors(true);
    }
  };

  // for infinite loading

  const handleLoadMore = (offset: number) => {
    // Adjusted point to trigger loading before reaching the exact bottom
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !loading
    ) {
      getJobDatafromApi(offset).then(() => setLoading(false));
    }
  };

  // Attached scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle scroll event
  const handleScroll = () => {
    setLoading(true);
    let offset: number = 10;
    handleLoadMore(offset);
  };

  useEffect(() => {
    console.log("Useeffect  data...");
    getJobDatafromApi();
  }, []);

  return (
    <Container>
      <h1>Weekday</h1>
      <AllFilterComponent />

      {(errors || job.length == 0) && <h1>No Data Available</h1>}
      <br />
      <Suspense fallback={<h1>Loading...</h1>}>
        <div className="grid-container">
          {job.map((item: any, index: number) => {
            return <Jobcard key={index} item={item} />;
          })}
        </div>
        {loading && <h2>Loading....</h2>}
      </Suspense>
    </Container>
  );
}
export default App;
