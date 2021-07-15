/**
 * Module dependencies.
 */
require("dotenv").config();
const multer = require("multer");
const exphbs = require("express-handlebars");
const express = require("express"),
  routes = require("./routes"),
  user = require("./routes/user"),
  insert = require("./routes/insert"),
  update = require("./routes/update"),
  delte = require("./routes/delete"),
  relieve = require("./routes/relieve"),
  report = require("./routes/reports"),
  fee = require("./routes/fee"),
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

app.get("/add_user", user.add_user);

app.get("/view_report", user.view_report);
app.post("/view_report", user.view_report);
app.post("/add_user", user.add_user);

// fees
app.get("/collect_fees", fee.collect_fees);
app.post("/collect_fees", fee.collect_fees);
app.get("/print_fees", fee.print_fees);
app.post("/print_fees", fee.print_fees);
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

// insert
app.post("/add_students", upload.any(), insert.insert_cand);

// update
app.get("/update_student", upload.any(), update.edit_cand);
app.post("/update_student", upload.any(), update.edit_cand);

//reports
app.get("/get_reports", report.all_report);
app.post("/get_reports", report.all_report);

// app.get('/add_candidate', user.add_candidate);
// app.post('/add_candidate', user.add_candidate);
// relieve
app.get("/reli_check", relieve.reli_check);
app.post("/reli_check", relieve.reli_check);

// delete
app.post("/del_student", delte.delete_students);

app.get("/home/logout", user.logout);

//Middleware
server.listen(8080, () => {
  console.log("http://localhost:8080");
});
