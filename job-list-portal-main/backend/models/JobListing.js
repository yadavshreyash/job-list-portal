const mongoose = require('mongoose');

// Define Job Listing Schema
const JobListingSchema = new mongoose.Schema({
  title: String,
  location: String,
  description: String,
  requirements: String,
  salary: String,
  company: String,
  postedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create and export the JobListing model
const JobListing = mongoose.model('JobListing', JobListingSchema);
module.exports = JobListing;