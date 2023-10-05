

fetch("http://localhost:3000/dogs"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Byron",
    email: "Poodle",
  }),
};

