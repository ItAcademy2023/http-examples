const headers = new Headers();
headers.append("Accept", "*/*");
const params = new URLSearchParams({
  latitude: "54.69",
  longitude: "25.28",
  hourly: "temperature_2m",
});
fetch("https://api.open-meteo.com/v1/forecast?" + params, {
  headers,
})
  .then((response) => response.json())
  .then((response) => console.log(response));
