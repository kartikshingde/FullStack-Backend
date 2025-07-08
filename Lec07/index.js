const express = require("express");

const app = express();

app.use(express.json());

const BookStore = [
  { id: 1, name: "Harry Potter", author: "DevFlux" },
  { id: 2, name: "friends", author: "Vikas" },
  { id: 3, name: "Nexux", author: "Rohit" },
  { id: 4, name: "DSA", author: "Maharaj" },
  { id: 5, name: "Prem Kahani", author: "Rohan" },
];

app.get("/book", (req, res) => {
  res.send(BookStore);
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(typeof req.params.id)
  const Book = BookStore.find((info) => info.id === id);
  res.send(Book);
});

app.post("/book",(req,res)=>{

    BookStore.push(req.body);
    // console.log(req.body)
    res.send("data saved successfully")
})

// app.delete("/book/:id",(req,res)=>{
//     const id=parseInt(req.body.id);

//     BookStore.pop(id)
//     res.send("deleted")
// })


//app.use: route match hongi(enter even also only first route match)
// app.get, app.post, app.patch, ...=>matches full string

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
