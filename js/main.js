const imagesList = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];

const imageListDom = document.querySelector('.image-list');

let frameContainer = "";


for (let i = 0; i < imagesList.length; i++){

    let createdWrapper = `<div class="image-wrapper">
        <img class="image" src="${imagesList[i]}" alt="">
        </div>`;

    frameContainer += createdWrapper;
    console.log(frameContainer);
}

imageListDom.innerHTML = frameContainer;

const imageWrapperDom = document.getElementsByClassName('image-wrapper');

let selectedImage = 0;

imageWrapperDom[selectedImage].classList.add('d-inBlock');
console.log(imageWrapperDom);


const upDom = document.querySelector('#bt-up');

const downDom = document.querySelector('#bt-down');



upDom.addEventListener('click', 
    function() {

        if (selectedImage < imageWrapperDom.length - 1) {

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage++;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            downDom.classList.remove('d-none');

        }
    }
);

downDom.addEventListener('click', 
    function() {

        if (selectedImage > 0) {

            imageWrapperDom[selectedImage].classList.remove('d-inBlock');

            selectedImage--;

            imageWrapperDom[selectedImage].classList.add('d-inBlock');

            upDom.classList.remove('d-none');
        }
    }
);