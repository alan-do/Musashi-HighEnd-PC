const express = require("express");
const {
  getPCs,
  getPC,
  createPC,
  updatePC,
  deletePC,
  pcPhotoUpload,
} = require("../controllers/pc");

const PC = require("../models/pc");
// const advancedResults = require("../middleware/advancedResults");
//include other resource routers

// const partRouter = require("./part");

const router = express.Router();

// Re-router into other resource routers
// router.use("/:pcId/part", partRouter);

// router
//   .route("/")
//   .get(advancedResults(PC, "part"), getBootcamps)
//   .post(createBootcamp);
// router.route("/:id/photo").put(bootcampPhotoUpload);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
