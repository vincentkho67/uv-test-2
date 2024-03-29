const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter note title"],
    },

    content: {
      type: String,
      required: true,
      default: "fill in the content",
    }
  },
  {
    timestamps: true,
  }
);


const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;