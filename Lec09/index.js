const express = require("express");

const app = express();

const { Auth, UserAuth } = require("./middleware/Auth");

app.use(express.json());

// CRUD: Create Read Update Delete

// Database: array
const FoodMenu = [
  { id: 1, food: "Chowmein", category: "veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "veg", price: 100 },
  { id: 3, food: "Chicken", category: "non-veg", price: 1000 },
  { id: 4, food: "Mutton", category: "non-veg", price: 1500 },
  { id: 5, food: "Chai", category: "veg", price: 300 },
  { id: 6, food: "Roti", category: "veg", price: 50 },
  { id: 7, food: "Lolipop", category: "non-veg", price: 300 },
  { id: 8, food: "Kabab", category: "veg", price: 100 },
  { id: 9, food: "Paneer", category: "veg", price: 150 },
  { id: 10, food: "Egg Curry", category: "non-veg", price: 200 },
  { id: 11, food: "salad", category: "veg", price: 50 },
  { id: 12, food: "shourma", category: "non-veg", price: 80 },
  { id: 13, food: "Butter Chicken", category: "veg", price: 1500 },
  { id: 14, food: "Mushroom", category: "veg", price: 700 },
];

const AddToCart = [];
//user ka jp bhi food hoga , wo idhar add hoga

app.get("/food", (req, res) => {
  res.status(200).send(FoodMenu);
});

// auth middleware
// app.use("/admin",Auth );

app.post("/admin", Auth, (req, res) => {
  try{
    FoodMenu.push(req.body);
    res.status(200).send("Items added successfully");
  }catch{
    res.send("Error Occured...")
  }
});

app.delete("/admin/:id", Auth, (req, res) => {
  const id = parseInt(req.params.id);
  const index = FoodMenu.findIndex((item) => item.id === id);
  if (index === -1) {
    res.send("Item doesn't exist");
  } else {
    FoodMenu.splice(index, 1);
    res.send("Item deleted successfully");
  }
});

app.patch("/admin/", Auth, (req, res) => {
  const id = req.body.id;

  const foodData = FoodMenu.find((item) => item.id === id); //Objects are Copied by reference ***
  if (foodData) {
    if (req.body.food) foodData.food = req.body.food;
    if (req.body.category) foodData.category = req.body.category;
    if (req.body.price) foodData.price = req.body.price;

    res.send("Successfully Updated");
  }
});

app.get("/user/allFoods", (req, res) => {
  res.send(FoodMenu);
});

app.post("/user/addToCart/:id", UserAuth, (req, res) => {
  const id = parseInt(req.params.id);
  const foodIndex = FoodMenu.find((item) => item.id === id);

  if (foodIndex) {
    AddToCart.push(foodIndex);
    res.send("Added Successfully");
  } else {
    res.send("Failed,item doesn't exist");
  }
});

app.get("/user/cart", UserAuth, (req, res) => {
  if (AddToCart.length == 0) {
    res.send("Cart is empty.");
  }
  res.send(AddToCart);
});

app.delete("/user/deleteItem/:id", UserAuth, (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = FoodMenu.findIndex((item) => item.id === id);
    if (index == -1) {
      res.send("Item Not Exists!");
    } else {
      AddToCart.splice(index, 1);
      res.send("Deleted Successfully");
    }
  } catch (err) {
    res.send("Error Occured " + err);
  }
});

app.get("/dummy", (req, res) => {
  try{
    // JSON.parse({"name":"rahul"});
    throw new Error('BROKEN')
    res.send("Hello");
  }
  catch(err){
    res.send("Some Error Occured "+err)
  }
  // throw new Error("DB can't connect");
  // res.send("Connected");
});

app.listen(5000, () => {
  console.log("Server listening at port 5000...");
});
