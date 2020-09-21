const tesseract = require("node-tesseract-ocr");
const fs = require('fs');
 

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
  tessedit_create_hocr: 1,
  hocr_font_info: 0,
}
 
function readImg(path){
    const result = tesseract.recognize(path, config)
    .then(text => {
      fs.writeFile("hocrtest.hocr", text, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
    })
    .catch(error => {
      console.log(error.message)
    })
    return 0;
}

module.exports = {readImg}