const imagesList = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];
const tnList = imagesList

const imageListDom = document.querySelector('.image-list');
const tnListDom = document.querySelector('.thumbnails')

let frameContainer = "";
let tbContainer = "";

for (let i = 0; i < imagesList.length; i++){

    let createdWrapper = `<div class="image-wrapper">
        <img class="image" src="${imagesList[i]}" alt="">
        </div>`;

    frameContainer += createdWrapper;
    console.log(frameContainer);

    let createdtbContainer = `<div class="tn-wrap">
        <img class="tn-image" src="${imagesList[i]}" alt="">
        </div>`

    tbContainer += createdtbContainer;
}

imageListDom.innerHTML = frameContainer;
tnListDom.innerHTML = tbContainer;

const imageWrapperDom = document.getElementsByClassName('image-wrapper');
const tbWrapperDom = document.getElementsByClassName('tn-wrap');


let selectedImage = 0;

imageWrapperDom[selectedImage].classList.add('d-inBlock');
console.log(imageWrapperDom);

tbWrapperDom[selectedImage].classList.add('opacity');

const upDom = document.querySelector('#bt-up');

const downDom = document.querySelector('#bt-down');



upDom.addEventListener('click', 
    function() {

        if (selectedImage < imageWrapperDom.length - 1) {

            tbWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage++;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            tbWrapperDom[selectedImage].classList.add('opacity');

            downDom.classList.remove('d-none');

        }else if(selectedImage == (imageWrapperDom.length - 1)){

            tbWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');
            
            selectedImage = 0;

            tbWrapperDom[selectedImage].classList.add('opacity');

            imageWrapperDom[selectedImage].classList.add('d-inBlock');
        }
    }
);

downDom.addEventListener('click', 
    function() {

        if (selectedImage > 0) {

            tbWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage--;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            tbWrapperDom[selectedImage].classList.add('opacity');

            upDom.classList.remove('d-none');

        }else if (selectedImage == 0){
            
            tbWrapperDom[selectedImage].classList.remove('opacity');

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage = (imageWrapperDom.length - 1);

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            tbWrapperDom[selectedImage].classList.add('opacity');

        }
    }
);