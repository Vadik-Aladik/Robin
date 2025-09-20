const res = {
    data: "any data",
    photography: {
        italy: [
            {
                path: "public/image/image_photography_1.jpg",
                alt: "photo from italy",
            },
            {
                path: "public/image/image_photography_2.jpg",
                alt: "photo from italy",
            },
            {
                path: "public/image/image_photography_3.jpg",
                alt: "photo from italy",
            },
            {
                path: "public/image/image_photography_4.jpg",
                alt: "photo from italy",
            },
        ],
        australia: [
            {
                path: "public/image/image_photography_1.jpg",
                alt: "photo from australia",
            },
            {
                path: "public/image/image_photography_2.jpg",
                alt: "photo from australia",
            },
        ],
        india: [
            {
                path: "public/image/image_photography_2.jpg",
                alt: "photo from india",
            },
            {
                path: "public/image/image_photography_3.jpg",
                alt: "photo from india",
            },
            {
                path: "public/image/image_photography_4.jpg",
                alt: "photo from india",
            },
        ],
        brazil: [
            {
                path: "public/image/image_photography_2.jpg",
                alt: "photo from brazil",
            },
            {
                path: "public/image/image_photography_3.jpg",
                alt: "photo from brazil",
            }
        ],
    }
}

const radio = document.querySelectorAll(".country__item input[type='radio']"),
    checked = document.querySelectorAll(".country__item input[type='radio']:checked"),
    photo_country = document.querySelector(".country__image"),
    burger = document.querySelector('#burger'),
    modal = document.querySelector('.modal');

radio.forEach(elem =>{
    if(elem.hasAttribute("checked")){
        addImgCountry(elem.id);
    }

    elem.addEventListener('click', ()=>{
        addImgCountry(elem.id);
    })
});

burger.addEventListener('click', ()=>{
    modal.classList.add("modal__active");
});
modal.addEventListener('click', (e)=>{
    modal.classList.remove("modal__active");
});

function addImgCountry(country){
    photo_country.innerHTML = "";
    res.photography[country].forEach(photo =>{
        photo_country.innerHTML += `<img src="${photo.path}" height="420" alt="${photo.alt}">`;
    });
}