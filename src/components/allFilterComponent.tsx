import Filter from "./filter";

function AllFilterComponent() {
  const roleOption: string[] = ["Frontend", "Backend", "Full-Stack"];
  const sizeOption: string[] = ["10-50", "50-200", "200-500", "500-1K"];
  const workModeOption: string[] = ["Office", "Hybrid", "on site"];
  const minPayOption: string[] = [
    "upto 5 LPA",
    "5-10 LPA",
    "10-15 LPA",
    "15-20 LPA",
    "20+ LPA",
  ];
  const experienceOption: string[] = [
    "Fresher",
    "1-3 years",
    "3-5 years",
    "5+ years",
  ];
  return (
    <div style={{ display: "flex" }}>
      <Filter options={roleOption} label="Roles" defaultName={"Roles"} />
      <Filter
        options={sizeOption}
        label="No of Employees"
        defaultName={"No of Employees"}
      />
      <Filter
        options={experienceOption}
        label="Experience"
        defaultName={"Experience"}
      />
      <Filter
        options={workModeOption}
        label="Work Mode"
        defaultName={"Remote"}
      />{" "}
      <Filter
        options={minPayOption}
        label="Minimum Base Pay Salary"
        defaultName={"Minimum Base Pay Salary"}
      />
      <div style={{ width: "10px" }}></div>
      <input
        style={{ borderRadius: "5px" }}
        type="text"
        placeholder="Search Company Name"
      />
    </div>
  );
}

export default AllFilterComponent;
