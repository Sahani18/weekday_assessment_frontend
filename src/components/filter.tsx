import React, { useId } from "react";
import { filteredJob } from "../features/jobSlice";
import { useDispatch, useSelector } from "react-redux";

function Filter(
  { options, label, style, defaultName, ...props }: any,
  ref: any
) {
  const id = useId();
  const job = useSelector((state: any) => state?.jobs);
  const dispatch = useDispatch();

  const handleClick = (label: string, option: string) => {
    console.log("option clicked...");
    let newFilteredData = [];

    switch (label) {
      case "Roles":
        newFilteredData = job.filter(
          (item: any) => item?.jobRole?.toLowerCase() === option.toLowerCase()
        );
        break;
      case "No of Employees":
       newFilteredData = job.filter(
          (item: any) => item?.jobRole?.toLowerCase() === option.toLowerCase()
        );
        break;
      case "Experience":
        // Handle filtering for Experience filter
        break;
      case "Work Mode":
        // Handle filtering for Work Mode filter
        break;
      case "Minimum Base Pay Salary":
        // Handle filtering for Minimum Base Pay Salary filter
        break;
      default:
      // Handle default case
    }

    console.log("new one", newFilteredData);
    dispatch(
      filteredJob({ filterLabel: label, filteredData: newFilteredData })
    );
  };

  return (
    <div style={{ width: "100%" }}>
      {label && <label htmlFor={id}></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className="selectFilter"
        onChange={(e) => handleClick(label, e.target.value)}
      >
        <option>{defaultName}</option>
        {options?.map((option: string) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Filter);
