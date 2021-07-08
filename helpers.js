// const imageFilter = function(req, file, cb) {
//     // Accept images only
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
//         req.fileValidationError = 'Only image files are allowed!';
//         return cb(new Error('Only image files are allowed!'), false);
//     }
//     cb(null, true);
// };
// //export
// exports.imageFilter = imageFilter;

// function begin() {
//   exports.start();
// }
// exports.start = () => {
//   date = new Date();
//   console.log(date);
// };
var array = ["f", "test"];
console.log(array.map((x) => `'${x}'`).join(","));
console.log(array.map((x) => `'${x}'`).toString());
// begin();
var dates = ["1/2/12", "15/5/12"];

console.log("'" + dates.join("','") + "'");

// console.log(!!"ewfsdf");
