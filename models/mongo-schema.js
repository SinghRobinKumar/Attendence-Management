const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = new Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  attendence: [
    {
      SemesterName: String,
      Subjects: [
        {
          SubjectName: String,
          Subject: [
            {
              Week: String,
              WeekData: [],
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Test-Attendence", model);
