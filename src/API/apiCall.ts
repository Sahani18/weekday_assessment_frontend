const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
  limit: 10,
  offset: 0,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body,
};

export const getJobs = async () => {
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    );
    const data = await response.json();
    return console.log(data);
  } catch (error) {
    return console.error(error);
  }
};
