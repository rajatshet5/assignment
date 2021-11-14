const express = require("express");
const app = express();
const connect = require("./configs/db");

const jobController = require("./controllers/job.controller");
app.use("/jobs", jobController);









app.listen(2576, async function () {
    await connect();
    console.log("Listening to port 2576");
})