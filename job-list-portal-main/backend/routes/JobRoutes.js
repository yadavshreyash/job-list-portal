const express = require('express');
const router = express.Router();
const JobListing = require('../models/JobListing');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all job listings
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await JobListing.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/job-listings', authMiddleware, async (req, res) => {
    try {
      const jobListings = await JobListing.find();
      res.json(jobListings);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

// Route to create a new job listing
router.post('/jobs', async (req, res) => {
  const job = new JobListing({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    requirements: req.body.requirements,
    salary: req.body.salary,
    company: req.body.company,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;