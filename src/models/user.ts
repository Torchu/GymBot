import Routine from "./routine";
import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  routine: {
    type: {
      monday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      tuesday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      wednesday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      thursday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      friday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      saturday: [
        {
          name: String,
          _weight: Number,
        },
      ],
      sunday: [
        {
          name: String,
          _weight: Number,
        },
      ],
    },
    default: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: [],
    },
  },
});

export default mongoose.model("User", UserSchema);
