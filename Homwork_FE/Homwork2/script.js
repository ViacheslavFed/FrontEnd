// Создайте массив с ссылками на картинки. 
// На основе этого массива формируется множество 
// маленьких картинок в верхней части интерфейса. 
// При нажатии на одну из картинок забирается 
// ссылка на эту картинку и в нижней части 
// интерфейса отображается в большем размере.


let images = ["https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/c0193b25-0f2a-4ce1-a168-bd7994394993/300x450", 
"https://ae01.alicdn.com/kf/HTB1sqf0SzTpK1RjSZKPq6y3UpXaL.jpg", 
"https://play-lh.googleusercontent.com/LBVo0jwIpBFhteENDn7p_HOjG28bOrjlgeyp4WXyIpAKs7KztXz7bPalGBmtg9LylSy3=w240-h480-rw"];


let imgUp= document.createElement("div");
let imgDown= document.createElement("div");

for (let poster of images) {

    let card = document.createElement("img");
    card.setAttribute("src", poster);
     card.style.width = "180px";
     card.style.height = "200px";
     card.style.marginRight = "15px"
     imgUp.appendChild(card);

     card.onclick = () => {
        bigSizeImg.setAttribute("src", poster );
        imgDown.append(bigSizeImg);
     }
     document.body.append(imgUp);
 };
 
let bigSizeImg= document.createElement("img");
bigSizeImg.style.width="300px";

let divDown= document.createElement("div");
divDown.appendChild(bigSizeImg);

imgDown.appendChild(divDown);

imgDown.style.display = "flex";
imgDown.style.flexDirection = "column";
imgDown.style.alignItems = "center";
imgDown.style.marginTop = "20px";

document.body.appendChild(imgDown);