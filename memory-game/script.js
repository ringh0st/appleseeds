var imagesArray = ['./cards/card_00001.jpg','./cards/card_00001.jpg','./cards/card_00013.jpg','./cards/card_00013.jpg','./cards/card_00028.jpg','./cards/card_00028.jpg','./cards/card_00019.jpg','./cards/card_00019.jpg','./cards/card_00005.jpg','./cards/card_00005.jpg','./cards/card_00006.jpg','./cards/card_00006.jpg','./cards/card_00008.jpg','./cards/card_00008.jpg','./cards/card_00014.jpg','./cards/card_00014.jpg','./cards/card_00015.jpg','./cards/card_00015.jpg','./cards/card_00016.jpg','./cards/card_00016.jpg','./cards/card_00035.jpg','./cards/card_00035.jpg','./cards/card_00018.jpg','./cards/card_00018.jpg'];
function shuffle() {
  imagesArray.sort(() => Math.random() - 0.5);
}
shuffle(imagesArray);
// const backCard = ("./cards/card_00082.jpg")

// const cardBackground = document.createElement("img");
// cardBackground.src = backCard;
// cardBackground.style.width = "160px"
// cardBackground.style.margin = "9px"

for (let index = 0; index < imagesArray.length; index++) {
  console.log(index);
  const newImage = document.createElement("img");
  newImage.classList.add(`frontcard-${index}`);
  newImage.src = imagesArray[index];
  document.querySelector("#container").appendChild(newImage);
  newImage.style.width = "160px"
  newImage.style.margin = "9px"
  newImage.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.30), 0 6px 20px 0 rgba(0, 0, 0, 0.55)";

}
function startGame(){
  shuffle(imagesArray);
	imagesArray.hide();

}