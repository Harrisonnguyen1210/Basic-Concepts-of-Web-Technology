'use strict';

const frm = document.querySelector('#mediaform');
const loaderDiv = document.querySelector('#loader');

const listAllPic = () => {
    fetch('/listPic').then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
        loaderDiv.innerHTML = '';
        json.forEach(pic => {
            // console.log(pic.original);
            const image = document.createElement('img');
            image.setAttribute('src', 'uploads/'+pic.original ) ;
            loaderDiv.appendChild(image);
        });
    });
};

listAllPic();

const sendForm = (evt) => {
  evt.preventDefault();
  const fd = new FormData(frm);
  const settings = {
    method: 'post',
    body: fd,
  };

  fetch('/upload', settings).then((response) => {
      return response.text();
  }).then((text) => {
      console.log(text);
      listAllPic();
  });
};

frm.addEventListener('submit', sendForm);

