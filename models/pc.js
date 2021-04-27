const mongoose = require("mongoose");
const slugify = require("slugify");
const PCSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    slug: String,
    description: {
      type: String,
      required: [true, "please add a description"],
      maxlength: [500, "Description can not be more than 500 characters"],
    },
    address: {
      type: String,
      required: [true, "Please add an email"],
    },
 
    averageCost: {
      type: Number,
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
    createAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//Create PC slug from the name
PCSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


//cascade delete courses when a bootcamp is deleted
PCSchema.pre("remove", async function (next) {
  console.log(`PC being remove from bootcamp ${this._id}`);
  await this.model("Course").deleteMany({ bootcamp: this._id });
  next();
});
//reverse populate with virtuals
PCSchema.virtual("pc-parts", {
  ref: "pc-part",
  localField: "_id",
  foreignField: "pc",
  justOne: false,
});

module.exports = mongoose.model("PC", PCSchema);
