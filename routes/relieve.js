const user = require("./user");

exports.reli_check = function (req, res, next) {
  var post = req.body;
  var message = "";
  console.log(post);
  var course = post.reli_course;
  var reli_info = post.reli_info;
  console.log("Relieving info: " + reli_info);
  if (reli_info == "All") {
    switch (course) {
      case "MBBS":
        user.mbbs_board(req, res);
        break;
      case "MDMS":
        user.mdms_board(req, res);
        break;
      default:
        null;
        break;
    }
  } else {
    var sql = `SELECT * FROM ems.cand_admission_details where (course,active_status) =('${course}','Yes') and cand_id in (select cand_id from ems.cand_relieving_details where relieved = 'Yes')`;
    db.query(sql, function (err, data27) {
      var sql = `SELECT * FROM ems.cand_fees where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in (select cand_id from cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
      db.query(sql, function (err, data26) {
        var sql18 = `SELECT * FROM ems.cand_institute_details_mdms where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
        db.query(sql18, function (err, data25) {
          var sql17 = `SELECT * FROM ems.cand_academic_mdms_2 where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
          db.query(sql17, function (err, data24) {
            var sql16 = `SELECT * FROM ems.cand_academic_mdms_1 where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
            db.query(sql16, function (err, data23) {
              var sql15 = `SELECT * FROM ems.cand_academic_mdms where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
              db.query(sql15, function (err, data22) {
                var sql14 = `SELECT * FROM ems.cand_neet_marks_mdms where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                db.query(sql14, function (err, data21) {
                  var sql12 = `SELECT * FROM ems.cand_surety_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                  db.query(sql12, function (err, data20) {
                    var sql15 = `SELECT * FROM ems.cand_neet_mark_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                    db.query(sql15, function (err, data19) {
                      var sql14 = `SELECT * FROM ems.cand_marks_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                      db.query(sql14, function (err, data18) {
                        var sql13 = `SELECT * FROM  ems.cand_institute_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                        db.query(sql13, function (err, data17) {
                          var sql19 = `select * from ems.cand_relieving_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                          db.query(sql19, function (err, data16) {
                            var sql18 = `SELECT * FROM ems.certificate_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in (select cand_id from ems.cand_admission_details where (course,active_status)=('${course}','Yes')) and relieved = '${reli_info}') and active_flag ='Y'`;
                            db.query(sql18, function (err, data15) {
                              var sql17 = `SELECT * FROM ems.cand_contact_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                              db.query(sql17, function (err, data14) {
                                var sql16 = `SELECT * FROM ems.cand_bank_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}' )`;
                                db.query(sql16, function (err, data13) {
                                  var sql12 = `SELECT * FROM ems.biometric_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}' ) and active_flag ='Y' `;
                                  db.query(sql12, function (err, data12) {
                                    var sql11 = `SELECT * FROM ems.cand_address_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}' )`;
                                    db.query(sql11, function (err, data11) {
                                      var sql =
                                        "SELECT * FROM `ems`.`state_details`;";
                                      db.query(sql, function (err, data10) {
                                        var sql =
                                          "SELECT * FROM `ems`.`admiss_type`;";
                                        db.query(sql, function (err, data8) {
                                          var sql =
                                            "SELECT * FROM `ems`.`admiss_quota`;";
                                          db.query(sql, function (err, data7) {
                                            var sql =
                                              "SELECT * FROM `ems`.`community_details`;";
                                            db.query(
                                              sql,
                                              function (err, data6) {
                                                var sql =
                                                  "SELECT * FROM `ems`.`nation_details`;";
                                                db.query(
                                                  sql,
                                                  function (err, data5) {
                                                    var sql =
                                                      "SELECT * FROM `ems`.`religion_details`;";
                                                    db.query(
                                                      sql,
                                                      function (err, data4) {
                                                        var sql =
                                                          "SELECT * FROM `ems`.`no_delete`;";
                                                        db.query(
                                                          sql,
                                                          function (
                                                            err,
                                                            data3
                                                          ) {
                                                            var sql = `SELECT * FROM ems.cand_profile_details where cand_id in (select cand_id from ems.cand_relieving_details where cand_id in  (select cand_id from ems.cand_admission_details where (course,active_status) =('${course}','Yes')) and relieved = '${reli_info}')`;
                                                            db.query(
                                                              sql,
                                                              function (
                                                                err,
                                                                data1
                                                              ) {
                                                                var sql = `SELECT * FROM ems.cand_admission_details where (course,active_status) =('${course}','Yes') and cand_id in (select cand_id from ems.cand_relieving_details where relieved = '${reli_info}')`;
                                                                db.query(
                                                                  sql,
                                                                  function (
                                                                    err,
                                                                    data
                                                                  ) {
                                                                    if (
                                                                      course ==
                                                                      "MBBS"
                                                                    ) {
                                                                      res.render(
                                                                        "mbbs_viewstudent.ejs",
                                                                        {
                                                                          message:
                                                                            message,
                                                                          userData:
                                                                            data,
                                                                          userData1:
                                                                            data1,
                                                                          userData3:
                                                                            data3,
                                                                          userData4:
                                                                            data4,
                                                                          userData5:
                                                                            data5,
                                                                          userData6:
                                                                            data6,
                                                                          userData7:
                                                                            data7,
                                                                          userData8:
                                                                            data8,
                                                                          userData10:
                                                                            data10,
                                                                          userData11:
                                                                            data11,
                                                                          userData12:
                                                                            data12,
                                                                          userData13:
                                                                            data13,
                                                                          userData14:
                                                                            data14,
                                                                          userData15:
                                                                            data15,
                                                                          userData16:
                                                                            data16,
                                                                          userData17:
                                                                            data17,
                                                                          userData18:
                                                                            data18,
                                                                          userData19:
                                                                            data19,
                                                                          userData26:
                                                                            data26,
                                                                          userData27:
                                                                            data27,
                                                                        }
                                                                      );
                                                                    }
                                                                    if (
                                                                      course ==
                                                                      "MDMS"
                                                                    ) {
                                                                      res.render(
                                                                        "mdms_viewstudent.ejs",
                                                                        {
                                                                          message:
                                                                            message,
                                                                          userData:
                                                                            data,
                                                                          userData1:
                                                                            data1,
                                                                          userData3:
                                                                            data3,
                                                                          userData4:
                                                                            data4,
                                                                          userData5:
                                                                            data5,
                                                                          userData6:
                                                                            data6,
                                                                          userData7:
                                                                            data7,
                                                                          userData8:
                                                                            data8,
                                                                          userData10:
                                                                            data10,
                                                                          userData11:
                                                                            data11,
                                                                          userData12:
                                                                            data12,
                                                                          userData13:
                                                                            data13,
                                                                          userData14:
                                                                            data14,
                                                                          userData15:
                                                                            data15,
                                                                          userData16:
                                                                            data16,
                                                                          userData20:
                                                                            data20,
                                                                          userData21:
                                                                            data21,
                                                                          userData22:
                                                                            data22,
                                                                          userData23:
                                                                            data23,
                                                                          userData24:
                                                                            data24,
                                                                          userData25:
                                                                            data25,
                                                                          userData26:
                                                                            data26,
                                                                          userData:
                                                                            data27,
                                                                        }
                                                                      );
                                                                    }
                                                                  }
                                                                );
                                                              }
                                                            );
                                                          }
                                                        );
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
};
