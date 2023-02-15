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

exports.getAddQuestion = (req, res, next) => {
  Exam.findAll()
    .then((exam) => {
      res.render("admin/add-question", { exam: exam });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postAddQuestion = (req, res, next) => {
  const examid = req.body.examid;
  const question = req.body.que;
  const opi = req.body.oi;
  const opii = req.body.oii;
  const opiii = req.body.oiii;
  const opiv = req.body.oiv;
  const ans = req.body.ans;

  Exam.findByPk(examid)
    .then((exam) => {
      exam.createQuestion({
        question: question,
        opi: opi,
        opii: opii,
        opiii: opiii,
        opiv: opiv,
        ans: ans,
      });
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
