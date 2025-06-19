const { MongoClient } = require("mongodb");
// We are  NOT going to Use this library...
// We use Mongoose***

const url =
  "mongodb+srv://kartikshingde12:X9Doe2wFY5oEzJLY@namastenode.4euyrex.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server ! Kartik");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstName: "Rahul",
    lastName: "Choudhary",
    city: "Pune",
    age: 21,
    hobbies: ["Playing cricket"],
  };

  const insertResult = await collection.insertOne(data);
  // console.log("Inserted documents =>", insertResult);

  //for using insertMany([data])  ..use array

  const findResult = await collection.find({}).toArray();
  // console.log("Found documents =>", findResult);

  const countResult=await collection.countDocuments({})
  // console.log(countResult)

  //find all doc with first Name : Tejas

  const result=await collection.find({firstName:"Tejas"}).toArray()
  console.log(result)   //we have to use .toArray()

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// *NOTES:-

// Go to mongodb website
// Create a free M0 cluster
// Create a User
// Get the connection String
// Install MongoDB Compass
