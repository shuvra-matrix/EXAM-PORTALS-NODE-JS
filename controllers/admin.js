const Exam = require("../models/add-exam");

exports.getAddExam = (req, res, next) => {
  res.render("admin/add-exam");
};

exports.postAddExam = (req, res, next) => {
  const exam = req.body.exam;
  Exam.create({
    exam: exam,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
