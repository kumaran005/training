const { emitKeypressEvents } = require('readline');

const stripe = require('stripe')('sk_test_51HRdnbJuuyDhoKjMEHMO52H4Ddig3EKm26ll74M43kpBanSpnbEynf0AFR3ljgVwX5unc4GpgFpyg41mhFluRGWo00R2oNnQzq');
global.crypto = require('crypto')
function convertCryptKey(strKey) {
   var newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
   strKey = new Buffer(strKey);
   for (var i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i];
   return newKey;
}


//---------------------------------------------signup page call------------------------------------------------------
exports.icsignup = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var x = Math.floor((Math.random() * 100) + 11);
      var post = req.body;
      var fname = post.fname;
      var mname = post.mname;
      var lname = post.lname;
      var emailid = post.emailid;
      var phone = post.mobile;
      var department = post.department;
      var division = post.department;
      var password = post.password;
      var usershort = fname.substring(0, 4);
      var user_name = usershort;
      var userid = "ic" + user_name + x;

      var sql = "INSERT INTO `training`.`commissioner`(`userid`,`firstname`,`middlename`,`lastname`,`emailid`,`phone`, `department`,`division`,`password`) VALUES ('" + userid + "','" + fname + "','" + mname + "','" + lname + "','" + emailid + "','" + phone + "','" + department + "','" + division + "','" + password + "')";

      var query = db.query(sql, function (err, result) {

         message = "Successfully! Your account has been created.";
         res.render('loginpage.ejs', { message: message });
      });

   } else {
      res.render('signup');
   }
};


//---------------------------------------------signup page call------------------------------------------------------
exports.collect_fees = function (req, res) {
   var message = '';
   if (req.method == "POST") {
      var post = req.body;
      var cand_id = post.cand_id;
      var tution_fee = parseInt(post.tution_fee);
      var special_fee = parseInt(post.special_fee);
      var medical_fee = parseInt(post.medical_fee);
      var caution_fee = parseInt(post.caution_fee);
      var lib_fee = parseInt(post.lib_fee);
      var univ_fee = parseInt(post.univ_fee);
      var lic_fee = parseInt(post.lic_fee);
      var red_fee = parseInt(post.red_fee);
      var mis_fee = parseInt(post.mis_fee);
      var flag_fee = parseInt(post.flag_fee);
      var total_fee = tution_fee + special_fee + medical_fee + caution_fee + lib_fee + univ_fee + lic_fee + red_fee + mis_fee + flag_fee;
      var dt = new Date();
      //    registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
      last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;

      sql = "SELECT * FROM `ems`.`cand_fees` WHERE `cand_id`='" + cand_id +"'";
      db.query(sql, function (err, results) {
         if (results.length) {
                
               var sql11 = "SELECT * FROM `ems`.`cand_fees` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql11, function (err, data11) {
               var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql10, function (err, data10) {
                  var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql9, function (err, data9) {
                     var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql8, function (err, data8) {
                        var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql7, function (err, data7) {
                           var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql6, function (err, data6) {
                              var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql5, function (err, data5) {
                                 var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql4, function (err, data4) {
                                    var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                                    db.query(sql3, function (err, data3) {
                                       var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                                       db.query(sql2, function (err, data2) {
                                          var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                                          db.query(sql1, function (err, data1) {
                                             var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                             db.query(sql, function (err, data) {
                                                message = "Invalid! Fees Paid Already.";
                                                res.render('mbbs_viewcand.ejs', { message: message,userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10,userData11: data11 });
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
         else{

            var sql = "INSERT INTO `ems`.`cand_fees`(`cand_id`,`tution_fee`,`special_fee`,`medical_fee`,`caution_fee`,`lib_fee`,`univ_fee`,`lic_fee`,`red_fee`,`mis_fee`,`flag_fee`,`total_fee`,`last_modified_time`) VALUES ('" + cand_id + "','" + tution_fee + "','" + special_fee + "','" + medical_fee + "','" + caution_fee + "','" + lib_fee + "','" + univ_fee + "','" + lic_fee + "','" + red_fee + "','" + mis_fee + "','" + flag_fee + "','" + total_fee + "','" + last_modified_time + "')";
      var query = db.query(sql, function (err, result) {

         var sql11 = "SELECT * FROM `ems`.`cand_fees` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql11, function (err, data11) {
         var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql10, function (err, data10) {
            var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql9, function (err, data9) {
               var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql8, function (err, data8) {
                  var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql7, function (err, data7) {
                     var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql6, function (err, data6) {
                        var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql5, function (err, data5) {
                           var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql4, function (err, data4) {
                              var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql3, function (err, data3) {
                                 var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql2, function (err, data2) {
                                    var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                                    db.query(sql1, function (err, data1) {
                                       var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                       db.query(sql, function (err, data) {
                                          message = "Fees Paid Successfully!.";
                                          res.render('report2.ejs', { message: message,userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10,userData11: data11 });
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
      });
   
   } else {
      res.render('mbbs_viewcand.ejs', { message: message });
   }
};

//---------------------------------------------signup page call------------------------------------------------------
exports.add_candidate = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var user = req.session.user,
         userId = req.session.userId;
      console.log('ddd=' + userId);
      if (userId == null) {
         res.redirect("/login");
         return;
      }
      var x = Math.floor((Math.random() * 2) + 1);
      var post = req.body;

      //for profile tab
      var name = post.full_name;
      var userfirst = name.substring(0, 4);
      var cand_id = userfirst + x;
      var initial = post.initial;
      var initial_expansion = post.initial_expansion;
      var father_name = post.father_name;
      var mother_name = post.mother_name;
      var date_of_birth = post.date_of_birth;
      var gender = post.gender;
      var blood_group = post.blood_group;
      var religion = post.religion;
      var community = post.community;
      var caste = post.caste;
      var nationality = post.nationality;
      var willing_to_donate_blood = post.willing_to_donate_blood;
      var registered_time = '';
      var last_modified_time = '';
      var academic_year = post.academic_year;
      var student_code = post.student_code;
      var dt = new Date();
      registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
      last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;

      //for audit 
      var event_name = 'Adding_Student_MBBS';
      var current_user = cand_id;
      var user_agent = userId;
      var audited_time = registered_time;

      //for admission tab
      var rank = post.rank;
      var rank_no = post.rank_no;
      var ar_no = post.ar_no;
      var total_mark = post.total_mark;
      var neet_mark = post.neet_mark;
      var reg_no = post.reg_no;
      var neet_roll_no = post.neet_roll_no;
      var course = post.course;
      var admission_type = post.admission_type;
      var admission_quota = post.admission_quota;
      var course_commencement = post.course_commencement;
      var date_of_admission = post.date_of_admission;
      var date_of_allotment = post.date_of_allotment;
      var selected_category = post.selected_category;
      var willing_for_counciling = post.willing_for_counciling;

      //for address tab
      var ps_address = post.ps_address;
      var ps_pincode = post.ps_pincode;
      var ps_state = post.ps_state;
      var ps_district = post.ps_district;
      var pm_address = post.pm_address;
      var pm_pincode = post.pm_pincode;
      var pm_state = post.pm_state;
      var pm_district = post.pm_district;
      var address_type = '';
      if (ps_address == pm_address) {
         address_type = '1';
      }
      else {
         address_type = '0';
      }
      //for contact tab
      var tel_phone = post.tel_phone;
      var mobile_phone = post.mobile_phone;
      var email_id = post.email_id;
      var aadhar_no = post.aadhar_no;
      var voter_id = post.voter_id;
      var remarks = post.remarks;

      // for institute tab
      var institute_name = post.institute_name;
      var place = post.place;
      var register_no = post.register_no;
      var exam_passed = post.exam_passed;
      var relieving_date = post.relieving_date;
      var district = post.district;
      var board = post.board;
      var month_of_passing = post.month_of_passing;
      var state = post.state;
      var year_of_passing = post.year_of_passing;
      var duration = post.duration;

      //for mark details
      var lang_theory = post.lang_theory;
      var lang_practical = post.lang_practical;
      var lang_internal = post.lang_internal;
      var lang_total = post.lang_total;
      var lang_max = post.lang_max;
      var eng_theory = post.eng_theory;
      var eng_practical = post.eng_practical;
      var eng_internal = post.eng_internal;
      var eng_total = post.eng_total;
      var eng_max = post.eng_max;
      var mat_theory = post.mat_theory;
      var mat_practical = post.mat_practical;
      var mat_internal = post.mat_internal;
      var mat_total = post.mat_total;
      var mat_max = post.mat_max;
      var phy_theory = post.phy_theory;
      var phy_practical = post.phy_practical;
      var phy_internal = post.phy_internal;
      var phy_total = post.phy_total;
      var phy_max = post.phy_max;

      var chem_theory = post.chem_theory;
      var chem_practical = post.chem_practical;
      var chem_internal = post.chem_internal;
      var chem_total = post.chem_total;
      var chem_max = post.chem_max;
      var bio_theory = post.bio_theory;
      var bio_practical = post.bio_practical;
      var bio_internal = post.bio_internal;
      var bio_total = post.bio_total;
      var bio_max = post.bio_max;
      var bot_theory = post.bot_theory;
      var bot_practical = post.bot_practical;
      var bot_internal = post.bot_internal;
      var bot_total = post.bot_total;
      var bot_max = post.bot_max;

      var zoo_theory = post.zoo_theory;
      var zoo_practical = post.zoo_practical;
      var zoo_internal = post.zoo_internal;
      var zoo_total = post.zoo_total;
      var zoo_max = post.zoo_max;
      var lang_paper = post.lang_paper;

      var subj_code = post.subj_code;
      var total_mark_m = post.total_mark_m;
      var max_mark = post.max_mark;

      // for neet details
      var phy_neet_mark = post.phy_neet_mark;
      var chem_neet_mark = post.chem_neet_mark;
      var bio_neet_mark = post.bio_neet_mark;
      var agg_neet_mark = post.agg_neet_mark;
      var phy_neet_max = post.phy_neet_max;
      var chem_neet_max = post.chem_neet_max;
      var bio_neet_max = post.bio_neet_max;
      var agg_neet_max = post.agg_neet_max;

      //for bank details
      var account_no = post.account_no;
      var ifsc = post.ifsc;
      var bank_name = post.bank_name;
      var pan_no = post.pan_no;
      var micr = post.micr;
      var branch_name = post.branch_name;

      var sql = "SELECT * FROM `ems`.`user_details`;"
      db.query(sql, function (err, data) {
         var sql = "INSERT INTO `ems`.`cand_profile_details`(`cand_id`,`name`,`initial`,`initial_expansion`,`father_name`,`mother_name`,`date_of_birth`,`gender`,`blood_group`,`religion`,`community`,`caste`,`nationality`,`willing_to_donate_blood`,`registered_time`,`last_modified_time`,`academic_year`,`student_code`) VALUES ('" + cand_id + "','" + name + "','" + initial + "','" + initial_expansion + "','" + father_name + "','" + mother_name + "','" + date_of_birth + "','" + gender + "','" + blood_group + "','" + religion + "','" + community + "','" + caste + "','" + nationality + "','" + willing_to_donate_blood + "','" + registered_time + "','" + last_modified_time + "','" + academic_year + "','" + student_code + "')";
         query = db.query(sql, function (err, data) {
            var sql = "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`last_modified_time`) VALUES ('" + cand_id + "','" + rank + "','" + rank_no + "','" + ar_no + "','" + total_mark + "','" + neet_mark + "','" + reg_no + "','" + neet_roll_no + "','" + course + "','" + admission_type + "','" + admission_quota + "','" + course_commencement + "','" + date_of_admission + "','" + date_of_allotment + "','" + selected_category + "','" + willing_for_counciling + "','" + last_modified_time + "')";
            query = db.query(sql, function (err, data) {
               var sql = "INSERT INTO `ems`.`cand_address_details`(`cand_id`,`address_type`,`ps_address`,`ps_pincode`,`ps_state`,`ps_district`,`pm_address`,`pm_pincode`,`pm_state`,`ps_district`,`last_modified_time`) VALUES ('" + cand_id + "','" + address_type + "','" + ps_address + "','" + ps_pincode + "','" + ps_state + "','" + ps_district + "','" + pm_address + "','" + pm_pincode + "','" + pm_state + "','" + pm_district + "','" + last_modified_time + "')";
               query = db.query(sql, function (err, data) {
                  var sql = "INSERT INTO `ems`.`cand_contact_details`(`cand_id`,`tel_phone`,`mobile_phone`,`email_id`,`aadhar_no`,`voter_id`,`remarks`,`last_modified_time`) VALUES ('" + cand_id + "','" + tel_phone + "','" + mobile_phone + "','" + email_id + "','" + aadhar_no + "','" + voter_id + "','" + remarks + "','" + last_modified_time + "')";
                  query = db.query(sql, function (err, data) {
                     var sql = "INSERT INTO `ems`.`audit_trail`(`event_name`,`current_user`,`audited_time`,`user_agent`) VALUES ('" + event_name + "','" + current_user + "','" + audited_time + "','" + user_agent + "')";
                     query = db.query(sql, function (err, data) {

                        message = "New Candidate created!";
                        res.render('mbbs_board.ejs', { message: message, userData: data });
                     });
                  });
               });
            });
         });
      });

   } else {
      message = 'Try Again! Error Occured';
      res.render('mbbs_board.ejs', { message: message, userData: data });
   }
};

//---------------------------------------------signup page call------------------------------------------------------
exports.add_user = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var x = Math.floor((Math.random() * 100) + 11);
      var post = req.body;
      var name = post.name;
      var emailid = post.emailid;
      var password = post.password;
      var userfirst = name.substring(0, 4);
      var subuserid = "CA" + userfirst + x;
      var userid = subuserid.toUpperCase();
      var user_type = 'Assistant';
      var is_active = 'yes';
      var salt = 'yes';
      var dt = new Date();
      created_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
      last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;


      //hashing 
      var c = crypto.createCipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
      var crypted = c.update(password, 'utf8', 'hex') + c.final('hex');
      var epass = crypted.toUpperCase();
      console.log(crypted.toUpperCase());
      var dc = crypto.createDecipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
      var decrypted = dc.update(epass, 'hex', 'utf8') + dc.final('utf8');
      var dpass = decrypted;

      //Mail 

      var sql = "Select * from `ems`.`user_details` where `emailid`='" + emailid + "' or password='" + epass + "'";
      var query = db.query(sql, function (err, data, message1) {
         if (data.length) {
            message = "Emailid/Password already exists.Please Check!";
            res.render('signup.ejs', { message: message, userData: data });

         }
         else {
            sql = "INSERT INTO `ems`.`user_details`(`user_id`,`name`,`emailid`,`user_type`,`is_active`,`created_time`,`user_name`,`password`,`salt`,`last_modified_time`) VALUES ('" + userid + "','" + name + "','" + emailid + "','" + user_type + "','" + is_active + "','" + created_time + "','" + userid + "','" + epass + "','" + salt + "','" + last_modified_time + "')";
            query = db.query(sql, function (err, data) {

               message = "New Assistant created!";
               res.render('signup.ejs', { message: message, userData: data });

            });
         }

      });

   } else {
      res.render('signup.ejs');
   }
};

//-----------------------------------------------login page call------------------------------------------------------
exports.login = function (req, res) {
   var message = '';
   var sess = req.session;

   if (req.method == "POST") {
      var post = req.body;
      var username = post.user_name;
      var usertype = username.substring(0, 2);
      var pass = post.password;
      console.log(pass);
      //hashing 
      var c = crypto.createCipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
      var crypted = c.update(pass, 'utf8', 'hex') + c.final('hex');
      var epass = crypted.toUpperCase();
      console.log('epass:' + crypted.toUpperCase());
      var dc = crypto.createDecipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
      var decrypted = dc.update(epass, 'hex', 'utf8') + dc.final('utf8');
      var dpass = decrypted;
      console.log(decrypted);
      var sql;
      if (usertype == "ad") {
         sql = "SELECT * FROM `ems`.`user_details` WHERE `user_name`='" + username + "' and password = '" + epass + "'";
         db.query(sql, function (err, results) {
            if (results.length) {
               req.session.userId = results[0].user_id;
               req.session.user = results[0];
               message = "Welcome!";
               res.render('admin_board.ejs', { message: message });
            }
            else {
               message = 'Incorrect! Username or Password';
               res.render('index.ejs', { message: message });
            }

         });
      }
      else if (usertype == "CA") {
         sql = "SELECT * FROM `ems`.`user_details` WHERE `user_name`='" + username + "' and password = '" + epass + "'";
         db.query(sql, function (err, results) {
            if (results.length) {
               req.session.userId = results[0].user_id;
               req.session.user = results[0];
               console.log('userid: ' + results[0].user_id);
               message = "Welcome! Assistant";
               res.render('ic_board.ejs', { message: message });
            }
            else {
               message = 'Incorrect! Username or Password';
               res.render('index.ejs', { message: message });
            }

         });
      }
      else {
         message = 'Incorrect! Username or Password';
         res.render('index.ejs', { message: message });
      }

   } else {
      res.render('index.ejs', { message: message });
   }

};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.icdashboard = function (req, res, next) {
   var message = "";
   var user = req.session.user,
      userId = req.session.userId;
   console.log('ddd=' + userId);
   if (userId == null) {
      res.redirect("/login");
      return;
   }
   sql = "SELECT * FROM `training`.`commissioner` WHERE `userid`='" + userId + "'";
   db.query(sql, function (err, results) {
      if (results.length) {
         req.session.firstname = results[0].firstname;
         req.session.lastname = results[0].lastname;
         var firstname = results[0].firstname;
         var lastname = results[0].lastname;
         fullname = firstname + ' ' + lastname;
         var sql = "SELECT * FROM `training`.`commissioner` WHERE `userid`='" + userId + "'";

         db.query(sql, function (err, result) {
            res.render('ic_board.ejs', { message: message, message5: fullname });
         });
      }
   });
};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.loginpage = function (req, res, next) {
   var message = "";
   res.render('login.ejs', { message: message });

};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.view_report = function (req, res, next) {
   var post = req.body;
   var cand_id = post.cand_id;
   var message =cand_id;
   res.render('myreports.ejs', { message: message });

};
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.reli_check = function (req, res, next) {
   var post = req.body;
   var message = "";
   var reli_info=post.reli_info;
   console.log('Relieving info: '+reli_info);
   if(reli_info=='All')
   {
      var sql = "SELECT * FROM `ems`.`admiss_type`;"
       db.query(sql, function (err, data8) {   
       var sql = "SELECT * FROM `ems`.`admiss_quota`;"
        db.query(sql, function (err, data7) {   
        var sql = "SELECT * FROM `ems`.`community_details`;"
          db.query(sql, function (err, data6) {   
            var sql = "SELECT * FROM `ems`.`nation_details`;"
      db.query(sql, function (err, data5) {
      var sql = "SELECT * FROM `ems`.`religion_details`;"
      db.query(sql, function (err, data4) {
      var sql = "SELECT * FROM `ems`.`no_delete`;"
      db.query(sql, function (err, data3) {
      var sql = "SELECT * FROM `ems`.`cand_profile_details`;"
      db.query(sql, function (err, data1) {
         var sql = "SELECT * FROM `ems`.`cand_admission_details`;"
         db.query(sql, function (err, data) {
            res.render('reli_page.ejs', { userData: data, userData1: data1, userData3: data3, userData4: data4, userData5: data5,userData6: data6, userData7: data7,userData8: data8,message: message });
         });
      });
   });
});
      });
      });
   });
});
   }
   else
   {         var sql = "SELECT * FROM `ems`.`state_details`;"
   db.query(sql, function (err, data10) {  
      var sql = "SELECT * FROM `ems`.`admiss_type`;"
      db.query(sql, function (err, data8) {   
      var sql = "SELECT * FROM `ems`.`admiss_quota`;"
       db.query(sql, function (err, data7) {   
       var sql = "SELECT * FROM `ems`.`community_details`;"
         db.query(sql, function (err, data6) { 
      var sql = "SELECT * FROM `ems`.`nation_details`;"
      db.query(sql, function (err, data5) {
      var sql = "SELECT * FROM `ems`.`religion_details`;"
      db.query(sql, function (err, data4) {
      var sql = "SELECT * FROM `ems`.`no_delete`;"
         db.query(sql, function (err, data3) {
         var sql = "SELECT * FROM `ems`.`cand_profile_details`;"
         db.query(sql, function (err, data1) {
            var sql = "SELECT * FROM `ems`.`cand_admission_details` INNER JOIN `ems`.`cand_relieving_details` on `cand_admission_details`.`cand_id` =`cand_relieving_details`.`cand_id`  where `cand_relieving_details`.`relieved` = '" + reli_info + "'";
             db.query(sql, function (err, data) {
            res.render('reli_page.ejs', { userData: data, userData1: data1, userData3: data3,userData4: data4, userData5: data5,userData6: data6, userData7: data7, userData8: data8,userData10: data1,  message: message });
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
//-----------------------------------------------dashboard page functionality----------------------------------------------

exports.report1 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report1.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report2 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;
   var sql11 = "SELECT * FROM `ems`.`cand_fees` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql11, function (err, data11) {
   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report2.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10, userData11: data11 });
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

exports.report3 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report3.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report4 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report4.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report5 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report5.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report6 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report6.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report7 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report7.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report8 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report8.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report9 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report9.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.report10 = function (req, res, next) {
   var post = req.body;
   var message = "";
   var cand_id=post.cand_id;

   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('report10.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10 });
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

exports.mbbs_board = function (req, res, next) {
   var message = '';
   var userId = req.session.userId;
   var sql = "SELECT * FROM `ems`.`state_details`;"
   db.query(sql, function (err, data10) { 
   var sql = "SELECT * FROM `ems`.`community_details`;"
   db.query(sql, function (err, data6) {
      var sql = "SELECT * FROM `ems`.`admiss_type`;"
      db.query(sql, function (err, data8) {   
      var sql = "SELECT * FROM `ems`.`admiss_quota`;"
      db.query(sql, function (err, data7) {   
   var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` ";
   db.query(sql9, function (err, data9) {
   var sql = "SELECT * FROM `ems`.`nation_details`;"
   db.query(sql, function (err, data5) {
   var sql = "SELECT * FROM `ems`.`religion_details`;"
   db.query(sql, function (err, data4) {
   var sql = "SELECT * FROM `ems`.`no_delete`;"
   db.query(sql, function (err, data3) {
   var sql = "SELECT * FROM `ems`.`cand_profile_details`;"
   db.query(sql, function (err, data1) {
      var sql = "SELECT * FROM `ems`.`cand_admission_details` where course = 'MBBS' ;"
      db.query(sql, function (err, data) {
         res.render('mbbs_viewstudent.ejs', { userData: data, userData1: data1, userData3: data3, userData4: data4, userData5: data5, userData6: data6,userData7: data7,userData8: data8,userData9: data9,userData10: data10,message: message });
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
   res.render('ic_board.ejs', { message: message });

};

//---------------------------------------------Create Student page call------------------------------------------------------
exports.pwdrecovery = function (req, res) {
   message = '';
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


            sql = "SELECT * FROM `training`.`employee` WHERE `userid`='" + userId + "' AND `emailid`='" + emailid + "'";
            db.query(sql, function (err, results) {
               if (results.length) {
                  req.session.userId = results[0].id;
                  req.session.user = results[0];
                  console.log(results[0].id);
                  res.render('gennotice.ejs', { data: results });
               }
               else {
                  message = 'Incorrrect! Either UserID or Email ID ';
                  res.render('index.ejs', { message: message });
               }

            });

         }
         //Student Login
         else if (usertype == "TU") {
            sql = "SELECT * FROM `training`.`tutor` WHERE `userid`='" + userId + "' AND `emailid`='" + emailid + "'";
            db.query(sql, function (err, results) {
               if (results.length) {
                  req.session.userId = results[0].id;
                  req.session.user = results[0];
                  console.log(results[0].id);
                  res.render('gennotice.ejs', { data: results });
               }
               else {
                  message = 'Incorrrect! Either UserID or Email ID ';
                  res.render('index.ejs', { message: message });
               }

            });

         }
         //Teacher Login
         else if (usertype == "IC") {

            sql = "SELECT * FROM `training`.`commissioner` WHERE `userid`='" + userId + "' AND `emailid`='" + emailid + "'";
            db.query(sql, function (err, results) {
               if (results.length) {
                  req.session.userId = results[0].id;
                  req.session.user = results[0];
                  console.log(results[0].id);

                  res.render('gennotice.ejs', { data: results });
               }
               else {
                  message = 'Incorrrect! Either UserID or Email ID';
                  res.render('forgotpwd.ejs', { message: message });
               }

            });

         }
         else if (usertype == "AD") {
            sql = "SELECT * FROM `training`.`admin` WHERE `userid`='" + userId + "' AND `emailid`='" + emailid + "'";
            db.query(sql, function (err, results) {
               if (results.length) {
                  req.session.userId = results[0].id;
                  req.session.user = results[0];
                  console.log(results[0].id);
                  res.render('gennotice.ejs', { data: results });
               }
               else {
                  message = 'Incorrrect! Either UserID or Email ID ';
                  res.render('index.ejs', { message: message });
               }

            });

         }

      }

   } else {
      res.render('index.ejs');
   }
};
//---------------------------------------------Create Student page call------------------------------------------------------
exports.pwdupdate = function (req, res) {
   message = '';
   if (req.method == "POST") {
      var post = req.body;
      var first_name = post.first_name;
      var user_id = post.userid;
      var emailid = post.emailid;
      var password = post.password;
      var loginlink = '#';
      //hashing 
      var dc = crypto.createDecipheriv("aes-128-ecb", convertCryptKey("myPassword"), "");
      var decrypted = dc.update(password, 'hex', 'utf8') + dc.final('utf8');
      var dpass = decrypted;

      var mailhead = 'EMS-Account recovery details';
      var mailbody = 'UserID: ' + user_id + ' | Password: ' + dpass;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mmmm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mmmm + '-' + dd;
      var requestdate = today;
      //Mail 
      var fromaddress = 'sample@email.com';
      var toaddress = emailid;
      var mailsubject = mailhead;
      var mailmessage = mailbody;

      var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
         host: "smtp.zoho.com",
         port: 465,
         auth: {
            user: 'sample@email.com',
            pass: 'Radservice123!'
         }
      });

      var mailOptions = {
         from: fromaddress,
         to: toaddress,
         subject: mailsubject,
         text: mailmessage,

         html: '<h3>Dear ' + first_name + ',</h3><p>Your <b>EMS</b> Account recovery has been done.</p><p>At ' + emailid + ', we help you to recover your password.</p><p><b>Your secure password:</b> ' + dpass + '<br/><h4>Please log in to your account using <a href="' + loginlink + '">login link</a> </h4><br/>If you have any questions, please visit http://34.245.185.190/</p><br/><p>Kind regards,</p><p><b>EMS</b></p><p>http://34.245.185.190/</p>'
      };
      var sql = "insert INTO `tuition`.`account` (`userid`,`emailid`,`password`, `requestdate`) VALUES ('" + user_id + "','" + emailid + "','" + password + "','" + requestdate + "')";

      var query = db.query(sql, function (err, result) {

         message = "Password recovered! Sent to your mail.";
         transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
               console.log(error);
            } else {
               console.log('Email sent: ' + info.response);
            }
         });
         res.render('gennotice1.ejs', { message: message });
      });


   } else {
      res.render('index.ejs');
   }
};


//--------------------------------render user details after login--------------------------------
exports.mbbs_viewstudent = function (req, res) {
   var message = '';
   var userId = req.session.userId;
   var sql = "SELECT * FROM `ems`.`cand_profile_details`;"
   db.query(sql, function (err, data1) {
      var sql = "SELECT * FROM `ems`.`cand_admission_details`;"
      db.query(sql, function (err, data) {
         res.render('mbbs_viewstudent.ejs', { userData: data, userData1: data1, message: message });
      });
   });
};
//--------------------------------render user details after login--------------------------------
exports.update_profile = function (req, res) {
   var message = '';
   var post = req.body;
   var cand_id = post.cand_id;
   var gender = post.gender;

  //for certificate details

 var c1 = post.c1;
 var c1_reg_no = post.c1_reg_no;
 var c1_date = post.c1_date;
 var c1_issue = post.c1_issue;
 var c1_place = post.c1_place;

 var c2 = post.c2;
 var c2_reg_no = post.c2_reg_no;
 var c2_date = post.c2_date;
 var c2_issue = post.c2_issue;
 var c2_place = post.c2_place;

 var c3 = post.c3;
 var c3_reg_no = post.c3_reg_no;
 var c3_date = post.c3_date;
 var c3_issue = post.c3_issue;
 var c3_place = post.c3_place;

 var c4 = post.c4;
 var c4_reg_no = post.c4_reg_no;
 var c4_date = post.c4_date;
 var c4_issue = post.c4_issue;
 var c4_place = post.c4_place;

 var c5 = post.c5;
 var c5_reg_no = post.c5_reg_no;
 var c5_date = post.c5_date;
 var c5_issue = post.c5_issue;
 var c5_place = post.c5_place;

 var c6 = post.c6;
 var c6_reg_no = post.c6_reg_no;
 var c6_date = post.c6_date;
 var c6_issue = post.c6_issue;
 var c6_place = post.c6_place;

 var c7 = post.c7;
 var c7_reg_no = post.c7_reg_no;
 var c7_date = post.c7_date;
 var c7_issue = post.c7_issue;
 var c7_place = post.c7_place;

 var c8 = post.c8;
 var c8_reg_no = post.c8_reg_no;
 var c8_date = post.c8_date;
 var c8_issue = post.c8_issue;
 var c8_place = post.c8_place;


   // for institute tab
   var institute_name = post.institute_name;
   var place = post.place;
   var register_no = post.register_no;
   var exam_passed = post.exam_passed;
   var relieving_date = post.relieving_date;
   var district = post.district;
   var board = post.board;
   var month_of_passing = post.month_of_passing;
   var state = post.state;
   var year_of_passing = post.year_of_passing;
   var duration = post.duration;


   //for mark details
   var lang_theory = post.lang_theory;
   var lang_practical = post.lang_practical;
   var lang_internal = post.lang_internal;
   var lang_total = post.lang_total;
   var lang_max = post.lang_max;
   var eng_theory = post.eng_theory;
   var eng_practical = post.eng_practical;
   var eng_internal = post.eng_internal;
   var eng_total = post.eng_total;
   var eng_max = post.eng_max;
   var mat_theory = post.mat_theory;
   var mat_practical = post.mat_practical;
   var mat_internal = post.mat_internal;
   var mat_total = post.mat_total;
   var mat_max = post.mat_max;
   var phy_theory = post.phy_theory;
   var phy_practical = post.phy_practical;
   var phy_internal = post.phy_internal;
   var phy_total = post.phy_total;
   var phy_max = post.phy_max;

   var chem_theory = post.chem_theory;
   var chem_practical = post.chem_practical;
   var chem_internal = post.chem_internal;
   var chem_total = post.chem_total;
   var chem_max = post.chem_max;
   var bio_theory = post.bio_theory;
   var bio_practical = post.bio_practical;
   var bio_internal = post.bio_internal;
   var bio_total = post.bio_total;
   var bio_max = post.bio_max;
   var bot_theory = post.bot_theory;
   var bot_practical = post.bot_practical;
   var bot_internal = post.bot_internal;
   var bot_total = post.bot_total;
   var bot_max = post.bot_max;

   var zoo_theory = post.zoo_theory;
   var zoo_practical = post.zoo_practical;
   var zoo_internal = post.zoo_internal;
   var zoo_total = post.zoo_total;
   var zoo_max = post.zoo_max;
   var lang_paper = post.lang_paper;

   var subj_code = post.subj_code;
   var total_mark_m = post.total_mark_m;
   var max_mark = post.max_mark;


   // for neet details
   var phy_mark = post.phy_mark;
   var phy_max_mark = post.phy_max_mark;
   var chem_mark = post.chem_mark;
   var chem_max_mark = post.chem_max_mark;
   var bio_mark = post.bio_mark;
   var bio_max_mark = post.bio_max_mark;
   var agg_mark = post.agg_mark;
   var agg_max_mark = post.agg_max_mark;

   //for bank details
   var account_no = post.account_no;
   var ifsc = post.ifsc;
   var bank_name = post.bank_name;
   var pan_no = post.pan_no;
   var micr = post.micr;
   var branch_name = post.branch_name;

   //for address tab
   var ps_address = post.ps_address;
   var ps_pincode = post.ps_pincode;
   var ps_state = post.ps_state;
   var ps_district = post.ps_district;
   var pm_address = post.pm_address;
   var pm_pincode = post.pm_pincode;
   var pm_state = post.pm_state;
   var pm_district = post.pm_district;
   var address_type = post.address_type;

   //for contact tab
   var tel_phone = post.tel_phone;
   var mobile_phone = post.mobile_phone;
   var email_id = post.email_id;
   var aadhar_no = post.aadhar_no;
   var voter_id = post.voter_id;
   var remarks = post.remarks;

   //for admission tab
   var rank = post.rank;
   var rank_no = post.rank_no;
   var ar_no = post.ar_no;
   var total_mark = post.total_mark;
   var neet_mark = post.neet_mark;
   var reg_no = post.reg_no;
   var neet_roll_no = post.neet_roll_no;
   var course = post.course;
   var admission_type = post.admission_type;
   var admission_quota = post.admission_quota;
   var course_commencement = post.course_commencement;
   var date_of_admission = post.date_of_admission;
   var date_of_allotment = post.date_of_allotment;
   var selected_category = post.selected_category;
   var willing_for_counciling = post.willing_for_counciling;

   //for profile tab
   var name = post.cand_name;
   console.log('Testing:' + name);
   var initial = post.initial;
   var initial_expansion = post.initial_expansion;
   var father_name = post.father_name;
   var mother_name = post.mother_name;
   var date_of_birth = post.date_of_birth;
   var gender = post.gender;
   var blood_group = post.blood_group;
   var religion = post.religion;
   var community = post.community;
   var caste = post.caste;
   var nationality = post.nationality;
   var willing_to_donate_blood = post.willing_to_donate_blood;
   var academic_year = post.academic_year;
   var student_code = post.student_code;


   //for relieving details
   var relieved = post.relieved;
   var amount_refunded = post.amount_refunded;
   var date_of_relieving = post.date_of_relieving;
   var date_of_reallotment = post.date_of_reallotment;
   var college_name=post.college_name;
  
   var sql = "UPDATE `ems`.`cand_relieving_details` SET `relieved` = '" + relieved + "',`amount_refunded` = '" + amount_refunded + "',`date_of_relieving` = '" + date_of_relieving + "',`date_of_reallotment` = '" + date_of_reallotment + "',`college_name` = '" + college_name + "' WHERE (`cand_id` = '" + cand_id + "');"
         db.query(sql, function (err, data) {
   var sql = "UPDATE `ems`.`cand_profile_details` SET `name` = '" + name + "',`initial` = '" + initial + "',`initial_expansion` = '" + initial_expansion + "',`father_name` = '" + father_name + "',`mother_name` = '" + mother_name + "',`date_of_birth` = '" + date_of_birth + "',`gender` = '" + gender + "',`blood_group` = '" + blood_group + "',`religion` = '" + religion + "',`community` = '" + community + "',`caste` = '" + caste + "',`nationality` = '" + nationality + "',`willing_to_donate_blood` = '" + willing_to_donate_blood + "',`academic_year` = '" + academic_year + "',`student_code` = '" + student_code + "'  WHERE (`cand_id` = '" + cand_id + "');"
   // var sql = "UPDATE `ems`.`cand_profile_details` SET `name` = '" + name + "',`initial` = '" + initial + "',`initial_expansion` = '" + initial_expansion + "',`father_name` = '" + father_name + "',`mother_name` = '" + mother_name + "',`date_of_birth` = '" + date_of_birth + "',`neet_roll_no` = '" + neet_roll_no + "',`gender` = '" + gender + "',`blood_group` = '" + blood_group + "',`religion` = '" + religion + "',`community` = '" + community + "',`caste` = '" + caste + "',`nationality` = '" + nationality + "',`willing_to_donate_blood` = '" + willing_to_donate_blood + "',`academic_year` = '" + academic_year + "',`student_code` = '" + student_code + "' WHERE (`cand_id` = '" + cand_id + "');"
   db.query(sql, function (err, data) {
      var sql = "UPDATE `ems`.`cand_marks_details` SET `lang_theory` = '" + lang_theory + "',`lang_practical` = '" + lang_practical + "',`lang_internal` = '" + lang_internal + "',`lang_total` = '" + lang_total + "',`lang_max` = '" + lang_max + "',`eng_theory` = '" + eng_theory + "',`eng_practical` = '" + eng_practical + "',`eng_internal` = '" + eng_internal + "',`eng_total` = '" + eng_total + "',`eng_max` = '" + eng_max + "',`mat_theory` = '" + mat_theory + "',`mat_practical` = '" + mat_practical + "',`mat_internal` = '" + mat_internal + "',`mat_total` = '" + mat_total + "',`mat_max` = '" + mat_max + "',`phy_theory` = '" + phy_theory + "',`phy_practical` = '" + phy_practical + "',`phy_internal` = '" + phy_internal + "',`phy_total` = '" + phy_total + "',`phy_max` = '" + phy_max + "',`chem_theory` = '" + chem_theory + "',`chem_practical` = '" + chem_practical + "',`chem_internal` = '" + chem_internal + "',`chem_total` = '" + chem_total + "',`chem_max` = '" + chem_max + "',`bio_theory` = '" + bio_theory + "',`bio_practical` = '" + bio_practical + "',`bio_internal` = '" + bio_internal + "',`bio_total` = '" + bio_total + "',`bio_max` = '" + bio_max + "',`bot_theory` = '" + bot_theory + "',`bot_practical` = '" + bot_practical + "',`bot_internal` = '" + bot_internal + "',`bot_total` = '" + bot_total + "',`bot_max` = '" + bot_max + "',`zoo_theory` = '" + zoo_theory + "',`zoo_practical` = '" + zoo_practical + "',`zoo_internal` = '" + zoo_internal + "',`zoo_total` = '" + zoo_total + "',`zoo_max` = '" + zoo_max + "',`lang_paper` = '" + lang_paper + "',`subj_code` = '" + subj_code + "',`total_mark` = '" + total_mark_m + "',`max_mark` = '" + max_mark + "' WHERE (`cand_id` = '" + cand_id + "');"
      // var sql = "UPDATE `ems`.`cand_marks_details` SET `lang_theory` = '" + lang_theory + "',`lang_practical` = '" + lang_practical + "',`lang_internal` = '" + lang_internal + "',`lang_total` = '" + lang_total + "',`lang_max` = '" + lang_max + "',`eng_theory` = '" + eng_theory + "',`eng_practical` = '" + eng_practical + "',`eng_internal` = '" + eng_internal + "',`eng_total` = '" + eng_total + "',`eng_max` = '" + eng_max + "',`mat_theory` = '" + mat_theory + "',`mat_practical` = '" + mat_practical + "',`mat_internal` = '" + mat_internal + "',`mat_total` = '" + mat_total + "',`mat_max` = '" + mat_max + "',`phy_theory` = '" + phy_theory + "',`phy_practical` = '" + phy_practical + "',`phy_internal` = '" + phy_internal + "',`phy_total` = '" + phy_total + "',`phy_max` = '" + phy_max + "',`chem_theory` = '" + chem_theory + "',`chem_practical` = '" + chem_practical + "',`chem_internal` = '" + chem_internal + "',`chem_total` = '" + chem_total + "',`chem_max` = '" + chem_max + "',`bio_theory` = '" + bio_theory + "',`bio_practical` = '" + bio_practical + "',`bio_internal` = '" + bio_internal + "',`bio_total` = '" + bio_total + "',`bio_max` = '" + bio_max + "',`bot_theory` = '" + bot_theory + "',`bot_practical` = '" + bot_practical + "',`bot_internal` = '" + bot_internal + "',`bot_total` = '" + bot_total + "',`bot_max` = '" + bot_max + "',`zoo_theory` = '" + zoo_theory + "',`zoo_practical` = '" + zoo_practical + "',`zoo_internal` = '" + zoo_internal + "',`zoo_total` = '" + zoo_total + "',`zoo_max` = '" + zoo_max + "',`lang_paper` = '" + lang_paper + "',`subj_code` = '" + subj_code + "',`total_mark` = '" + total_mark + "',`max_mark` = '" + max_mark + "' WHERE (`cand_id` = '" + cand_id + "');"
      db.query(sql, function (err, data) {

         var sql = "UPDATE `ems`.`cand_admission_details` SET `rank` = '" + rank + "',`rank_no` = '" + rank_no + "',`ar_no` = '" + ar_no + "',`total_mark` = '" + total_mark + "',`neet_mark` = '" + neet_mark + "',`reg_no` = '" + reg_no + "',`neet_roll_no` = '" + neet_roll_no + "',`course` = '" + course + "',`admission_type` = '" + admission_type + "',`admission_quota` = '" + admission_quota + "',`course_commencement` = '" + course_commencement + "',`date_of_admission` = '" + date_of_admission + "',`date_of_allotment` = '" + date_of_allotment + "',`selected_category` = '" + selected_category + "',`willing_for_counciling` = '" + willing_for_counciling + "' WHERE (`cand_id` = '" + cand_id + "');"
         db.query(sql, function (err, data) {

            var sql = "UPDATE `ems`.`cand_address_details` SET `ps_address` = '" + ps_address + "',`ps_pincode` = '" + ps_pincode + "',`ps_state` = '" + ps_state + "',`ps_district` = '" + ps_district + "',`pm_address` = '" + pm_address + "',`pm_pincode` = '" + pm_pincode + "',`pm_state` = '" + pm_state + "',`pm_district` = '" + pm_district + "',`address_type` = '" + address_type + "' WHERE (`cand_id` = '" + cand_id + "');"
            db.query(sql, function (err, data) {
               var sql = "UPDATE `ems`.`cand_contact_details` SET `tel_phone` = '" + tel_phone + "',`mobile_phone` = '" + mobile_phone + "',`email_id` = '" + email_id + "',`voter_id` = '" + voter_id + "',`remarks` = '" + remarks + "',`aadhar_no` = '" + aadhar_no + "' WHERE (`cand_id` = '" + cand_id + "');"
               db.query(sql, function (err, data) {
                  var sql = "UPDATE `ems`.`cand_institute_details` SET `institute_name` = '" + institute_name + "',`place` = '" + place + "',`register_no` = '" + register_no + "',`exam_passed` = '" + exam_passed + "',`relieving_date` = '" + relieving_date + "',`district` = '" + district + "',`board` = '" + board + "',`month_of_passing` = '" + month_of_passing + "',`state` = '" + state + "',`year_of_passing` = '" + year_of_passing + "',`duration` = '" + duration + "' WHERE (`cand_id` = '" + cand_id + "');"
                  db.query(sql, function (err, data) {
                     var sql = "UPDATE `ems`.`cand_neet_mark_details` SET `phy_mark` = '" + phy_mark + "',`phy_max_mark` = '" + phy_max_mark + "',`chem_mark` = '" + chem_mark + "',`chem_max_mark` = '" + chem_max_mark + "',`bio_mark` = '" + bio_mark + "',`bio_max_mark` = '" + bio_max_mark + "',`agg_mark` = '" + agg_mark + "',`agg_max_mark` = '" + agg_max_mark + "' WHERE (`cand_id` = '" + cand_id + "');"
                     db.query(sql, function (err, data) {
                        var sql = "UPDATE `ems`.`cand_bank_details` SET `certificate1` = '" + account_no + "',`ifsc` = '" + ifsc + "',`bank_name` = '" + bank_name + "',`pan_no` = '" + pan_no + "',`micr` = '" + micr + "',`branch_name` = '" + branch_name + "' WHERE (`cand_id` = '" + cand_id + "');"
                         db.query(sql, function (err, data) {
                           var sql = "UPDATE `ems`.`cand_certificate_details` SET `certificate1` = '" + certificate1 + "',`c1_reg_no` = '" + c1_reg_no + "',`c1_date` = '" + c1_date + "',`c1_issue` = '" + c1_issue + "',`c1_place` = '" + c1_place + "',`c1_file` = '" + c1_file + "',`certificate2 = '" + certificate2 + "',`c2_reg_no = '" + c2_reg_no + "',`c2_date = '" + c2_date + "',`c2_issue = '" + c2_issue + "',`c2_place` = '" + c2_place + "',`c2_file` = '" + c2_file + "',`certificate3` = '" + certificate3 + "',`c3_reg_no` = '" + c3_reg_no + "',`c3_date` = '" + c3_date + "',`c3_issue` = '" + c3_issue + "',`c3_place` = '" + c3_place + "',`c3_file` = '" + c3_file + "',`certificate4` = '" + certificate4 + "',`c4_reg_no` = '" + c4_reg_no + "',`c4_date` = '" + c4_date + "',`c4_issue` = '" + c4_issue + "',`c4_place` = '" + c4_place + "',`c4_file` = '" + c4_file + "', WHERE (`cand_id` = '" + cand_id + "');"
                           db.query(sql, function (err, data) {
                              var sql = "UPDATE `ems`.`cand_certificate2_details` SET `certificate5` = '" + certificate5 + "',`c5_reg_no` = '" + c5_reg_no + "',`c5_date` = '" + c5_date + "',`c5_issue` = '" + c5_issue + "',`c5_place` = '" + c5_place + "',`c5_file` = '" + c5_file + "',`certificate6 = '" + certificate6 + "',`c6_reg_no = '" + c6_reg_no + "',`c6_date = '" + c6_date + "',`c6_issue = '" + c6_issue + "',`c6_place` = '" + c6_place + "',`c6_file` = '" + c6_file + "',`certificate7` = '" + certificate7 + "',`c7_reg_no` = '" + c7_reg_no + "',`c7_date` = '" + c7_date + "',`c7_issue` = '" + c7_issue + "',`c7_place` = '" + c7_place + "',`c7_file` = '" + c7_file + "',`certificate8` = '" + certificate8 + "',`c8_reg_no` = '" + c8_reg_no + "',`c8_date` = '" + c8_date + "',`c8_issue` = '" + c8_issue + "',`c8_place` = '" + c8_place + "',`c8_file` = '" + c8_file + "', WHERE (`cand_id` = '" + cand_id + "');"
                           db.query(sql, function (err, data) {
                              var sql11 = "SELECT * FROM `ems`.`cand_relieving_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql11, function (err, data11) {
                           var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql10, function (err, data10) {
                              var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql9, function (err, data9) {
                                 var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql8, function (err, data8) {
                                    var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
                                    db.query(sql7, function (err, data7) {
                                       var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
                                       db.query(sql6, function (err, data6) {
                                          var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                                          db.query(sql5, function (err, data5) {
                                             var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                                             db.query(sql4, function (err, data4) {
                                                var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                                                db.query(sql3, function (err, data3) {
                                                   var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                                                   db.query(sql2, function (err, data2) {
                                                      var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                                                      db.query(sql1, function (err, data1) {
                                                         var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                                         db.query(sql, function (err, data) {
                                                            message = 'Student Profile Updated Successfully!';
                                                            res.render('mbbs_editcand.ejs', { userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10, userData11: data11, message: message });
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
   });
   // });
};


//--------------------------------render user details after login--------------------------------
exports.mbbs_viewcand = function (req, res) {
   var message = '';
   var userId = req.session.userId;
   var post = req.body;
   var cand_id = post.cand_id;

   var sql11 = "SELECT * FROM `ems`.`cand_relieving_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql11, function (err, data11) {
   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('mbbs_viewcand.ejs', { message: message, userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10, userData11: data11 });
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

//--------------------------------render user details after login--------------------------------
exports.mbbs_editcand = function (req, res) {
   var userId = req.session.userId;
   var post = req.body;
   var cand_id = post.cand_id;
   var message = '';

  
   var sql11 = "SELECT * FROM `ems`.`cand_relieving_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql11, function (err, data11) {
   var sql10 = "SELECT * FROM `ems`.`cand_certificate2_details` WHERE `cand_id`='" + cand_id + "'";
   db.query(sql10, function (err, data10) {
      var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
      db.query(sql9, function (err, data9) {
         var sql8 = "SELECT * FROM `ems`.`cand_contact_details` WHERE `cand_id`='" + cand_id + "'";
         db.query(sql8, function (err, data8) {
            var sql7 = "SELECT * FROM `ems`.`cand_bank_details` WHERE `cand_id`='" + cand_id + "'";
            db.query(sql7, function (err, data7) {
               var sql6 = "SELECT * FROM `ems`.`cand_neet_mark_details` WHERE `cand_id`='" + cand_id + "'";
               db.query(sql6, function (err, data6) {
                  var sql5 = "SELECT * FROM `ems`.`cand_marks_details` WHERE `cand_id`='" + cand_id + "'";
                  db.query(sql5, function (err, data5) {
                     var sql4 = "SELECT * FROM `ems`.`cand_institute_details` WHERE `cand_id`='" + cand_id + "'";
                     db.query(sql4, function (err, data4) {
                        var sql3 = "SELECT * FROM `ems`.`cand_photo_details` WHERE `cand_id`='" + cand_id + "'";
                        db.query(sql3, function (err, data3) {
                           var sql2 = "SELECT * FROM `ems`.`cand_address_details` WHERE `cand_id`='" + cand_id + "'";
                           db.query(sql2, function (err, data2) {
                              var sql1 = "SELECT * FROM `ems`.`cand_admission_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql1, function (err, data1) {
                                 var sql = "SELECT * FROM `ems`.`cand_profile_details` WHERE `cand_id`='" + cand_id + "'";
                                 db.query(sql, function (err, data) {
                                    res.render('mbbs_editcand.ejs', { userData: data, userData1: data1, userData2: data2, userData3: data3, userData4: data4, userData5: data5, userData6: data6, userData7: data7, userData8: data8, userData9: data9, userData10: data10, userData11: data11, message: message });
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



//------------------------------------logout functionality----------------------------------------------
exports.logout = function (req, res) {
   req.session.destroy(function (err) {
      res.redirect("/");
   })
};

//--------------------------------Main signup page--------------------------------
exports.signuphome = function (req, res) {
   var message = "";
   var sql = "select distinct category  from `training`.`courses`";
   db.query(sql, function (err, data, message1) {
      res.render('signup.ejs', { message1: message, userData: data, message: message });
   });
};
//--------------------------------Main signup page--------------------------------
exports.forgotpwd = function (req, res) {
   var message = '';
   res.render('forgotpwd.ejs', { message: message });
};

