 function convert() {

     var hex = document.getElementById("hex-value").value; //get the value of hex input

     hex = hex.split('#').join(''); //convert to string without #

     if (hex.length != 6) {
         document.body.style.backgroundColor = "#60aba0";
         document.getElementById('rgb-value').value = '';
         return;
     }

     document.body.style.backgroundColor = hex; // change background to the hex color  
     //  document.getElementById("hex-value").style.backgroundColor = hex; // change input
     //  document.getElementById("rgb-value").style.backgroundColor = hex; //change input

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