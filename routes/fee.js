const user = require("./user");

exports.collect_fees = function (req, res) {
  var message = "";

  var post = req.body;
  var cand_id = post.cand_id;
  var course = post.course;
  console.log("posting:", post);
  var tution_fee = Number(post.tution_fee);
  var special_fee = Number(post.special_fee);
  var medical_fee = Number(post.medical_fee);
  var caution_fee = Number(post.caution_fee);
  var lib_fee = Number(post.lib_fee);
  var univ_fee = Number(post.univ_fee);
  var lic_fee = Number(post.lic_fee);
  var red_fee = Number(post.red_fee);
  var mis_fee = Number(post.mis_fee);
  var flag_fee = Number(post.flag_fee);
  var total_fee =
    tution_fee +
    special_fee +
    medical_fee +
    caution_fee +
    lib_fee +
    univ_fee +
    lic_fee +
    red_fee +
    mis_fee +
    flag_fee;
  console.log(
    tution_fee +
      special_fee +
      medical_fee +
      caution_fee +
      lib_fee +
      univ_fee +
      lic_fee +
      red_fee +
      mis_fee +
      flag_fee
  );
  var dt = new Date();
  //    registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  var sql = `UPDATE ems.cand_fees SET  tution_fee ='${tution_fee}', special_fee='${special_fee}', medical_fee='${medical_fee}', caution_fee='${caution_fee}', lib_fee='${lib_fee}', univ_fee='${univ_fee}', lic_fee='${lic_fee}', red_fee='${red_fee}', mis_fee='${mis_fee}', flag_fee='${flag_fee}', total_fee='${total_fee}', last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
  db.query(sql, function () {
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
  });
};

exports.print_fees = function (req, res) {
  var post = req.body;
  var cand_id = post.cand_id;
  var course = post.course;

  console.log("posting:", post);
  var tution_fee = Number(post.tution_fee);
  var special_fee = Number(post.special_fee);
  var medical_fee = Number(post.medical_fee);
  var caution_fee = Number(post.caution_fee);
  var lib_fee = Number(post.lib_fee);
  var univ_fee = Number(post.univ_fee);
  var lic_fee = Number(post.lic_fee);
  var red_fee = Number(post.red_fee);
  var mis_fee = Number(post.mis_fee);
  var flag_fee = Number(post.flag_fee);
  var total_fee =
    tution_fee +
    special_fee +
    medical_fee +
    caution_fee +
    lib_fee +
    univ_fee +
    lic_fee +
    red_fee +
    mis_fee +
    flag_fee;
  console.log(
    tution_fee +
      special_fee +
      medical_fee +
      caution_fee +
      lib_fee +
      univ_fee +
      lic_fee +
      red_fee +
      mis_fee +
      flag_fee
  );
  var dt = new Date();
  //    registered_time = `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt.getDate().toString().padStart(2, '0')}/${dt.getFullYear().toString().padStart(4, '0')} ${dt.getHours().toString().padStart(2, '0')}:${dt.getMinutes().toString().padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  console.log(cand_id);
  var sql = `UPDATE ems.cand_fees SET  tution_fee ='${tution_fee}', special_fee='${special_fee}', medical_fee='${medical_fee}', caution_fee='${caution_fee}', lib_fee='${lib_fee}', univ_fee='${univ_fee}', lic_fee='${lic_fee}', red_fee='${red_fee}', mis_fee='${mis_fee}', flag_fee='${flag_fee}', total_fee='${total_fee}', last_modified_time='${last_modified_time}' WHERE (cand_id ='${cand_id}')`;
  db.query(sql, function () {
    var sql = `SELECT * FROM ems.cand_fees where cand_id  ='${cand_id}'`;
    db.query(sql, function (err, data11) {
      var sql = `SELECT * FROM ems.cand_profile_details where cand_id ='${cand_id}'`;
      db.query(sql, function (err, data) {
        var sql = `SELECT * FROM ems.cand_admission_details where cand_id = '${cand_id}'`;
        db.query(sql, function (err, data1) {
          console.log(data11);
          // select * from ems.cand_profile_details where cand_id in (select cand_id from cand_admission_details where couse ='MDMS');
          res.render("report_fees.ejs", {
            userData: data,
            userData1: data1,
            userData11: data11,
          });
        });
      });
    });
  });
};
