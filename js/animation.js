let currentImg = null;
let Imgs = document.getElementsByClassName('rightPannel');


if (Imgs.length > 0) {
    currentImg = Imgs[0];
}
console.log(currentImg)
Show(currentImg);
// currentImg.style.left = '1320px';


function Show(Img) {
    Img.style.animation = 'Join 1s forwards';
}


function HideCurrentImg() {
    currentImg.style.animation = 'Leave 1s';

}

function btn01_clicked() {
    HideCurrentImg();
    Show(Imgs[0]);
    currentImg = Imgs[0];


}

function btn02_clicked() {
    HideCurrentImg();
    Show(Imgs[0]);
    currentImg = Imgs[0];
}

function btn03_clicked() {
    HideCurrentImg();
    Show(Imgs[1]);
    currentImg = Imgs[1];
}

function btn04_clicked() {
    HideCurrentImg();
    Show(Imgs[2]);
    currentImg = Imgs[2];
}

function btn05_clicked() {
    HideCurrentImg();
    Show(Imgs[3]);
    currentImg = Imgs[3];
}

function btn06_clicked() {
    HideCurrentImg();
    Show(Imgs[3]);
    currentImg = Imgs[3];
}

function btn07_clicked() {
    HideCurrentImg();
    Show(Imgs[5]);
    currentImg = Imgs[5];
}

function btn08_clicked() {
    HideCurrentImg();
    Show(Imgs[6]);
    currentImg = Imgs[6];
}


//获取8个图像，并打印出来