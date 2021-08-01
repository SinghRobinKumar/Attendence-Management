const Attendence = require("../models/mongo-schema");

exports.new = (req, res, next) => {
  const name = req.body.params.name;
  const rno = req.body.params.rollno;

  const attendence = new Attendence({
    name: name,
    rollno: rno,
    attendence: [
      {
        SemesterName: "Semester 6",
        Subjects: [
          {
            SubjectName: "Computer Graphics",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
          {
            SubjectName: "Network Management",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
          {
            SubjectName: "Advanced Computer Architecture",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
          {
            SubjectName: "Software Engineering & Testing",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
          {
            SubjectName: "Cyber Law And Computer Forensic",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
          {
            SubjectName: "Business Communication",
            Subject: [
              {
                Week: "Week1",
                WeekData: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 5",
        Subjects: [
          {
            SubjectName: "Internet Technology And Web Designing",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Security",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Entrepreneurship Development",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Data Structures using C",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "E-commerce",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 4",
        Subjects: [
          {
            SubjectName: "Microprocessor And it's Applications",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Database Management System",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Object Oriented Programming Through Java",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Operating Systems",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Data Communication And Computer Network",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Laboratory 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 3",
        Subjects: [
          {
            SubjectName: "Computer Hardware",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Programming Concepts Through C",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Organization",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Laboratory 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Basic Electrical Engineering",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Digital Electronics",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 2",
        Subjects: [
          {
            SubjectName: "Engineering Maths 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Physics 2",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Environmental Studies",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Engineering Materials",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Basic Engineering Skills",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Computer Fundamentals and Applications",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
      {
        SemesterName: "Semester 1",
        Subjects: [
          {
            SubjectName: "Engineering Maths 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Physics 1",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Applied Chemistry",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Engineering Drawing",
            Subject: [
              {
                week1: [],
              },
            ],
          },
          {
            SubjectName: "Communication Skills",
            Subject: [
              {
                week1: [],
              },
            ],
          },
        ],
      },
    ],
  });

  attendence
    .save()
    .then(result => {
      console.log("inserted Successfully");
      res.redirect("/");
    })
    .catch(err => console.log(err));
};

exports.update = (req, res, next) => {
  const id = req.body.params.id;
  const present = req.body.params.present;
  const date = req.body.params.date;

  let updated = false;

  Attendence.findById(id)
    .then(record => {
      record.attendence.map(record => {
        if (record.SemesterName == req.body.params.semname) {
          record.Subjects.map(r => {
            if (r.SubjectName == req.body.params.subname) {
              //!FOR WEEK AS AN ARRAY
              r.Subject.map(week => {
                if (week.Week === req.body.params.week) {
                  week.WeekData.push({
                    present: req.body.params.present,
                    date: req.body.params.date,
                  });
                  updated = true;
                }
              });
              if (updated == false) {
                r.Subject.push({
                  Week: req.body.params.week,
                  WeekData: [
                    {
                      present: req.body.params.present,
                      date: req.body.params.date,
                    },
                  ],
                });
              }

              //!FOR WEEK AS AN OBJECT
              // r.Subject.week1.push({
              //   present: req.body.params.present,
              //   date: req.body.params.date,
              // });
            }
          });
        }
      });

      return record.save();
    })
    .then(result => {
      console.log("Record Updated");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};

exports.list = (req, res, next) => {
  Attendence.find((err, data) => {
    if (!err) {
      res.status(200).json(data);
      // console.log(data);
    } else {
      console.log(err);
    }
  });
};

exports.singleRecord = async (req, res, next) => {
  const id = req.query.id;
  const data = await Attendence.findOne({ _id: id });
  res.status(200).json(data);
};
