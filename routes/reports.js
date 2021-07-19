const user = require("./user");

exports.all_report = function (req, res) {
  var post = req.body;
  var cand_id = post.check;
  var rel_cand_id = post.rel_check;
  var reports = post.reports;
  var course = post.course;
  console.log(typeof cand_id);
  console.table(post);
  var bon_ref_no = post.bon_ref_no;
  var bon_acad_year = post.bon_acad_year;
  var bon_purse = post.bon_purse;
  var bon_stud_year = post.bon_stud_year;
  var bon_purpose = post.bon_purpose;
  var bon_pur_others = post.bon_pur_others;
  var ack_date = post.ack_date;
  var cond_csp = post.cond_csp;
  var cond_cep = post.cond_cep;
  var cond_mbbs = post.cond_mbbs;
  var cond_tsp = post.cond_tsp;
  var cond_tep = post.cond_tep;
  var tc_reldate = post.tc_reldate;
  var tc_reas = post.tc_reas;
  var tc_mark = post.tc_mark;
  var tc_high = post.tc_high;
  //change
  var rel_date = post.rel_date;
  var indiDate = post.indiDate;
  var ref = post.ref;
  var check_slip = post.check_slip;
  var check_date = post.check_date;
  var check_remark = post.check_remark;
  console.log("check_remark", check_remark);
  var check_status = post.check_status;

  var today = new Date();

  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  todayy = dd + "-" + mm + "-" + yyyy;

  var objDate = new Date(rel_date)
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
  var indiDate = new Date(indiDate)
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
  var indiDate1 = new Date(indiDate)
    .toLocaleString("en-GB", {
      day: "2-digit",
      month: "numeric",
      year: "numeric",
    })
    .replace(/ /g, "-");
  var sql = "SELECT * FROM `ack_certificate_mdms`;";
  db.query(sql, function (err, data28) {
    if (err) throw err;
    var sql = "SELECT * FROM `ack_certificate`;";
    db.query(sql, function (err, data27) {
      //change
      var sql = `SELECT * from ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Thumb','Y') `;
      db.query(sql, (err, data19) => {
        var sql = `SELECT * from ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Sign','Y') `;
        db.query(sql, (err, data18) => {
          var sql = `SELECT * from ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
          db.query(sql, (err, data17) => {
            var sql = `SELECT * from ems.cand_academic_mdms2 where cand_id ='${cand_id}' `;
            db.query(sql, (err, data16) => {
              var sql = `SELECT * from ems.cand_academic_mdms1 where cand_id ='${cand_id}' `;
              db.query(sql, (err, data15) => {
                var sql = `SELECT * from ems.cand_academic_mdms where cand_id ='${cand_id}' `;
                db.query(sql, (err, data14) => {
                  var sql = `SELECT * from ems.cand_bank_details where cand_id ='${cand_id}' `;
                  db.query(sql, (err, data13) => {
                    var sql = `SELECT * from ems.cand_contact_details where cand_id ='${cand_id}' `;
                    db.query(sql, (err, data12) => {
                      var sql = `SELECT * from ems.cand_fees where cand_id ='${cand_id}' `;
                      db.query(sql, (err, data11) => {
                        var sql = `SELECT * from ems.cand_institute_details_mdms where cand_id ='${cand_id}' `;
                        db.query(sql, (err, data10) => {
                          var sql = `SELECT * from ems.cand_institute_details where cand_id ='${cand_id}' `;
                          db.query(sql, (err, data9) => {
                            var sql = `SELECT * from ems.cand_marks_details where cand_id ='${cand_id}' `;
                            db.query(sql, (err, data8) => {
                              var sql = `SELECT * from ems.cand_neet_mark_details where cand_id ='${cand_id}' `;
                              db.query(sql, (err, data7) => {
                                var sql = `SELECT * from ems.cand_neet_mark_mdms where cand_id ='${cand_id}' `;
                                db.query(sql, (err, data6) => {
                                  var sql = `SELECT * from ems.cand_relieving_details where cand_id ='${cand_id}' `;
                                  db.query(sql, (err, data5) => {
                                    var sql = `SELECT * from ems.cand_surety_details where cand_id ='${cand_id}' `;
                                    db.query(sql, (err, data4) => {
                                      var sql = `SELECT * from ems.cand_certificate_details where cand_id ='${cand_id}' `;
                                      db.query(sql, (err, data3) => {
                                        var sql = `SELECT * from ems.cand_address_details where cand_id ='${cand_id}' `;
                                        db.query(sql, (err, data2) => {
                                          var sql = `SELECT *, DATE_FORMAT(date_of_birth, '%d/%m/%Y') date_of_birth FROM ems.cand_profile_details WHERE cand_id='${cand_id}'`;
                                          db.query(sql, (err, data1) => {
                                            var sql = `SELECT *, DATE_FORMAT(course_commencement, '%d %M %Y') course_commencement, DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM ems.cand_admission_details WHERE cand_id='${cand_id}'`;
                                            db.query(sql, (err, data) => {
                                              switch (reports) {
                                                case "Admission Register":
                                                  if (
                                                    typeof cand_id === "object"
                                                  ) {
                                                    var sql_admission = `SELECT *, DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM ems.cand_admission_details where cand_id in ('${cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_contact = `SELECT * from ems.cand_contact_details where cand_id in('${cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_profile = `SELECT * FROM ems.cand_profile_details where cand_id in('${cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_address = `SELECT * from ems.cand_address_details where cand_id in ('${cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_institute = `SELECT * from ems.cand_institute_details where cand_id in('${cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_photo = `SELECT * from ems.biometric_details where cand_id in('${cand_id.join(
                                                      "','"
                                                    )}') and (category,active_flag) =('Photo','Y') `;
                                                  } else {
                                                    var sql_admission = `SELECT * FROM ems.cand_admission_details where cand_id in ('${cand_id}')`;
                                                    var sql_contact = `SELECT * from ems.cand_contact_details where cand_id in('${cand_id}')`;
                                                    var sql_profile = `SELECT * from ems.cand_profile_details where cand_id in('${cand_id}')`;
                                                    var sql_address = `SELECT * from ems.cand_address_details where cand_id in('${cand_id}')`;
                                                    var sql_institute = `SELECT * from ems.cand_institute_details where cand_id in('${cand_id}')`;
                                                    var sql_photo = `SELECT * from ems.biometric_details where (cand_id,category,active_flag) =('${cand_id}','Photo','Y') `;
                                                  }
                                                  // console.log("sql", sql);
                                                  db.query(
                                                    sql_admission,
                                                    (err, data_admission) => {
                                                      db.query(
                                                        sql_contact,
                                                        (err, data_contact) => {
                                                          db.query(
                                                            sql_profile,
                                                            (
                                                              err,
                                                              data_profile
                                                            ) => {
                                                              db.query(
                                                                sql_address,
                                                                (
                                                                  err,
                                                                  data_address
                                                                ) => {
                                                                  db.query(
                                                                    sql_institute,
                                                                    (
                                                                      err,
                                                                      data_institute
                                                                    ) => {
                                                                      db.query(
                                                                        sql_photo,
                                                                        (
                                                                          err,
                                                                          data_photo
                                                                        ) => {
                                                                          console.log(
                                                                            data_photo
                                                                          );
                                                                          return res.render(
                                                                            "report_admission_register.ejs",
                                                                            {
                                                                              userData:
                                                                                data_admission,
                                                                              userData1:
                                                                                data_profile,
                                                                              userData2:
                                                                                data_address,
                                                                              userData4:
                                                                                data_institute,
                                                                              userData8:
                                                                                data_contact,
                                                                              userData12:
                                                                                data_photo,
                                                                            } //pending
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
                                                    }
                                                  );
                                                  break;

                                                case "Admission Letter":
                                                  res.render(
                                                    "report_admission_letter.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData12: data17,
                                                      userData13: data18,
                                                      userData14: data19,
                                                    }
                                                  );
                                                  break;
                                                case "Check Slip":
                                                  res.render(
                                                    "report_checkslip.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      check_slip: check_slip,
                                                      check_date: check_date,
                                                      check_status:
                                                        check_status,
                                                      check_remark:
                                                        check_remark,
                                                      userData4: data4,
                                                    }
                                                  );
                                                  break;
                                                case "Student Details":
                                                  res.render(
                                                    "report_personal.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData2: data2,
                                                      userData8: data12,
                                                    }
                                                  );
                                                  break;
                                                case "Education Details":
                                                  res.render(
                                                    "report_education.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData4: data9,
                                                      userData5: data8,
                                                      userData6: data7,
                                                    }
                                                  ); //pending
                                                  break;
                                                case "Bond Form":
                                                  res.render(
                                                    "report_bond.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData4: data4,

                                                      userData2: data2,
                                                    }
                                                  );
                                                  break;
                                                case "Relieving Letter":
                                                  if (
                                                    typeof rel_cand_id ===
                                                    "object"
                                                  ) {
                                                    var sql_admission = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM ems.cand_admission_details where cand_id in ('${rel_cand_id.join(
                                                      "','"
                                                    )}')`;
                                                    var sql_relieving = `SELECT *, DATE_FORMAT(date_of_relieving, '%d-%M-%Y') date_of_relieving from ems.cand_relieving_details where cand_id in ('${rel_cand_id.join(
                                                      "','"
                                                    )}')`;
                                                  } else {
                                                    var sql_admission = `SELECT *,DATE_FORMAT(date_of_admission, '%d/%m/%Y') date_of_admission  FROM ems.cand_admission_details where cand_id in ('${rel_cand_id}')`;
                                                    var sql_relieving = `SELECT *,  DATE_FORMAT(date_of_relieving, '%d-%M-%Y') date_of_relieving from ems.cand_relieving_details where cand_id in ('${rel_cand_id}')`;
                                                  }
                                                  db.query(
                                                    sql_admission,
                                                    (err, data_admission) => {
                                                      db.query(
                                                        sql_relieving,
                                                        (
                                                          err,
                                                          data_relieving
                                                        ) => {
                                                          res.render(
                                                            "report_relieving.ejs",
                                                            {
                                                              userData:
                                                                data_admission,
                                                              userData10:
                                                                data_relieving,
                                                              today: today,
                                                              ref: ref,
                                                              userData5: data5,
                                                              indiDate:
                                                                indiDate,
                                                              indiDate1:
                                                                indiDate1,
                                                              rel_date:
                                                                rel_date,
                                                              objDate: objDate,
                                                            }
                                                          );
                                                        }
                                                      );
                                                    }
                                                  );

                                                  break;
                                                case "Bonofide Certificate":
                                                  res.render(
                                                    "report_bonafide_certificate.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData12: data17,
                                                      bon_ref_no: bon_ref_no,
                                                      bon_acad_year:
                                                        bon_acad_year,
                                                      bon_purse: bon_purse,
                                                      bon_stud_year:
                                                        bon_stud_year,
                                                      bon_purpose: bon_purpose,
                                                      bon_pur_others:
                                                        bon_pur_others,
                                                      today: todayy,
                                                    }
                                                  );
                                                  break;
                                                case "Certificate Return Acknowledgment":
                                                  res.render(
                                                    "report_acknowledgement.ejs",
                                                    {
                                                      userData: data1,
                                                      userData2: data2,
                                                      userData3: data18,
                                                      userData4: data4,
                                                      userData27: data27,
                                                      userData13: "",

                                                      ack_date: ack_date,
                                                    }
                                                  );
                                                  break;
                                                case "University Form":
                                                  res.render(
                                                    "report_univ_form.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData2: data2,
                                                      userData4: data9,
                                                      userData4: data4,
                                                      userData5: data8,
                                                      userData8: data12,
                                                      userData12: data17,
                                                    }
                                                  );
                                                  break;
                                                case "Transfer Certificate":
                                                  res.render(
                                                    "report_transfer.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      // userData2: data2,
                                                      userData12: data17,
                                                      // userData13: "",
                                                      tc_reldate: tc_reldate,
                                                      tc_reas: tc_reas,
                                                      tc_mark: tc_mark,
                                                      tc_high: tc_high,
                                                    }
                                                  );
                                                  break;
                                                case "Conduct Certificate":
                                                  res.render(
                                                    "report_conduct.ejs",
                                                    {
                                                      userData: data1,
                                                      cond_csp: cond_csp,
                                                      cond_cep: cond_cep,
                                                      cond_mbbs: cond_mbbs,
                                                      cond_tsp: cond_tsp,
                                                      cond_tep: cond_tep,
                                                      objDate: "",
                                                    }
                                                  );
                                                  break;
                                                case "Scholarship Register":
                                                  res.render(
                                                    "report_scholership.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData2: data2,
                                                      userData8: data12,
                                                    }
                                                  );
                                                  break;
                                                case "Bonofide Register":
                                                  res.render(
                                                    "report_bonafide_register.ejs",
                                                    {
                                                      userData: data1,
                                                      userData1: data,
                                                      userData2: data2,
                                                      userData8: data12,
                                                      userData12: data17,
                                                    }
                                                  );
                                                  break;
                                                case "Report":
                                                  break;

                                                default:
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
                                                  break;
                                              }
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
    });
  });
};
