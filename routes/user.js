const { Console } = require("console");
const { emitKeypressEvents } = require("readline");

const stripe = require("stripe")(
  "sk_test_51HRdnbJuuyDhoKjMEHMO52H4Ddig3EKm26ll74M43kpBanSpnbEynf0AFR3ljgVwX5unc4GpgFpyg41mhFluRGWo00R2oNnQzq"
);
global.crypto = require("crypto");
function convertCryptKey(strKey) {
  var newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  strKey = new Buffer(strKey);
  for (var i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i];
  return newKey;
}

//---------------------------------------------signup page call------------------------------------------------------
exports.add_user = function (req, res) {
  message = "";
  if (req.method == "POST") {
    let x = Math.floor(Math.random() * 100 + 11);
    var post = req.body;
    var name = post.name;
    var emailid = post.emailid;
    var password = post.password;
    var userfirst = name.substring(0, 4);
    var subuserid = "CA" + userfirst + x;
    var userid = subuserid.toUpperCase();
    var user_type = "Assistant";
    var is_active = "yes";
    var salt = "yes";
    var dt = new Date();
    created_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
      .getDate()
      .toString()
      .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
      .getHours()
      .toString()
      .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    last_modified_time = `${(dt.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${dt.getDate().toString().padStart(2, "0")}/${dt
      .getFullYear()
      .toString()
      .padStart(4, "0")} ${dt.getHours().toString().padStart(2, "0")}:${dt
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${dt.getSeconds().toString().padStart(2, "0")}`;

    //hashing
    var c = crypto.createCipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var crypted = c.update(password, "utf8", "hex") + c.final("hex");
    var epass = crypted.toUpperCase();
    console.log(crypted.toUpperCase());
    var dc = crypto.createDecipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var decrypted = dc.update(epass, "hex", "utf8") + dc.final("utf8");
    var dpass = decrypted;

    //Mail

    var sql =
      "Select * from `ems`.`user_details` where `emailid`='" +
      emailid +
      "' or password='" +
      epass +
      "'";
    var query = db.query(sql, function (err, data, message1) {
      if (data.length) {
        message = "Emailid/Password already exists.Please Check!";
        res.render("signup.ejs", { message: message, userData: data });
      } else {
        sql =
          "INSERT INTO `ems`.`user_details`(`user_id`,`name`,`emailid`,`user_type`,`is_active`,`created_time`,`user_name`,`password`,`salt`,`last_modified_time`) VALUES ('" +
          userid +
          "','" +
          name +
          "','" +
          emailid +
          "','" +
          user_type +
          "','" +
          is_active +
          "','" +
          created_time +
          "','" +
          userid +
          "','" +
          epass +
          "','" +
          salt +
          "','" +
          last_modified_time +
          "')";
        query = db.query(sql, function (err, data) {
          message = "New Assistant created!";
          res.render("signup.ejs", { message: message, userData: data });
        });
      }
    });
  } else {
    res.render("signup.ejs");
  }
};

//-----------------------------------------------login page call------------------------------------------------------
exports.login = function (req, res) {
  var message = "";
  var sess = req.session;

  if (req.method == "POST") {
    var post = req.body;
    var username = post.user_name;
    var usertype = username.substring(0, 2);
    var pass = post.password;
    console.log(pass);
    //hashing
    var c = crypto.createCipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var crypted = c.update(pass, "utf8", "hex") + c.final("hex");
    var epass = crypted.toUpperCase();
    console.log("epass:" + crypted.toUpperCase());
    var dc = crypto.createDecipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var decrypted = dc.update(epass, "hex", "utf8") + dc.final("utf8");
    var dpass = decrypted;
    console.log(decrypted);
    var sql;
    if (usertype == "ad") {
      sql =
        "SELECT * FROM `ems`.`user_details` WHERE `user_name`='" +
        username +
        "' and password = '" +
        epass +
        "'";
      db.query(sql, function (err, results) {
        if (results.length) {
          req.session.userId = results[0].user_id;
          req.session.user = results[0];
          message = "Welcome!";
          res.render("admin_board.ejs", { message: message });
        } else {
          message = "Incorrect! Username or Password";
          res.render("index.ejs", { message: message });
        }
      });
    } else if (usertype == "CA") {
      sql =
        "SELECT * FROM `ems`.`user_details` WHERE `user_name`='" +
        username +
        "' and password = '" +
        epass +
        "'";
      db.query(sql, function (err, results) {
        if (results.length) {
          req.session.userId = results[0].user_id;
          req.session.user = results[0];
          console.log("userid: " + results[0].user_id);
          message = "Welcome! Assistant";
          res.render("ic_board.ejs", { message: message });
        } else {
          message = "Incorrect! Username or Password";
          res.render("index.ejs", { message: message });
        }
      });
    } else {
      message = "Incorrect! Username or Password";
      res.render("index.ejs", { message: message });
    }
  } else {
    res.render("index.ejs", { message: message });
  }
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.icdashboard = function (req, res, next) {
  var message = "";
  var user = req.session.user,
    userId = req.session.userId;
  console.log("ddd=" + userId);
  if (userId == null) {
    res.redirect("/login");
    return;
  }
  sql =
    "SELECT * FROM `training`.`commissioner` WHERE `userid`='" + userId + "'";
  db.query(sql, function (err, results) {
    if (results.length) {
      req.session.firstname = results[0].firstname;
      req.session.lastname = results[0].lastname;
      var firstname = results[0].firstname;
      var lastname = results[0].lastname;
      fullname = firstname + " " + lastname;
      var sql =
        "SELECT * FROM `training`.`commissioner` WHERE `userid`='" +
        userId +
        "'";

      db.query(sql, function (err, result) {
        res.render("ic_board.ejs", { message: message, message5: fullname });
      });
    }
  });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.loginpage = function (req, res, next) {
  var message = "";
  res.render("login.ejs", { message: message });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.view_report = function (req, res, next) {
  var post = req.body;
  var cand_id = post.cand_id;
  var message = cand_id;
  res.render("myreports.ejs", { message: message });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.mbbs_board = (req, res) => {
  var message = "";
  // var userId = req.session.userId;
  var sql = `SELECT * FROM ems.cand_admission_details where (course,active_status) =('MBBS','Yes') and cand_id in (select cand_id from ems.cand_relieving_details where relieved = 'Yes')`;
  db.query(sql, function (err, data27) {
    var sql = `SELECT * FROM ems.cand_fees where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes')) `;
    db.query(sql, function (err, data26) {
      var sql15 = `SELECT * FROM ems.cand_neet_mark_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
      db.query(sql15, function (err, data19) {
        var sql14 = `SELECT * FROM ems.cand_marks_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
        db.query(sql14, function (err, data18) {
          var sql13 = `SELECT * FROM ems.cand_institute_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
          db.query(sql13, function (err, data17) {
            var sql11 = `select * from ems.cand_relieving_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
            db.query(sql11, function (err, data16) {
              var sql9 = `SELECT * FROM ems.certificate_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))  AND active_flag ='Y'`;
              db.query(sql9, function (err, data15) {
                var sql8 = `SELECT * FROM ems.cand_contact_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
                db.query(sql8, function (err, data14) {
                  var sql7 = `SELECT * FROM ems.cand_bank_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
                  db.query(sql7, function (err, data13) {
                    var sql3 = `SELECT * FROM ems.biometric_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes')) AND active_flag ='Y'`;
                    db.query(sql3, function (err, data12) {
                      var sql2 = `SELECT * FROM ems.cand_address_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
                      db.query(sql2, function (err, data11) {
                        var sql = `SELECT * FROM ems.state_details`;
                        db.query(sql, function (err, data10) {
                          var sql = `SELECT * FROM ems.admiss_type`;
                          db.query(sql, function (err, data8) {
                            var sql = `SELECT * FROM ems.admiss_quota`;
                            db.query(sql, function (err, data7) {
                              var sql = `SELECT * FROM ems.community_details`;
                              db.query(sql, function (err, data6) {
                                var sql = `SELECT * FROM ems.nation_details`;
                                db.query(sql, function (err, data5) {
                                  var sql = `SELECT * FROM ems.religion_details`;
                                  db.query(sql, function (err, data4) {
                                    var sql = `SELECT * FROM ems.no_delete`;
                                    db.query(sql, function (err, data3) {
                                      var sql = `SELECT * FROM ems.cand_profile_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MBBS','Yes'))`;
                                      db.query(sql, function (err, data1) {
                                        var sql = `SELECT * FROM ems.cand_admission_details where (course, active_status) =('MBBS','Yes')`;
                                        db.query(sql, function (err, data) {
                                          res.render("mbbs_viewstudent.ejs", {
                                            message: message,
                                            userData: data,
                                            userData1: data1,
                                            userData3: data3,
                                            userData4: data4,
                                            userData5: data5,
                                            userData6: data6,
                                            userData7: data7,
                                            userData8: data8,
                                            userData10: data10,
                                            userData11: data11,
                                            userData12: data12,
                                            userData13: data13,
                                            userData14: data14,
                                            userData15: data15,
                                            userData16: data16,
                                            userData17: data17,
                                            userData18: data18,
                                            userData19: data19,
                                            userData26: data26,
                                            userData27: data27,
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

exports.mdms_board = function (req, res) {
  var message = "";
  console.log("course", res);
  var userId = req.session.userId;
  var post = req.body;
  var cand_id = post.cand_id;
  var sql = `SELECT * FROM ems.cand_admission_details where (course,active_status) =('MDMS','Yes') and cand_id in (select cand_id from ems.cand_relieving_details where relieved = 'Yes')`;
  db.query(sql, function (err, data27) {
    var sql = `SELECT * FROM ems.cand_fees where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes')) `;
    db.query(sql, function (err, data26) {
      var sql18 = `SELECT * FROM ems.cand_institute_details_mdms where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
      db.query(sql18, function (err, data25) {
        var sql17 = `SELECT * FROM ems.cand_academic_mdms_2 where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
        db.query(sql17, function (err, data24) {
          var sql16 = `SELECT * FROM ems.cand_academic_mdms_1 where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
          db.query(sql16, function (err, data23) {
            var sql15 = `SELECT * FROM ems.cand_academic_mdms where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
            db.query(sql15, function (err, data22) {
              var sql14 = `SELECT * FROM ems.cand_neet_marks_mdms where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
              db.query(sql14, function (err, data21) {
                var sql12 = `SELECT * FROM ems.cand_surety_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                db.query(sql12, function (err, data20) {
                  var sql11 = `select * from ems.cand_relieving_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                  db.query(sql11, function (err, data16) {
                    var sql9 = `SELECT * FROM ems.certificate_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))  AND active_flag ='Y'`;
                    db.query(sql9, function (err, data15) {
                      var sql8 = `SELECT * FROM ems.cand_contact_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                      db.query(sql8, function (err, data14) {
                        var sql7 = `SELECT * FROM ems.cand_bank_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                        db.query(sql7, function (err, data13) {
                          var sql3 = `SELECT * FROM ems.biometric_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes')) AND active_flag ='Y'`;
                          db.query(sql3, function (err, data12) {
                            var sql2 = `SELECT * FROM ems.cand_address_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                            db.query(sql2, function (err, data11) {
                              var sql = `SELECT * FROM ems.state_details`;
                              db.query(sql, function (err, data10) {
                                var sql = `SELECT * FROM ems.admiss_type`;
                                db.query(sql, function (err, data8) {
                                  var sql = `SELECT * FROM ems.admiss_quota`;
                                  db.query(sql, function (err, data7) {
                                    var sql = `SELECT * FROM ems.community_details`;
                                    db.query(sql, function (err, data6) {
                                      var sql = `SELECT * FROM ems.nation_details`;
                                      db.query(sql, function (err, data5) {
                                        var sql = `SELECT * FROM ems.religion_details`;
                                        db.query(sql, function (err, data4) {
                                          var sql = `SELECT * FROM ems.no_delete`;
                                          db.query(sql, function (err, data3) {
                                            var sql = `SELECT * FROM ems.cand_profile_details where cand_id in (select cand_id from cand_admission_details where (course, active_status) =('MDMS','Yes'))`;
                                            db.query(
                                              sql,
                                              function (err, data1) {
                                                var sql = `SELECT * FROM ems.cand_admission_details where (course, active_status) =('MDMS','Yes')`;
                                                db.query(
                                                  sql,
                                                  function (err, data) {
                                                    res.render(
                                                      "mdms_viewstudent.ejs",
                                                      {
                                                        message: message,
                                                        userData: data,
                                                        userData1: data1,
                                                        userData3: data3,
                                                        userData4: data4,
                                                        userData5: data5,
                                                        userData6: data6,
                                                        userData7: data7,
                                                        userData8: data8,
                                                        userData10: data10,
                                                        userData11: data11,
                                                        userData12: data12,
                                                        userData13: data13,
                                                        userData14: data14,
                                                        userData15: data15,
                                                        userData16: data16,
                                                        userData20: data20,
                                                        userData21: data21,
                                                        userData22: data22,
                                                        userData23: data23,
                                                        userData24: data24,
                                                        userData25: data25,
                                                        userData26: data26,
                                                        userData27: data27,
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
  });
};

//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.icboard = function (req, res, next) {
  var message = "";
  res.render("ic_board.ejs", { message: message });
};

//---------------------------------------------Create Student page call------------------------------------------------------
exports.pwdrecovery = function (req, res) {
  message = "";
  if (req.method == "POST") {
    var post = req.body;
    var userId = post.userid;
    var emailid = post.emailid;
    var name = userId.substring(1, 5);
    var pass = post.password;

    var usertype = userId.substring(0, 2);
    var sql;

    console.log(name);
    console.log(usertype);
    console.log(pass);

    if (1) {
      //Parent Login
      if (usertype == "EM") {
        sql =
          "SELECT * FROM `training`.`employee` WHERE `userid`='" +
          userId +
          "' AND `emailid`='" +
          emailid +
          "'";
        db.query(sql, function (err, results) {
          if (results.length) {
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.render("gennotice.ejs", { data: results });
          } else {
            message = "Incorrrect! Either UserID or Email ID ";
            res.render("index.ejs", { message: message });
          }
        });
      }
      //Student Login
      else if (usertype == "TU") {
        sql =
          "SELECT * FROM `training`.`tutor` WHERE `userid`='" +
          userId +
          "' AND `emailid`='" +
          emailid +
          "'";
        db.query(sql, function (err, results) {
          if (results.length) {
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.render("gennotice.ejs", { data: results });
          } else {
            message = "Incorrrect! Either UserID or Email ID ";
            res.render("index.ejs", { message: message });
          }
        });
      }
      //Teacher Login
      else if (usertype == "IC") {
        sql =
          "SELECT * FROM `training`.`commissioner` WHERE `userid`='" +
          userId +
          "' AND `emailid`='" +
          emailid +
          "'";
        db.query(sql, function (err, results) {
          if (results.length) {
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);

            res.render("gennotice.ejs", { data: results });
          } else {
            message = "Incorrrect! Either UserID or Email ID";
            res.render("forgotpwd.ejs", { message: message });
          }
        });
      } else if (usertype == "AD") {
        sql =
          "SELECT * FROM `training`.`admin` WHERE `userid`='" +
          userId +
          "' AND `emailid`='" +
          emailid +
          "'";
        db.query(sql, function (err, results) {
          if (results.length) {
            req.session.userId = results[0].id;
            req.session.user = results[0];
            console.log(results[0].id);
            res.render("gennotice.ejs", { data: results });
          } else {
            message = "Incorrrect! Either UserID or Email ID ";
            res.render("index.ejs", { message: message });
          }
        });
      }
    }
  } else {
    res.render("index.ejs");
  }
};
//---------------------------------------------Create Student page call------------------------------------------------------
exports.pwdupdate = function (req, res) {
  message = "";
  if (req.method == "POST") {
    var post = req.body;
    var first_name = post.first_name;
    var user_id = post.userid;
    var emailid = post.emailid;
    var password = post.password;
    var loginlink = "#";
    //hashing
    var dc = crypto.createDecipheriv(
      "aes-128-ecb",
      convertCryptKey("myPassword"),
      ""
    );
    var decrypted = dc.update(password, "hex", "utf8") + dc.final("utf8");
    var dpass = decrypted;

    var mailhead = "EMS-Account recovery details";
    var mailbody = "UserID: " + user_id + " | Password: " + dpass;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mmmm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mmmm + "-" + dd;
    var requestdate = today;
    //Mail
    var fromaddress = "sample@email.com";
    var toaddress = emailid;
    var mailsubject = mailhead;
    var mailmessage = mailbody;

    var nodemailer = require("nodemailer");
    var transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      auth: {
        user: "sample@email.com",
        pass: "Radservice123!",
      },
    });

    var mailOptions = {
      from: fromaddress,
      to: toaddress,
      subject: mailsubject,
      text: mailmessage,

      html:
        "<h3>Dear " +
        first_name +
        ",</h3><p>Your <b>EMS</b> Account recovery has been done.</p><p>At " +
        emailid +
        ", we help you to recover your password.</p><p><b>Your secure password:</b> " +
        dpass +
        '<br/><h4>Please log in to your account using <a href="' +
        loginlink +
        '">login link</a> </h4><br/>If you have any questions, please visit http://34.245.185.190/</p><br/><p>Kind regards,</p><p><b>EMS</b></p><p>http://34.245.185.190/</p>',
    };
    var sql =
      "insert INTO `tuition`.`account` (`userid`,`emailid`,`password`, `requestdate`) VALUES ('" +
      user_id +
      "','" +
      emailid +
      "','" +
      password +
      "','" +
      requestdate +
      "')";

    var query = db.query(sql, function (err, result) {
      message = "Password recovered! Sent to your mail.";
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.render("gennotice1.ejs", { message: message });
    });
  } else {
    res.render("index.ejs");
  }
};

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
};

//--------------------------------Main signup page--------------------------------
exports.signuphome = function (req, res) {
  var message = "";
  var sql = "select distinct category  from `training`.`courses`";
  db.query(sql, function (err, data, message1) {
    res.render("signup.ejs", {
      message1: message,
      userData: data,
      message: message,
    });
  });
};
//--------------------------------Main signup page--------------------------------
exports.forgotpwd = function (req, res) {
  var message = "";
  res.render("forgotpwd.ejs", { message: message });
};
