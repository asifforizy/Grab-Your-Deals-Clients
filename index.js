const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config()
const app = express();
const port = 3000;



const uri =
  `mongodb://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@ac-6pk8apo-shard-00-00.hr3iszz.mongodb.net:27017,ac-6pk8apo-shard-00-01.hr3iszz.mongodb.net:27017,ac-6pk8apo-shard-00-02.hr3iszz.mongodb.net:27017/?ssl=true&replicaSet=atlas-bn2j42-shard-0&authSource=admin&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


