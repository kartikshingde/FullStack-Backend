
// Default get mathodd
const response1 = await fetch("https://example.org/post")


const response = await fetch("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example",age:20 }),
  
});






const response2 = await fetch("https://example.org/post", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ age:20 }),
  // …
});


const response3 = await fetch("https://example.org/post", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example",age:20 }),
  // …
});
