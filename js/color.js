 function convert() {

     var hex = document.getElementById("hex-value").value; //get the value of hex input

     hex = hex.split('#').join(''); //convert to string without #

     if (hex.length != 6) {
         document.body.style.backgroundColor = "#60aba0";
         document.getElementById('rgb-value').value = '';
         return;
     }

     document.body.style.backgroundColor = hex; // change background to the hex color  

     var oct = parseInt(hex, 16); // convert it to 16 radix value
     var r = (oct >> 16) & 255;
     var g = (oct >> 8) & 255;
     var b = oct & 255;

     var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // Relative luminance formula

     if (luma < 40) {
         document.getElementById("hex-value").style.color = 'white';
         document.getElementById("hex-value").style.borderColor = 'white';
         document.getElementById("rgb-value").style.color = 'white';
         document.getElementById("rgb-value").style.borderColor = 'white';
     }

     document.getElementById("rgb-value").value =
         'rgb(' + r + ',' + g + ',' + b + ')';
 }

 //convert rgb to hex
 function rgbToHeX() {
     var result = '#';
     var rgb = document.getElementById("rgb-value").value;
     var nums = rgb.match(/\d+/g); // get the digits of input
     if (nums != null && nums.length === 3) {
         for (var i = 0; i < nums.length; i++) {
             result += parseDecToHex(parseInt(nums[i]));
         }
         document.getElementById('hex-value').value = result;
         document.body.style.backgroundColor = result;
     } else {
         document.getElementById('hex-value').value = '';
         document.body.style.backgroundColor = "#60aba0";
     }
 }
 // character array for hex
 var choice = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

 /* 
  *  convert dec to hex
  *  param: decimal integer
  *  return: string '00'-'FF'
  */
 function parseDecToHex(val) {
     var first = Math.floor(val / 16);
     var second = val % 16;
     return choice[first] + choice[second];
 }