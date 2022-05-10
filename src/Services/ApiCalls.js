const axios = require('axios');
axios.defaults.baseURL = "https://localhost:5001";

const BE = "https://localhost:5001";

export function registerCall(data, reroute) {
    
    fetch(BE + "/api/User/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(reroute)
      .catch(reroute);
}

export function loginCall(data, reroute) {
  fetch(BE + "/api/User/Authenticate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(reroute)
    .catch(reroute);
}