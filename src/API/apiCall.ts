export const getJobs = async (offset: number = 0) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const body = JSON.stringify({
    limit: 10,
    offset: offset,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
    return await response.json();
  } catch (error) {
    return console.error("Something went wrong", error);
  }
};
