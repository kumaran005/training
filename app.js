/**
 * Module dependencies.
 */
require("dotenv").config();
const multer = require("multer");
const exphbs = require("express-handlebars");
const express = require("express"),
  routes = require("./routes"),
  user = require("./routes/user"),
  http = require("http"),
  path = require("path");
//const methodOverride = require('method-override');
const session = require("express-session");
const app = express();
const mysql = require("mysql");
// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
let bodyParser = require("body-parser");
/*
//Server port
var db_config = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'training',

};

var connection;

function handleDisconnect() {
connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                // the old one cannot be reused.

connection.connect(function(err) {              // The server is either down
  if(err) {                                     // or restarting (takes a while sometimes).
    console.log('error when connecting to db:', err);
    setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
  }                                     // to avoid a hot loop, and to allow our node script to
});                                     // process asynchronous requests in the meantime.
                                        // If you're also serving http, display a 503 error.
connection.on('error', function(err) {
  console.log('db error', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    handleDisconnect();                         // lost due to either server restart, or a
  } else {                                      // connnection idle timeout (the wait_timeout
    throw err;                                  // server variable configures this)
  }
});
}

handleDisconnect();*/
//Server port
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ems",
});

setInterval(function () {
  pool.query("SELECT 1", [], function () {});
}, 5000);

//const connection;
var getConnection = function (callback) {
  pool.getConnection(function (err, connection) {
    callback(err, connection);
  });
};
module.exports = getConnection;

//app.get("/",(req,res) => {

//});

//handleDisconnect();
//Server port

global.db = pool;

const socketio = require("socket.io");

const formatMessage = require("./public/assets/utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./public/assets/utils/users");
const { render } = require("ejs");
const server = http.createServer(app);
const io = socketio(server);

const botName = "EMS";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatRoom!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

// //UPLOAD CODE
// // Set The Storage Engine
// const storage1 = multer.diskStorage({
//   destination: function(req,file,cb)
//   {
//     cb(null,'./public/uploadphoto/')
//   },
//   filename: function (req, file, cb) {
//     cb(null, 'Notes' + '-' + Date.now() + path.extname(file.originalname));
//   }
// });
// // //2 sample
// // const storage2 = multer.diskStorage({
// //   destination: function(req,file,cb)
// //   {
// //     cb(null,'./public/uploadsign/')
// //   } ,
// //   filename: function (req, file, cb) {
// //     cb(null, 'Sign' + '-' + Date.now() + path.extname(file.originalname));
// //   }
// // });
// // Init Upload - Upload notes
// // var upload2 = multer({
// //   storage: storage2,
// //   limits: { fileSize: 1000000000 }});

// // Check File Type
// function checkFileType2(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif|mp4|3gp|wmv|webm|OGG|AVI|FLV /;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Invalid format!');
//   }
// }

// // Init Upload - Upload notes
// const upload1 = multer({
//   storage: storage1});

// // Check File Type
// function checkFileType(file, cb) {
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif|mp4|3gp|wmv|webm|OGG|AVI|FLV /;
//   // Check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Invalid format!');
//   }
// }

// all environments
app.set("port", process.env.PORT || 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static('public'))
// Public Folder
app.use(express.static("./public"));

// app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000000 },
  })
);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
var upload = multer({ storage: storage });

var storage1 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
var upload = multer({ storage: storage });

//add_candidate

/* app.post('/add_candidate', upload.any(), function (req, res, next) {
 
  console.log('files'+req.files);

  var certificate=[];
  var certificates1=[];
  var certificates2=[];
  var certificates3=[];
  var certificates4=[];
  var certificates5=[];
  var certificates6=[];
  var certificates7=[];
  var photosarr=[];
  var signarr=[];
  var thumbarr=[];
  var fingerarr=[];

  var x = Math.floor(Math.random()*1E6)
  var post = req.body;
 
  
  //for profile tab
  var name = post.full_name;
  var cand_first=name.substring(0,4);
  var cand_id = cand_first+x;  // for candidate id  

  //for certificate
 //for certificate details

 var certificate1 = post.c1;
 var c1_reg_no = post.c1_reg_no;
 var c1_date = post.c1_date;
 var c1_issue = post.c1_issue;
 var c1_place = post.c1_place;
 var c1_file=c1_file;

 var certificate2 = post.c2;
 var c2_reg_no = post.c2_reg_no;
 var c2_date = post.c2_date;
 var c2_issue = post.c2_issue;
 var c2_place = post.c2_place;
 var c2_file=c2_file;

 var certificate3 = post.c3;
 var c3_reg_no = post.c3_reg_no;
 var c3_date = post.c3_date;
 var c3_issue = post.c3_issue;
 var c3_place = post.c3_place;
 var c3_file=c3_file;

 var certificate4 = post.c4;
 var c4_reg_no = post.c4_reg_no;
 var c4_date = post.c4_date;
 var c4_issue = post.c4_issue;
 var c4_place = post.c4_place;
 var c4_file=c4_file;

 var certificate5 = post.c5;
 var c5_reg_no = post.c5_reg_no;
 var c5_date = post.c5_date;
 var c5_issue = post.c5_issue;
 var c5_place = post.c5_place;
 var c5_file=c5_file;

 var certificate6 = post.c6;
 var c6_reg_no = post.c6_reg_no;
 var c6_date = post.c6_date;
 var c6_issue = post.c6_issue;
 var c6_place = post.c6_place;
 var c6_file=c6_file;

 var certificate7 = post.c7;
 var c7_reg_no = post.c7_reg_no;
 var c7_date = post.c7_date;
 var c7_issue = post.c7_issue;
 var c7_place = post.c7_place;
 var c7_file=c7_file;

 var certificate8 = post.c8;
 var c8_reg_no = post.c8_reg_no;
 var c8_date = post.c8_date;
 var c8_issue = post.c8_issue;
 var c8_place = post.c8_place;
 var c8_file=c8_file;

  
  var myObj = req.files;

  for  (i in myObj) {
    
    if(myObj[i].fieldname.includes('n_cand_photo'))
    { 
      
      var pcategory="Photo";
      // if(myObj[i].fieldname.indexOf('n_cand_') !== -1){
      photosarr.push(myObj[i]);

    }
    else if(myObj[i].fieldname.includes('n_cand_sign'))
    {
      var scategory="Sign";
      signarr.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_cand_thumb'))
    {
      var tcategory="Thumb";
      thumbarr.push(myObj[i]);
    }
    // else if(myObj[i].fieldname.includes('n_cand_finger'))
    // {
     
    //   fingerarr.push(myObj[i]);
    // }
    else if(myObj[i].fieldname.includes('n_community'))
    {
      certificate.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_transfer'))
    {
      certificates1.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_conduct'))
    {
      certificates2.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_eligiblity'))
    {
      certificates3.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_migration'))
    {
      certificates4.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_admissioncertificate'))
    {
      certificates5.push(myObj[i]);
    }
    else if(myObj[i].fieldname.includes('n_admissioncommittee'))
    {
      certificates6.push(myObj[i]);
    }
    else if (myObj[i].fieldname.includes('n_others'))
    {
      certificates7.push(myObj[i]);
    }
    else{
      console.log('No file');
    }
    var x = '';
    x += myObj[i].filename + "<br>";
  }
  console.log('certificate:',certificate);
  console.log('myobj:',myObj);
  
  photosarr.forEach(element => {
    console.log('pcategory',pcategory);
    db.query("INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ pcategory +"','"+ element.filename+"')", function (err, data) {
  });

});
signarr.forEach(element => {
  db.query("INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ scategory +"','"+ element.filename+"')", function (err, data) {
  });
});
thumbarr.forEach(element => {
  db.query("INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ tcategory +"','"+ element.filename+"')", function (err, data) {
  });
});
// fingerarr.forEach(element => {
//   db.query("INSERT INTO ems.finger(cand_id,cand_name,cand_finger) VALUES ('"+ cand_id +"','"+ name +"','"+ element.filename+"')", function (err, data) {
// });
// });
certificate.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate1 +"','"+ c1_reg_no +"','"+ c1_date +"','"+ c1_issue +"','"+ c1_place +"','"+ element.filename+"')", function (err, data) {
  });
});
  certificates1.forEach(element => {
    db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate2 +"','"+ c2_reg_no +"','"+ c2_date +"','"+ c2_issue +"','"+ c2_place +"','"+ element.filename+"')", function (err, data) {
    });
});
certificates2.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate3 +"','"+ c3_reg_no +"','"+ c3_date +"','"+ c3_issue +"','"+ c3_place +"','"+ element.filename+"')", function (err, data) {
  });
});
certificates3.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate4 +"','"+ c4_reg_no +"','"+ c4_date +"','"+ c4_issue +"','"+ c4_place +"','"+ element.filename+"')", function (err, data) {
  });
});
certificates4.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename ) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate5 +"','"+ c5_reg_no +"','"+ c5_date +"','"+ c5_issue +"','"+ c5_place +"','"+ element.filename+"')", function (err, data) {
  });
});
certificates5.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate6 +"','"+ c6_reg_no +"','"+ c6_date +"','"+ c6_issue +"','"+ c6_place +"','"+ element.filename+"')", function (err, data) {
  });
});
certificates6.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate7 +"','"+ c7_reg_no +"','"+ c7_date +"','"+ c7_issue +"','"+ c7_place +"','"+ element.filename+"')", function (err, data) {
  });
});
certificates7.forEach(element => {
  db.query("INSERT INTO ems.certificate_details(cand_id,cand_name,all_certificate,reg_no,date,issue,place,Filename) VALUES ('"+ cand_id +"','"+ name +"','"+ certificate8 +"','"+ c8_reg_no +"','"+ c8_date +"','"+ c8_issue +"','"+ c8_place +"','"+ element.filename+"')", function (err, data) {
  });
});
  console.log('My array1:' + myObj.length);
  
  console.log('photoarray1:' ,photosarr.length);
  console.log('thumbarray1:' ,thumbarr.length);
  console.log('signarray1:' ,signarr.length);
  console.log('fingerrray1:' ,fingerarr.length);
  // console.log('photoarray:' ,photosarr);
  console.log('certificatearray1:' , certificate.length);

  // console.log('certificatearray:' , certificate);
  
 //biometrics old
 var o_cand_photo = post.o_cand_photo;
 var o_cand_sign = post.o_cand_sign;
 var o_cand_thumb = post.o_cand_thumb;
 var o_cand_finger = post.o_cand_finger;
//certificate old
 var o_community=post.o_community;
 var o_transfer=post.o_transfer;
 var o_conduct=post.o_conduct;
 var o_eligiblity=post.o_eligiblity;
 var o_migration=post.o_migration;
 var o_admissioncertificate=post.o_admissioncertificate;
 var o_admissioncommittee=post.o_admissioncommittee;
 var o_others=post.o_others;

 var cand_photo = '';
 var cand_thumb = '';
 var cand_sign = '';
 var cand_finger = '';

 
 
 
    //final output
 

  var user = req.session.user,
    userId = req.session.userId;
  var x = Math.floor(Math.random()*1E6)
  var post = req.body;

  //for profile tab
  var name = post.full_name;
  var cand_first=name.substring(0,4);
  var cand_id = cand_first+x;  // for candidate id  
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

  //for audit 
  var event_name='';
  if(course=='MBBS')
  {
    event_name = 'Adding_Student_MBBS';
  }
  else if(course=='MDMS')
  {
    event_name = 'Adding_Student_MDMS';
  }
  else if(course=='BSC')
  {
    event_name='Adding_Student_BSC';
  }
  else if(course=='AISSC')
  {
    event_name='Adding_Student_AISSC';
  }
  else if(course=='Nursing')
  {
    event_name='Adding_Student_NursingDiploma';
  }
  else if(course=='Paramedical Diploma')
  {
    event_name='Adding_Student_ParamedicalDiploma';
  }
  else if(course=='Paramedical Certificate')
  {
    event_name='Adding_Student_ParamedicalCertificate';
  }

  var current_user = cand_id;
  var user_agent = userId;
  var audited_time = registered_time;

  //for certificate
 //for certificate details

 var certificate1 = post.c1;
 var c1_reg_no = post.c1_reg_no;
 var c1_date = post.c1_date;
 var c1_issue = post.c1_issue;
 var c1_place = post.c1_place;
 var c1_file=c1_file;

 var certificate2 = post.c2;
 var c2_reg_no = post.c2_reg_no;
 var c2_date = post.c2_date;
 var c2_issue = post.c2_issue;
 var c2_place = post.c2_place;
 var c2_file=c2_file;

 var certificate3 = post.c3;
 var c3_reg_no = post.c3_reg_no;
 var c3_date = post.c3_date;
 var c3_issue = post.c3_issue;
 var c3_place = post.c3_place;
 var c3_file=c3_file;

 var certificate4 = post.c4;
 var c4_reg_no = post.c4_reg_no;
 var c4_date = post.c4_date;
 var c4_issue = post.c4_issue;
 var c4_place = post.c4_place;
 var c4_file=c4_file;

 var certificate5 = post.c5;
 var c5_reg_no = post.c5_reg_no;
 var c5_date = post.c5_date;
 var c5_issue = post.c5_issue;
 var c5_place = post.c5_place;
 var c5_file=c5_file;

 var certificate6 = post.c6;
 var c6_reg_no = post.c6_reg_no;
 var c6_date = post.c6_date;
 var c6_issue = post.c6_issue;
 var c6_place = post.c6_place;
 var c6_file=c6_file;

 var certificate7 = post.c7;
 var c7_reg_no = post.c7_reg_no;
 var c7_date = post.c7_date;
 var c7_issue = post.c7_issue;
 var c7_place = post.c7_place;
 var c7_file=c7_file;

 var certificate8 = post.c8;
 var c8_reg_no = post.c8_reg_no;
 var c8_date = post.c8_date;
 var c8_issue = post.c8_issue;
 var c8_place = post.c8_place;
 var c8_file=c8_file;





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

  //for relieving_details
  //added with Cand_id and last modified time
  var relieved_status='No';

  //for rendering page
  var renderpage='';
  if(course=='MBBS')
  {
    renderpage='mbbs_viewstudent.ejs';
  }
  else if(course=='MDMS')
  {
    renderpage='mdms_board.ejs';
  }
  else if(course.includes('B.SC.'))
  {
    renderpage='bsc_board.ejs';
  }
  else if(course=='AISSC')
  {
    renderpage='aissc_board.ejs';
  }
  else if(course=='Nursing')
  {
    renderpage='nursing.ejs';
  }
  else if(course=='Paramedical Diploma')
  {
    renderpage='mdms_board.ejs';
  }
  else if(course=='Paramedical Certificate')
  {
    renderpage='mdms_board.ejs';
  }

 console.log('renderpage:'+renderpage);
  var sql = "SELECT * FROM `ems`.`user_details`;"
  
  db.query(sql, function (err, data) {
    var sql = "INSERT INTO `ems`.`cand_certificate2_details`(`cand_id`,`certificate5`,`c5_reg_no`,`c5_date`,`c5_issue`,`c5_place`,`c5_file`,`certificate6`,`c6_reg_no`,`c6_date`,`c6_issue`,`c6_place`,`c6_file`,`certificate7`,`c7_reg_no`,`c7_date`,`c7_issue`,`c7_place`,`c7_file`,`certificate8`,`c8_reg_no`,`c8_date`,`c8_issue`,`c8_place`,`c8_file`,`last_modified_time`) VALUES ('" + cand_id + "','" + certificate5 + "','" + c5_reg_no + "','" + c5_date + "','" + c5_issue + "','" + c5_place + "','" + c5_file + "','" + certificate6 + "','" + c6_reg_no + "','" + c6_date + "','" + c6_issue + "','" + c6_place + "','" + c6_file + "','" + certificate7 + "','" + c7_reg_no + "','" + c7_date + "','" + c7_issue + "','" + c7_place + "','" + c7_file + "','" + certificate8 + "','" + c8_reg_no + "','" + c8_date + "','" + c8_issue + "','" + c8_place + "','" + c8_file + "','" + last_modified_time + "')";
    query = db.query(sql, function (err, data) {
      var sql = "INSERT INTO `ems`.`cand_certificate_details`(`cand_id`,`certificate1`,`c1_reg_no`,`c1_date`,`c1_issue`,`c1_place`,`c1_file`,`certificate2`,`c2_reg_no`,`c2_date`,`c2_issue`,`c2_place`,`c2_file`,`certificate3`,`c3_reg_no`,`c3_date`,`c3_issue`,`c3_place`,`c3_file`,`certificate4`,`c4_reg_no`,`c4_date`,`c4_issue`,`c4_place`,`c4_file`,`last_modified_time`) VALUES ('" + cand_id + "','" + certificate1 + "','" + c1_reg_no + "','" + c1_date + "','" + c1_issue + "','" + c1_place + "','" + c1_file + "','" + certificate2 + "','" + c2_reg_no + "','" + c2_date + "','" + c2_issue + "','" + c2_place + "','" + c2_file + "','" + certificate3 + "','" + c3_reg_no + "','" + c3_date + "','" + c3_issue + "','" + c3_place + "','" + c3_file + "','" + certificate4 + "','" + c4_reg_no + "','" + c4_date + "','" + c4_issue + "','" + c4_place + "','" + c4_file + "','" + last_modified_time + "')";
      query = db.query(sql, function (err, data) {
        var sql = "INSERT INTO `ems`.`cand_profile_details`(`cand_id`,`name`,`initial`,`initial_expansion`,`father_name`,`mother_name`,`date_of_birth`,`gender`,`blood_group`,`religion`,`community`,`caste`,`nationality`,`willing_to_donate_blood`,`registered_time`,`last_modified_time`,`academic_year`,`student_code`) VALUES ('" + cand_id + "','" + name + "','" + initial + "','" + initial_expansion + "','" + father_name + "','" + mother_name + "','" + date_of_birth + "','" + gender + "','" + blood_group + "','" + religion + "','" + community + "','" + caste + "','" + nationality + "','" + willing_to_donate_blood + "','" + registered_time + "','" + last_modified_time + "','" + academic_year + "','" + student_code + "')";
        query = db.query(sql, function (err, data) {
        var sql = "INSERT INTO `ems`.`cand_address_details`(`cand_id`,`address_type`,`ps_address`,`ps_pincode`,`ps_state`,`ps_district`,`pm_address`,`pm_pincode`,`pm_state`,`pm_district`,`last_modified_time`) VALUES ('" + cand_id + "','" + address_type + "','" + ps_address + "','" + ps_pincode + "','" + ps_state + "','" + ps_district + "','" + pm_address + "','" + pm_pincode + "','" + pm_state + "','" + pm_district + "','" + last_modified_time + "')";
            query = db.query(sql, function (err, data) {
              var sql = "INSERT INTO `ems`.`cand_contact_details`(`cand_id`,`tel_phone`,`mobile_phone`,`email_id`,`aadhar_no`,`voter_id`,`remarks`,`last_modified_time`) VALUES ('" + cand_id + "','" + tel_phone + "','" + mobile_phone + "','" + email_id + "','" + aadhar_no + "','" + voter_id + "','" + remarks + "','" + last_modified_time + "')";
              query = db.query(sql, function (err, data) {
                var sql = "INSERT INTO `ems`.`audit_trail`(`event_name`,`current_user`,`audited_time`,`user_agent`) VALUES ('" + event_name + "','" + current_user + "','" + audited_time + "','" + user_agent + "')";
                query = db.query(sql, function (err, data) {
                  var sql = "INSERT INTO `ems`.`cand_photo_details`(`cand_id`,`cand_photo`,`cand_sign`,`cand_thumb`,`cand_finger`,`last_modified_time`) VALUES ('" + cand_id + "','" + cand_photo + "','" + cand_sign + "','" + cand_thumb + "','" + cand_finger + "','" + last_modified_time + "')";
                  query = db.query(sql, function (err, data) {
                    var sql = "INSERT INTO `ems`.`cand_institute_details`(`cand_id`,`institute_name`,`place`,`district`,`state`,`relieving_date`,`duration`,`exam_passed`,`register_no`,`month_of_passing`,`year_of_passing`,`board`,`last_modified_time`) VALUES ('" + cand_id + "','" + institute_name + "','" + place + "','" + district + "','" + state + "','" + relieving_date + "','" + duration + "','" + exam_passed + "','" + register_no + "','" + month_of_passing + "','" + year_of_passing + "','" + board + "','" + last_modified_time + "')";
                    query = db.query(sql, function (err, data) {
                      var sql = "INSERT INTO `ems`.`cand_marks_details`(`cand_id`,`lang_theory`,`lang_practical`,`lang_internal`,`lang_total`,`lang_max`,`eng_theory`,`eng_practical`,`eng_internal`,`eng_total`,`eng_max`,`mat_theory`,`mat_practical`,`mat_internal`,`mat_total`,`mat_max`,`phy_theory`,`phy_practical`,`phy_internal`,`phy_total`,`phy_max`,`chem_theory`,`chem_practical`,`chem_internal`,`chem_total`,`chem_max`,`bio_theory`,`bio_practical`,`bio_internal`,`bio_total`,`bio_max`,`bot_theory`,`bot_practical`,`bot_internal`,`bot_total`,`bot_max`,`zoo_theory`,`zoo_practical`,`zoo_internal`,`zoo_total`,`zoo_max`,`lang_paper`,`subj_code`,`total_mark`,`max_mark`) VALUES ('" + cand_id + "','" + lang_theory + "','" + lang_practical + "','" + lang_internal + "','" + lang_total + "','" + lang_max + "','" + eng_theory + "','" + eng_practical + "','" + eng_internal + "','" + eng_total + "','" + eng_max + "','" + mat_theory + "','" + mat_practical + "','" + mat_internal + "','" + mat_total + "','" + mat_max + "','" + phy_theory + "','" + phy_practical + "','" + phy_internal + "','" + phy_total + "','" + phy_max + "','" + chem_theory + "','" + chem_practical + "','" + chem_internal + "','" + chem_total + "','" + chem_max + "','" + bio_theory + "','" + bio_practical + "','" + bio_internal + "','" + bio_total + "','" + bio_max + "','" + bot_theory + "','" + bot_practical + "','" + bot_internal + "','" + bot_total + "','" + bot_max + "','" + zoo_theory + "','" + zoo_practical + "','" + zoo_internal + "','" + zoo_total + "','" + zoo_max + "','" + lang_paper + "','" + subj_code + "','" + total_mark_m + "','" + max_mark + "')";
                      query = db.query(sql, function (err, data) {
                        var sql = "INSERT INTO `ems`.`cand_neet_mark_details`(`cand_id`,`phy_mark`,`phy_max_mark`,`chem_mark`,`chem_max_mark`,`bio_mark`,`bio_max_mark`,`agg_mark`,`agg_max_mark`,`last_modified_time`) VALUES ('" + cand_id + "','" + phy_neet_mark + "','" + phy_neet_max + "','" + chem_neet_mark + "','" + chem_neet_max + "','" + bio_neet_mark + "','" + bio_neet_max + "','" + agg_neet_mark + "','" + agg_neet_max + "','" + last_modified_time + "')";
                        query = db.query(sql, function (err, data) {
                          var sql = "INSERT INTO `ems`.`cand_bank_details`(`cand_id`,`account_no`,`bank_name`,`branch_name`,`ifsc`,`micr`,`pan_no`,`last_modified_time`) VALUES ('" + cand_id + "','" + account_no + "','" + bank_name + "','" + branch_name + "','" + ifsc + "','" + micr + "','" + pan_no + "','" + last_modified_time + "')";
                          query = db.query(sql, function (err, data) {
                            var sql = "INSERT INTO `ems`.`cand_relieving_details`(`cand_id`,`relieved`,`last_modified_time`) VALUES ('" + cand_id + "','" + relieved_status + "','" + last_modified_time + "')";
                            query = db.query(sql, function (err, data) {
                             var sql = "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`last_modified_time`) VALUES ('" + cand_id + "','" + name + "','" + rank + "','" + rank_no + "','" + ar_no + "','" + total_mark + "','" + neet_mark + "','" + reg_no + "','" + neet_roll_no + "','" + course + "','" + admission_type + "','" + admission_quota + "','" + course_commencement + "','" + date_of_admission + "','" + date_of_allotment + "','" + selected_category + "','" + willing_for_counciling + "','" + last_modified_time + "')";
                              query = db.query(sql, function (err, data) {
                              message = "New Candidate created Successfully!";
                              var userId = req.session.userId;
                             
                              //displaying part
                              var sql = "SELECT * FROM `ems`.`state_details`;"
                              db.query(sql, function (err, data10) {  
                              var sql9 = "SELECT * FROM `ems`.`cand_certificate_details` WHERE `cand_id`='" + cand_id + "'";
                              db.query(sql9, function (err, data9) {   
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
                                 
                                    res.render(renderpage, { userData: data, userData1: data1, userData3: data3,userData4: data4, userData5: data5,userData6: data6, userData7: data7, userData8: data8,userData9: data9,userData10: data10, message: message });
                                                      
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
  });
});*/

//update profile
/*
app.post('/update_profile', upload.any(), function (req, res, next) {
  console.log(req.files);
  var certificate;
  var photosarr;
  var myObj = req.files;
  for  (i in myObj) {
    if(myObj[i].filename.includes('n_cand_')){
certificate.push(myObj[i]);
    }
    else{
      photosarr.push(myObj[i]);
    }
    var x = '';
    x += myObj[i].filename + "<br>";
  }
  photosarr.forEach(element => {
    db.query
  });
  var post = req.body;
  console.log('My array1:' + myObj.length);
  console.log('photoarray:' +photosarr.length);

  console.log('certificatearray:' + certificate.length);


 //biometrics old
  var o_cand_photo = post.o_cand_photo;
  var o_cand_sign = post.o_cand_sign;
  var o_cand_thumb = post.o_cand_thumb;
  var o_cand_finger = post.o_cand_finger;
//certificate old
  var o_community=post.o_community;
  var o_transfer=post.o_transfer;
  var o_conduct=post.o_conduct;
  var o_eligiblity=post.o_eligiblity;
  var o_migration=post.o_migration;
  var o_admissioncertificate=post.o_admissioncertificate;
  var o_admissioncommittee=post.o_admissioncommittee;
  var o_others=post.o_others;
  console.log('o_others:'+o_others);


  var cand_photo = '';
  var cand_thumb = '';
  var cand_sign = '';
  var cand_finger = '';
  // for 0 objects
  if (myObj.length == 0) {
    cand_photo = o_cand_photo;
    cand_thumb = o_cand_thumb;
    cand_sign = o_cand_sign;
    cand_finger = o_cand_finger;
    c1_file=o_community;
    c2_file=o_transfer;
    c3_file=o_conduct;
    c4_file=o_eligiblity;
    c5_file=o_migration;
    c6_file=o_admissioncertificate;
    c7_file=o_admissioncommittee;
    c8_file=o_others;


  }
  // for 1 objects
  else if (myObj.length == 1) {
    var field1 = myObj[0].fieldname;

    if (field1.includes('photo')) {
      cand_photo = myObj[0].filename;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
      cand_finger = o_cand_finger;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;

    }
    else if (field1.includes('thumb')) {
      cand_thumb = myObj[0].filename;
      cand_sign = o_cand_sign;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
    }
    else if (field1.includes('sign')) {
      cand_sign = myObj[0].filename;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
    }
    else if (field1.includes('finger')) {
      cand_finger = myObj[0].filename;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
    }
    else if (field1.includes('community')) {
      c1_file=myObj[0].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('transfer')) {
      c2_file=myObj[0].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('conduct')) {
      c3_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('eligiblity')) {
      c4_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('migration')) {
      c5_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('admissioncertificate')) {
      c6_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('admissioncommittee')) {
      c7_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if (field1.includes('others')) {
      c8_file=myObj[0].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }

  }
  //for 2 objects
  else if (myObj.length == 2) {
    var field1 = myObj[0].fieldname;
    var field2 = myObj[1].fieldname;

    //2.photo
    if ((field1.includes('photo')) && (field2.includes('thumb'))) {
      cand_photo = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_sign = o_cand_sign;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('photo')) && (field2.includes('sign'))) {
      cand_photo = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_thumb = o_cand_thumb;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('photo')) && (field2.includes('finger'))) {
      cand_photo = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    //2.sign
    if ((field1.includes('sign')) && (field2.includes('thumb'))) {
      cand_sign = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_photo = o_cand_photo;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('sign')) && (field2.includes('photo'))) {
      cand_sign = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_thumb = o_cand_thumb;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('sign')) && (field2.includes('finger'))) {
      cand_sign = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_thumb = o_cand_thumb;
      cand_photo = o_cand_photo;
    }
    //2.thumb
    if ((field1.includes('thumb')) && (field2.includes('sign'))) {
      cand_thumb = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_photo = o_cand_photo;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('thumb')) && (field2.includes('photo'))) {
      cand_thumb = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = o_cand_sign;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('thumb')) && (field2.includes('finger'))) {
      cand_thumb = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_sign = o_cand_sign;
      cand_photo = o_cand_photo;
    }
    //2.finger
    if ((field1.includes('finger')) && (field2.includes('sign'))) {
      cand_finger = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
    }
    else if ((field1.includes('finger')) && (field2.includes('photo'))) {
      cand_finger = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = o_cand_sign;
      cand_thumb = o_cand_thumb;
    }
    else if ((field1.includes('finger')) && (field2.includes('thumb'))) {
      cand_finger = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_sign = o_cand_sign;
      cand_photo = o_cand_photo;
    }
    //2.community
    else if ((field1.includes('community')) && (field2.includes('transfer'))) {
      c1_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('conduct'))) {
      c1_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('eligiblity'))) {
      c1_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('migration'))) {
      c1_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('admissioncertificate'))) {
      c1_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('admissioncommittee'))) {
      c1_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('community')) && (field2.includes('others'))) {
      c1_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    //2.transfer
    else if ((field1.includes('transfer')) && (field2.includes('community'))) {
      c2_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('conduct'))) {
      c2_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('eligiblity'))) {
      c2_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('migration'))) {
      c2_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('admissioncertificate'))) {
      c2_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('admissioncommittee'))) {
      c2_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('transfer')) && (field2.includes('others'))) {
      c2_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    //2.conduct
    else if ((field1.includes('conduct')) && (field2.includes('community'))) {
      c3_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('transfer'))) {
      c3_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('eligiblity'))) {
      c3_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('migration'))) {
      c3_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('admissioncertificate'))) {
      c3_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('admissioncommittee'))) {
      c3_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('conduct')) && (field2.includes('others'))) {
      c3_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    //2.eligiblity
    else if ((field1.includes('eligiblity')) && (field2.includes('community'))) {
      c4_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('transfer'))) {
      c4_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('conduct'))) {
      c4_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('migration'))) {
      c4_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('admissioncertificate'))) {
      c4_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('admissioncommittee'))) {
      c4_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('eligiblity')) && (field2.includes('others'))) {
      c4_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('community'))) {
      c5_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('transfer'))) {
      c5_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('conduct'))) {
      c5_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('eligiblity'))) {
      c5_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('admissioncertificate'))) {
      c5_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('admissioncommittee'))) {
      c5_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('migration')) && (field2.includes('others'))) {
      c5_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('community'))) {
      c6_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('transfer'))) {
      c6_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('conduct'))) {
      c6_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('eligiblity'))) {
      c6_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('migration'))) {
      c6_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c7_file=o_admissioncommittee;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('admissioncommittee'))) {
      c6_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncertificate')) && (field2.includes('others'))) {
      c6_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('community'))) {
      c7_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('transfer'))) {
      c7_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('conduct'))) {
      c7_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('eligiblity'))) {
      c7_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('migration'))) {
      c7_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('admissioncertificate'))) {
      c7_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c8_file=o_others;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('admissioncommittee')) && (field2.includes('others'))) {
      c7_file=myObj[0].filename;
      c8_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate; 
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('community'))) {
      c8_file=myObj[0].filename;
      c1_file=myObj[1].filename;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate; 
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('transfer'))) {
      c8_file=myObj[0].filename;
      c2_file=myObj[1].filename;
      c1_file=o_community;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate; 
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('conduct'))) {
      c8_file=myObj[0].filename;
      c3_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate; 
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('eligiblity'))) {
      c8_file=myObj[0].filename;
      c4_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c5_file=o_migration;
      c6_file=o_admissioncertificate; 
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('migration'))) {
      c8_file=myObj[0].filename;
      c5_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c6_file=o_admissioncertificate; 
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('admissioncertificate'))) {
      c8_file=myObj[0].filename;
      c6_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c7_file=o_admissioncommittee;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('others')) && (field2.includes('admissioncommittee'))) {
      c8_file=myObj[0].filename;
      c7_file=myObj[1].filename;
      c1_file=o_community;
      c2_file=o_transfer;
      c3_file=o_conduct;
      c4_file=o_eligiblity;
      c5_file=o_migration;
      c6_file=o_admissioncertificate;
      cand_finger = o_cand_finger;
      cand_photo = o_cand_photo;
      cand_thumb = o_cand_thumb;
      cand_sign = o_cand_sign;
    }
  }
  //for 3 objects
  else if (myObj.length == 3) {
    var field1 = myObj[0].fieldname;
    var field2 = myObj[1].fieldname;
    var field3 = myObj[2].fieldname;

    //3.photo
    if ((field1.includes('photo')) && (field2.includes('thumb')) && (field3.includes('sign'))) {
      cand_photo = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('photo')) && (field2.includes('thumb')) && (field3.includes('finger'))) {
      cand_photo = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_finger =  myObj[2].filename;
      cand_sign = o_cand_sign;
    }
    else if ((field1.includes('photo')) && (field2.includes('sign')) && (field3.includes('thumb'))) {
      cand_photo = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('photo')) && (field2.includes('sign')) && (field3.includes('finger'))) {
      cand_photo = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_thumb = o_cand_thumb;
     }
     else if ((field1.includes('photo')) && (field2.includes('finger')) && (field3.includes('sign'))) {
      cand_photo = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_thumb = o_cand_thumb;
     }
     else if ((field1.includes('photo')) && (field2.includes('finger')) && (field3.includes('thumb'))) {
      cand_photo = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_sign = o_cand_sign;
     }
      //3.sign
    if ((field1.includes('sign')) && (field2.includes('thumb')) && (field3.includes('photo'))) {
      cand_sign = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('sign')) && (field2.includes('thumb')) && (field3.includes('finger'))) {
      cand_sign = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_finger =  myObj[2].filename;
      cand_photo = o_cand_photo;
    }
    else if ((field1.includes('sign')) && (field2.includes('photo')) && (field3.includes('thumb'))) {
      cand_sign = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('sign')) && (field2.includes('photo')) && (field3.includes('finger'))) {
      cand_sign = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_thumb = o_cand_thumb;
     }
     else if ((field1.includes('sign')) && (field2.includes('finger')) && (field3.includes('photo'))) {
      cand_sign = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_thumb = o_cand_thumb;
     }
     else if ((field1.includes('sign')) && (field2.includes('finger')) && (field3.includes('thumb'))) {
      cand_sign = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_photo = o_cand_photo;
     }
         //3.thumb
    if ((field1.includes('thumb')) && (field2.includes('sign')) && (field3.includes('photo'))) {
      cand_thumb = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('thumb')) && (field2.includes('sign')) && (field3.includes('finger'))) {
      cand_thumb = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_finger =  myObj[2].filename;
      cand_photo = o_cand_photo;
    }
    else if ((field1.includes('thumb')) && (field2.includes('photo')) && (field3.includes('sign'))) {
      cand_thumb = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('thumb')) && (field2.includes('photo')) && (field3.includes('finger'))) {
      cand_thumb = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_sign = o_cand_sign;
     }
     else if ((field1.includes('thumb')) && (field2.includes('finger')) && (field3.includes('photo'))) {
      cand_thumb = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_sign = o_cand_sign;
     }
     else if ((field1.includes('thumb')) && (field2.includes('finger')) && (field3.includes('sign'))) {
      cand_thumb = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_sign = myObj[2].sign;
      cand_photo = o_cand_photo;
     }
           //3.finger
    if ((field1.includes('finger')) && (field2.includes('sign')) && (field3.includes('photo'))) {
      cand_finger = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_thumb = o_cand_thumb;
    }
    else if ((field1.includes('finger')) && (field2.includes('sign')) && (field3.includes('thumb'))) {
      cand_finger = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_thumb =  myObj[2].filename;
      cand_photo = o_cand_photo;
    }
    else if ((field1.includes('finger')) && (field2.includes('photo')) && (field3.includes('sign'))) {
      cand_finger = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_finger = o_cand_finger;
    }
    else if ((field1.includes('finger')) && (field2.includes('photo')) && (field3.includes('thumb'))) {
      cand_finger = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_sign = o_cand_sign;
     }
     else if ((field1.includes('finger')) && (field2.includes('thumb')) && (field3.includes('photo'))) {
      cand_finger = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_sign = o_cand_sign;
     }
     else if ((field1.includes('finger')) && (field2.includes('thumb')) && (field3.includes('sign'))) {
      cand_finger = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_sign = myObj[2].sign;
      cand_photo = o_cand_photo;
     }
  }
   //for 4 objects
   else if (myObj.length == 4) {
    var field1 = myObj[0].fieldname;
    var field2 = myObj[1].fieldname;
    var field3 = myObj[2].fieldname;
    var field4 = myObj[3].fieldname;

    //4.photo
    if ((field1.includes('photo')) && (field2.includes('sign')) && (field3.includes('thumb')) && (field4.includes('finger'))) {
      cand_photo = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_thumb = myObj[2].filename;
      cand_finger = myObj[3].filename;
    }
    else if ((field1.includes('sign')) && (field2.includes('photo')) && (field3.includes('thumb')) && (field4.includes('finger'))) {
      cand_sign = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_thumb =  myObj[2].filename;
      cand_finger = myObj[3].filename;
    }
    else if ((field1.includes('sign')) && (field2.includes('thumb')) && (field3.includes('photo')) && (field4.includes('finger'))) {
      cand_sign = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_photo = myObj[2].filename;
      cand_finger = myObj[3].filename;
    }
    else if ((field1.includes('sign')) && (field2.includes('thumb')) && (field3.includes('finger')) && (field4.includes('photo'))) {
      cand_sign = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_photo = myObj[3].filename;
     }
     //4.sign
     else if ((field1.includes('photo')) && (field2.includes('thumb')) && (field3.includes('sign')) && (field4.includes('finger'))) {
      cand_photo = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_finger = myObj[3].filename;
    }
    else if ((field1.includes('photo')) && (field2.includes('thumb')) && (field3.includes('finger')) && (field4.includes('sign'))) {
      cand_photo = myObj[0].filename;
      cand_thumb = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_sign = myObj[3].filename;
     }
     else if ((field1.includes('photo')) && (field2.includes('sign')) && (field3.includes('finger')) && (field4.includes('thumb'))) {
      cand_photo = myObj[0].filename;
      cand_sign = myObj[1].filename;
      cand_finger = myObj[2].filename;
      cand_thumb = myObj[3].filename;
     }
     else if ((field1.includes('thumb')) && (field2.includes('photo')) && (field3.includes('sign')) && (field4.includes('finger'))) {
      cand_thumb = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_finger = myObj[3].filename;
     }
     else if ((field1.includes('finger')) && (field2.includes('photo')) && (field3.includes('sign')) && (field4.includes('thumb'))) {
      cand_finger = myObj[0].filename;
      cand_photo = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_thumb = myObj[3].filename;
     }
     else if ((field1.includes('photo')) && (field2.includes('finger')) && (field3.includes('sign')) && (field4.includes('thumb'))) {
      cand_photo = myObj[0].filename;
      cand_finger = myObj[1].filename;
      cand_sign = myObj[2].filename;
      cand_thumb = myObj[3].filename;
     }
    }

    //final output
  console.log('f_photo:' + cand_photo);
  console.log('f_sign:' + cand_sign);
  console.log('f_thumb:' + cand_thumb);
  console.log('f_finger:' + cand_finger);
  console.log('f_community:' + c1_file);
  console.log('f_transfer:' + c2_file);
  console.log('f_conduct:' + c3_file);
  console.log('f_eligiblity:' + c4_file);
  console.log('f_migration:' + c5_file);
  console.log('f_admissioncertificate:' + c6_file);
  console.log('f_admissioncommittee:' + c7_file);
  console.log('f_others:' + c8_file);


  var post = req.body;
  var cand_id = post.cand_id;

  
  var gender = post.gender;

  //for certificate details

  var certificate1 = post.c1;
  var c1_reg_no = post.c1_reg_no;
  var c1_date = post.c1_date;
  var c1_issue = post.c1_issue;
  var c1_place = post.c1_place;
  var c1_file=c1_file;

  var certificate2 = post.c2;
  var c2_reg_no = post.c2_reg_no;
  var c2_date = post.c2_date;
  var c2_issue = post.c2_issue;
  var c2_place = post.c2_place;
  var c2_file=c2_file;

  var certificate3 = post.c3;
  var c3_reg_no = post.c3_reg_no;
  var c3_date = post.c3_date;
  var c3_issue = post.c3_issue;
  var c3_place = post.c3_place;
  var c3_file=c3_file;

  var certificate4 = post.c4;
  var c4_reg_no = post.c4_reg_no;
  var c4_date = post.c4_date;
  var c4_issue = post.c4_issue;
  var c4_place = post.c4_place;
  var c4_file=c4_file;

  var certificate5 = post.c5;
  var c5_reg_no = post.c5_reg_no;
  var c5_date = post.c5_date;
  var c5_issue = post.c5_issue;
  var c5_place = post.c5_place;
  var c5_file=c5_file;

  var certificate6 = post.c6;
  var c6_reg_no = post.c6_reg_no;
  var c6_date = post.c6_date;
  var c6_issue = post.c6_issue;
  var c6_place = post.c6_place;
  var c6_file=c6_file;

  var certificate7 = post.c7;
  var c7_reg_no = post.c7_reg_no;
  var c7_date = post.c7_date;
  var c7_issue = post.c7_issue;
  var c7_place = post.c7_place;
  var c7_file=c7_file;

  var certificate8 = post.c8;
  var c8_reg_no = post.c8_reg_no;
  var c8_date = post.c8_date;
  var c8_issue = post.c8_issue;
  var c8_place = post.c8_place;
  var c8_file=c8_file;


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
  var college_name = post.college_name;


  var sql = "UPDATE `ems`.`cand_certificate2_details` SET `certificate5` = '" + certificate5 + "',`c5_reg_no` = '" + c5_reg_no + "',`c5_date` = '" + c5_date + "',`c5_issue` = '" + c5_issue + "',`c5_place` = '" + c5_place + "',`c5_file` = '" + c5_file + "',`certificate6` = '" + certificate6 + "',`c6_reg_no` = '" + c6_reg_no + "',`c6_date` = '" + c6_date + "',`c6_issue` = '" + c6_issue + "',`c6_place` = '" + c6_place + "',`c6_file` = '" + c6_file + "',`certificate7` = '" + certificate7 + "',`c7_reg_no` = '" + c7_reg_no + "',`c7_date` = '" + c7_date + "',`c7_issue` = '" + c7_issue + "',`c7_place` = '" + c7_place + "',`c7_file` = '" + c7_file + "',`certificate8` = '" + certificate8 + "',`c8_reg_no` = '" + c8_reg_no + "',`c8_date` = '" + c8_date + "',`c8_issue` = '" + c8_issue + "',`c8_place` = '" + c8_place + "',`c8_file` = '" + c8_file + "' WHERE (`cand_id` = '" + cand_id + "');"
  db.query(sql, function (err, data) {
var sql = "UPDATE `ems`.`cand_certificate_details` SET `certificate1` = '" + certificate1 + "',`c1_reg_no` = '" + c1_reg_no + "',`c1_date` = '" + c1_date + "',`c1_issue` = '" + c1_issue + "',`c1_place` = '" + c1_place + "',`c1_file` = '" + c1_file + "',`certificate2` = '" + certificate2 + "',`c2_reg_no` = '" + c2_reg_no + "',`c2_date` = '" + c2_date + "',`c2_issue` = '" + c2_issue + "',`c2_place` = '" + c2_place + "',`c2_file` = '" + c2_file + "',`certificate3` = '" + certificate3 + "',`c3_reg_no` = '" + c3_reg_no + "',`c3_date` = '" + c3_date + "',`c3_issue` = '" + c3_issue + "',`c3_place` = '" + c3_place + "',`c3_file` = '" + c3_file + "',`certificate4` = '" + certificate4 + "',`c4_reg_no` = '" + c4_reg_no + "',`c4_date` = '" + c4_date + "',`c4_issue` = '" + c4_issue + "',`c4_place` = '" + c4_place + "',`c4_file` = '" + c4_file + "' WHERE (`cand_id` = '" + cand_id + "');"
  db.query(sql, function (err, data) {
  var sql = "UPDATE `ems`.`cand_photo_details` SET `cand_photo` = '" + cand_photo + "',`cand_sign` = '" + cand_sign + "',`cand_thumb` = '" + cand_thumb + "',`cand_finger` = '" + cand_finger + "' WHERE (`cand_id` = '" + cand_id + "');"
  db.query(sql, function (err, data) {
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
                      // var sql = "UPDATE `ems`.`cand_certificate_details` SET `certificate1` = '" + certificate1 + "',`c1_reg_no` = '" + c1_reg_no + "',`c1_date` = '" + c1_date + "',`c1_issue` = '" + c1_issue + "',`c1_place` = '" + c1_place + "',`c1_file` = '" + c1_file + "',`certificate2 = '" + certificate2 + "',`c2_reg_no = '" + c2_reg_no + "',`c2_date = '" + c2_date + "',`c2_issue = '" + c2_issue + "',`c2_place` = '" + c2_place + "',`c2_file` = '" + c2_file + "',`certificate3` = '" + certificate3 + "',`c3_reg_no` = '" + c3_reg_no + "',`c3_date` = '" + c3_date + "',`c3_issue` = '" + c3_issue + "',`c3_place` = '" + c3_place + "',`c3_file` = '" + c3_file + "',`certificate4` = '" + certificate4 + "',`c4_reg_no` = '" + c4_reg_no + "',`c4_date` = '" + c4_date + "',`c4_issue` = '" + c4_issue + "',`c4_place` = '" + c4_place + "',`c4_file` = '" + c4_file + "', WHERE (`cand_id` = '" + cand_id + "');"
                      // db.query(sql, function (err, data) {
                      //    var sql = "UPDATE `ems`.`cand_certificate2_details` SET `certificate5` = '" + certificate5 + "',`c5_reg_no` = '" + c5_reg_no + "',`c5_date` = '" + c5_date + "',`c5_issue` = '" + c5_issue + "',`c5_place` = '" + c5_place + "',`c5_file` = '" + c5_file + "',`certificate6 = '" + certificate6 + "',`c6_reg_no = '" + c6_reg_no + "',`c6_date = '" + c6_date + "',`c6_issue = '" + c6_issue + "',`c6_place` = '" + c6_place + "',`c6_file` = '" + c6_file + "',`certificate7` = '" + certificate7 + "',`c7_reg_no` = '" + c7_reg_no + "',`c7_date` = '" + c7_date + "',`c7_issue` = '" + c7_issue + "',`c7_place` = '" + c7_place + "',`c7_file` = '" + c7_file + "',`certificate8` = '" + certificate8 + "',`c8_reg_no` = '" + c8_reg_no + "',`c8_date` = '" + c8_date + "',`c8_issue` = '" + c8_issue + "',`c8_place` = '" + c8_place + "',`c8_file` = '" + c8_file + "', WHERE (`cand_id` = '" + cand_id + "');"
                      // db.query(sql, function (err, data) {
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
  });
});*/

//download process
app.post("/biometric_dwd", function (req, res) {
  var post = req.body;
  var myfile = post.cand_download;
  const file = `${__dirname}/public/uploads/${myfile}`;
  res.download(file); // Set disposition and send it.
});
app.post("/notesdownload", function (req, res) {
  var post = req.body;
  var myfile = post.notename;
  const file = `${__dirname}/public/uploadnotes/${myfile}`;
  res.download(file); // Set disposition and send it.
});

// development only

app.get("/", routes.index);
app.get("/icboard", user.icboard);
// app.get('/mbbs_viewcand', user.mbbs_viewcand);
// app.post('/mbbs_viewcand', user.mbbs_viewcand);
// app.get('/update_profile', user.update_profile);
// app.post('/update_profile', user.update_profile);
// app.get('/mbbs_editcand', user.mbbs_editcand);
// app.post('/mbbs_editcand', user.mbbs_editcand);
app.get("/add_user", user.add_user);
// app.get("/report1", user.report1);
// app.post("/report1", user.report1);
// app.get("/report2", user.report2);
// app.post("/report2", user.report2);
// app.get("/report3", user.report3);
// app.post("/report3", user.report3);
// app.get("/report4", user.report4);
// app.post("/report4", user.report4);
// app.get("/report5", user.report5);
// app.post("/report5", user.report5);
// app.get("/report6", user.report6);
// app.post("/report6", user.report6);
// app.get("/report7", user.report7);
// app.post("/report7", user.report7);
// app.get("/report8", user.report8);
// app.post("/report8", user.report8);
// app.get("/report9", user.report9);
// app.post("/report9", user.report9);
// app.get("/report10", user.report10);
// app.post("/report10", user.report10);
app.get("/view_report", user.view_report);
app.post("/view_report", user.view_report);
app.post("/add_user", user.add_user);

app.get("/collect_fees", user.collect_fees);
app.post("/collect_fees", user.collect_fees);
app.get("/print_fees", user.print_fees);
app.post("/print_fees", user.print_fees);
// app.get('/mbbs_viewstudent', user.mbbs_viewstudent);

app.get("/pwdrecovery", user.pwdrecovery);
app.post("/pwdrecovery", user.pwdrecovery);
app.get("/pwdupdate", user.pwdupdate);
app.post("/pwdupdate", user.pwdupdate);

app.get("/forgotpwd", user.forgotpwd);

// app.get('/icsignup', user.icsignup);
// app.post('/icsignup', user.icsignup);

app.get("/login", routes.index);
app.get("/logout", user.logout);
app.post("/login", user.login);
app.get("/home/icdashboard", user.icdashboard);
app.get("/mbbs_board", user.mbbs_board);
app.post("/mbbs_board", user.mbbs_board);

//mdms
app.get("/mdms_board", user.mdms_board);
app.post("/mdms_board", user.mdms_board);
app.get("/update_student", upload.any(), user.edit_cand);
app.post("/update_student", upload.any(), user.edit_cand);
//app.get('/add_students',user.insert_mdms);
app.post("/add_students", upload.any(), user.insert_cand);

//reports
app.get("/get_reports", user.all_report);
app.post("/get_reports", user.all_report);

// app.get('/add_candidate', user.add_candidate);
// app.post('/add_candidate', user.add_candidate);
app.get("/reli_check", user.reli_check);
app.post("/reli_check", user.reli_check);

app.post("/del_student", user.delete_students);

app.get("/home/logout", user.logout);

//Middleware
server.listen(8080, () => {
  console.log("http://localhost:8080");
});
