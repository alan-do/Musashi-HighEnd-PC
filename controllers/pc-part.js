// const ErrorResponse = require("../utils/errorResponse");
// const Part = require("../models/pc-part");
// const asyncHandler = require("../middleware/async");
// const PC = require("../models/pc");

// //@desc    Get parts
// //@route   Get /api/v1/parts
// //@route   Get /api/v1/pcs/:bootcampId/parts
// //@access  Public
// exports.getParts = asyncHandler(async (req, res, next) => {
//   if (req.params.pcId) {
//     const parts = await Part.find({ pc: req.params.pcId });
//     return res.status(200).json({
//       success: true,
//       count: parts.length,
//       data: parts,
//     });
//   } else {
//     res.status(200).json(res.advancedResults  );
//   }
// });

