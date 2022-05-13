import express from "express"

const app = express()

import path from "path"
const CURRENT_WORKING_DIR = process.cwd()
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")))

// first define the routes
import template from "./../template"
app.get("/", (req, res) => {
    res.status(200).send(template())
})

// set the port and listen only when we have routes
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info("Server started on port %s.", port)
})

// mongo stuff seems to be independent
// make sure the database below is defined
import { MongoClient } from "mongodb"
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernbasic"
MongoClient.connect(url, (err, db) => {
    console.log("Connected to mongo DB server.")
    db.close()                          // lolwut
})

import devBundle from "./devBundle"     // comment out for production
devBundle.compile(app)                  // comment out for production
