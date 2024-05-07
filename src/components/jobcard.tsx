import React, { useState } from "react";
import icons from "../assets/tick.svg";

function Jobcard({ item }: any) {
  const [jobdata, setJobdata] = useState({
    companyName: "Dropbox",
    jdLink: "https://weekday.works",
    jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
    jobDetailsFromCompany:
      "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    jobRole: "frontend",
    location: "delhi ncr",
    logoUrl: "https://logo.clearbit.com/dropbox.com",
    maxExp: 6,
    maxJdSalary: 61,
    minExp: 3,
    minJdSalary: null,
    salaryCurrencyCode: "USD",
  });
  return (
    <div className="jobCard">
      <p
        style={{
          padding: "5px",
          borderRadius: 12,
          backgroundColor: "whitesmoke",
          width: "150px",
        }}
      >
        Posted 10 days ago
      </p>
      <div style={{ display: "flex" }}>
        <img style={{ height: 60, width: 30 }} src={item?.logoUrl} />
        <div style={{ width: "100%", paddingLeft: "10px", fontSize: 20 }}>
          <p style={{ marginTop: "-5px", color: "gray" }}>
            {item?.companyName || "Company Name"}
          </p>
          <p style={{ marginTop: "-14px", fontSize: 20 }}>
            {item?.jobRole || "Designation"}
          </p>
          <p
            style={{ marginTop: "-15px", fontSize: 16, fontWeight: "initial" }}
          >
            {item?.location || "Location"}
          </p>
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:"space-between", fontSize: 18 }}>
        <p style={{width:"450px"}}>
          Estimate Salary: {item?.minJdSalary || "upto "}
          {item?.minJdSalary && "-"}
          {item?.maxJdSalary} {item?.salaryCurrencyCode}
        </p>
        <img style={{ width: "100px",marginTop:"-12px" }} src={icons} />
      </div>
    </div>
  );
}

export default Jobcard;
