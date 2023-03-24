function makeRequest() {
  const form = document.getElementById("form");
  const values = Object.fromEntries(new FormData(form));
  console.log(values);
  const headers = new Headers();
  if (values.player) {
    headers.append("X-Player", values.player);
  }
  const params = new URLSearchParams();
  if (!values.url || !values.method) return;
  fetch(values.url + params, {
    headers,
    method: values.method,
  })
    .then((response) => response.text())
    .then((response) => {
      const element = document.getElementById("result");
      element.innerHTML = response;
    });
}
