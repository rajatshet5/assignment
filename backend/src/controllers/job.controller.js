const express = require("express");
const router = express.Router();


const Job = require("../models/job.model");


router.get("", async (req, res) => {
    const jobs = await Job.find().lean().exec();
    res.status(200).json({ jobs });
})

module.exports = router;