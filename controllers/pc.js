const path = require("path");
const PC = require("../models/pc");
const { json } = require("express");
const { findByIdAndDelete } = require("../models/pc");
//@desc    Get all PCs
//@route   Get /api/v1/pcs
//@access  Public
exports.getPCs = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

