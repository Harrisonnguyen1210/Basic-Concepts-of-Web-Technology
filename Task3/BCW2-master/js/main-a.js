// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
//
// Sr but this code is for jquery:
// $(document).ready(showImages());
//
// function showImages() {
//     $("ul").load("images.html");
// }
//
// This code is for ajax:
// const xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = showImages;
// xhttp.open('GET', 'images.html', true);
// xhttp.send();
//
// function showImages() {
//     if (xhttp.readyState === 4 && xhttp.status === 200) {
//         document.querySelector('ul').innerHTML = xhttp.responseText;
//     }
// }

const showImagesWhat = (html) => {
    document.querySelector('ul').innerHTML = html;
};
fetch('images.html').then((response) => {
    return response.text();
}).then((html) => {
    showImagesWhat(html);
});





