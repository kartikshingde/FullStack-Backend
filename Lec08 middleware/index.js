const express = require("express");

const app = express();

app.use(express.json());

const BookStore = [
  { id: 1, name: "Harry Potter", author: "DevFlux" },
  { id: 2, name: "friends", author: "Vikas" },
  { id: 3, name: "Nexux", author: "Rohit" },
  { id: 4, name: "DSA", author: "Maharaj" },
  { id: 5, name: "Prem Kahani", author: "Rohan" },
  { id: 6, name: "Hello", author: "Vikas" },
];

app.get("/book", (req, res) => {
  console.log(req.query);
  const Book=BookStore.filter(info=>info.author===req.query.author)
  res.send(Book);
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(typeof req.params.id)
  const Book = BookStore.find((info) => info.id === id);
  console.log(req.query)
  res.send(Book);
});

app.post("/book", (req, res) => {
  BookStore.push(req.body);
  // console.log(req.body)
  res.send("data saved successfully");
});

app.patch("/book", (req, res) => {
  console.log(req.body);
  const Book = BookStore.find((info) => info.id === req.body.id);

  if(req.body.author)
    Book.author = req.body.author;

  if(req.body.name)
    Book.name=req.body.name

  res.send("patch Updated !");
});

app.put("/book",(req,res)=>{
  const Book=BookStore.find(info=>info.id===req.body.id);

  Book.author=req.body.author;
  Book.name=req.body.name

  res.send("Changes Updated successfully")
})

app.delete("/book/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  
  const index=BookStore.findIndex(info=>info.id===id)
  // console.log(index)
  BookStore.splice(index,1);
  //splice(startIndex,no.of elements  )=>delete from which index and no.of elements

  res.send("successfully deleted")
})

// app.delete("/book/:id",(req,res)=>{
//     const id=parseInt(req.body.id);

//     BookStore.pop(id)
//     res.send("deleted")
// })

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
