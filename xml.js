const params = new URLSearchParams({
  latitude: "54.69",
  longitude: "25.28",
  hourly: "temperature_2m",
});
const req = new XMLHttpRequest();
req.onreadystatechange = () => {
  if (req.readyState === req.DONE) {
    console.log(JSON.parse(req.responseText));
  }
};
req.open("GET", "https://api.open-meteo.com/v1/forecast?" + params.toString());
req.setRequestHeader("Accept", "*/*");
req.send();
