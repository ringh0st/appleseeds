var imagesArray = ['./cards/card_00001.jpg','./cards/card_00001.jpg','./cards/card_00013.jpg','./cards/card_00013.jpg','./cards/card_00028.jpg','./cards/card_00028.jpg','./cards/card_00019.jpg','./cards/card_00019.jpg','./cards/card_00005.jpg','./cards/card_00005.jpg','./cards/card_00006.jpg','./cards/card_00006.jpg','./cards/card_00008.jpg','./cards/card_00008.jpg','./cards/card_00014.jpg','./cards/card_00014.jpg','./cards/card_00015.jpg','./cards/card_00015.jpg','./cards/card_00016.jpg','./cards/card_00016.jpg','./cards/card_00035.jpg','./cards/card_00035.jpg','./cards/card_00018.jpg','./cards/card_00018.jpg'];


for (let index = 0; index < imagesArray.length; index++) {
  console.log(index);
  
  const newImage = document.createElement("img");
  newImage.classList.add(`frontcard-${index}`);
  newImage.src = imagesArray[index];
  document.querySelector("#container").appendChild(newImage);
  newImage.style.width = "100px"

}

















// imagesArray[0] = new Image();
// imagesArray[0].src = './cards/card_00001.jpg';
// imagesArray
// imagesArray[1] = new Image();
// imagesArray[1].src = './cards/card_00002.jpg';

// imagesArray[2] = new Image();
// imagesArray[2].src = './cards/card_00003.jpg';

// imagesArray[3] = new Image();
// imagesArray[3].src = './cards/card_00004.jpg';

// imagesArray[4] = new Image();
// imagesArray[4].src = './cards/card_00005.jpg';

// imagesArray[5] = new Image();
// imagesArray[5].src = './cards/card_00006.jpg';

// imagesArray[6] = new Image();
// imagesArray[6].src = './cards/card_00007.jpg';

// imagesArray[7] = new Image();
// imagesArray[7].src = './cards/card_00008.jpg';

// imagesArray[8] = new Image();
// imagesArray[8].src = './cards/card_00009.jpg';

// imagesArray[9] = new Image();
// imagesArray[9].src = './cards/card_00010.jpg';

// imagesArray[10] = new Image();
// imagesArray[10].src = './cards/card_00011.jpg';

// imagesArray[11] = new Image();
// imagesArray[11].src = './cards/card_00012.jpg';

// imagesArray[12] = new Image();
// imagesArray[12].src = './cards/card_00013.jpg';

// imagesArray[13] = new Image();
// imagesArray[13].src = './cards/card_00014.jpg';

// imagesArray[14] = new Image();
// imagesArray[14].src = './cards/card_00015.jpg';

// imagesArray[15] = new Image();
// imagesArray[15].src = './cards/card_00016.jpg';

// for (var i = 0; i < 14; i++) { 
//     var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
//     var img = '' + rand + '.jpg';
//     imagesArray.push(img);
//     imagesArray.push(img);
//   }
//   randomizeImages();
// var output = "<ol>"; 
// for (var i = 0; i < 14; i++) { 
//   output += "<li>";
//   output += "<img src = '" + imagesArray[i] + "'/>";
//   output += "</li>";
// }
// output += "</ol>";
// document.getElementById("container").innerHTML = output;
// $("img").hide();

// var guess1 = "";
// var guess2 = "";
// var count = 0;