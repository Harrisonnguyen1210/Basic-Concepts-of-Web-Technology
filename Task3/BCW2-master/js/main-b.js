// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = showImages;
xhttp.open('GET', 'images.json', true);
xhttp.send();

function showImages() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        let data = JSON.parse(xhttp.responseText);
        for (let i = 0; i < data.length; i++) {
            document.querySelector(
                'ul').innerHTML += `<li><figure><a href="img/original/${data[i].mediaUrl}">
                                  <img src="img/thumbs/${data[i].mediaThumb}"></a><figcaption>
                                  <h3>Picture ${i+1}</h3></figcaption></figure></li>`;
        }
    }
}
