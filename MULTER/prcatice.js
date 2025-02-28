const express = require("express");
const app = express();
app.use(express.json());
const port = 3005;
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// const floder_path = path.join(__dirname+"/assets");
// // console.log(floder_path)

// const exists = fs.existsSync(floder_path);
// // console.log(exists)
// if (!exists) {
//   fs.mkdirSync(floder_path, { recursive: true });
// }

const my_storage = multer.diskStorage({
    destination: function (req,file,cb){
      cb(null,"./assets")
    },
    filename: function (req, file, cb) {
    cb(null,Date.now()+ file.originalname);
  },
});

const upload = multer({ storage: my_storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("file upoad successfully");
});

app.listen(3005, () => {
  console.log("server has been running");
});
