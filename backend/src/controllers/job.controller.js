const express = require("express");
const router = express.Router();


const Job = require("../models/job.model");


// router.get("", async (req, res) => {
//     const jobs = await Job.find().lean().exec();
//     res.status(200).json({ jobs });
// })
router.get("/:id", async (req, res) => {
    console.log(req.params);
    const job = await Job.find({id: Number(req.params.id)}).lean().exec();
    res.status(200).json({ job });
})
router.get("", async (req, res) => {
    const query = req.query.location ? { location: req.query.location } : {};
    console.log(req.query.location);
    // const b = req.query.title ? { title: req.query.location } : {};
    let jobs = await Job.find(query).lean().exec();
    if (req.query.title) {
        jobs = jobs.filter((job) => job.title.split(" ").includes(req.query.title));
    }
    res.status(200).json({ jobs });
})

module.exports = router;